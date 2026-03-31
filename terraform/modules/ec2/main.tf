# ──────────────────────────────────────────────────
# EC2 — Application Servers & Security Groups
# ──────────────────────────────────────────────────
# FinTrust application tier running on EC2 behind ALB
# Last reviewed: 2024-09-20

# ── ALB Security Group ──
resource "aws_security_group" "alb" {
  name        = "fintrust-alb-sg"
  description = "Security group for ALB"
  vpc_id      = var.vpc_id

  # Allow HTTPS from anywhere — correct
  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTP for redirect — correct
  ingress {
    description = "HTTP redirect"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "fintrust-alb-sg"
  }
}

# ── Application Security Group ──
resource "aws_security_group" "app" {
  name        = "fintrust-app-sg"
  description = "Security group for application servers"
  vpc_id      = var.vpc_id

  # Should only allow traffic from ALB — but allows from anywhere
  ingress {
    description = "Application port"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # SSH open to the world — "for debugging"
  ingress {
    description = "SSH access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # All egress allowed
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "fintrust-app-sg"
  }
}

# ── Database Security Group ──
resource "aws_security_group" "db" {
  name        = "fintrust-db-sg"
  description = "Security group for RDS"
  vpc_id      = var.vpc_id

  # Should only allow from app servers — but allows entire VPC
  ingress {
    description = "PostgreSQL"
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]
  }

  # Redis port also wide open to VPC
  ingress {
    description = "Redis"
    from_port   = 6379
    to_port     = 6379
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "fintrust-db-sg"
  }
}

# ── Application EC2 Instances ──
resource "aws_instance" "app" {
  count                = var.instance_count
  ami                  = var.ami_id
  instance_type        = "t3.medium"
  subnet_id            = var.private_subnet_ids[count.index % length(var.private_subnet_ids)]
  vpc_security_group_ids = [aws_security_group.app.id]
  iam_instance_profile = var.instance_profile_name

  # No encryption on root volume
  root_block_device {
    volume_size = 50
    volume_type = "gp3"
    encrypted   = false
  }

  # IMDSv1 enabled — vulnerable to SSRF token theft
  metadata_options {
    http_endpoint = "enabled"
    http_tokens   = "optional"
  }

  # User data with inline secret for bootstrapping
  user_data = <<-EOF
    #!/bin/bash
    export DB_PASSWORD="FinTrust2024!"
    export API_KEY="sk-prod-fintrust-a1b2c3d4e5f6"
    cd /opt/fintrust && docker-compose up -d
  EOF

  tags = {
    Name        = "fintrust-app-${count.index + 1}"
    Environment = "production"
    ManagedBy   = "terraform"
  }
}

# ── Application Load Balancer ──
resource "aws_lb" "app" {
  name               = "fintrust-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = var.public_subnet_ids

  # Access logging disabled — "will enable once S3 bucket is ready"
  # access_logs {
  #   bucket  = var.log_bucket
  #   prefix  = "alb-logs"
  #   enabled = true
  # }

  # Deletion protection off
  enable_deletion_protection = false

  # Drop invalid headers disabled
  drop_invalid_header_fields = false

  tags = {
    Name = "fintrust-alb"
  }
}

# ── HTTPS Listener ──
resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.app.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = var.certificate_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app.arn
  }
}

# HTTP listener — no redirect to HTTPS, just forwards plaintext
resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.app.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app.arn
  }
}

resource "aws_lb_target_group" "app" {
  name     = "fintrust-app-tg"
  port     = 3000
  protocol = "HTTP"
  vpc_id   = var.vpc_id

  health_check {
    path                = "/health"
    healthy_threshold   = 2
    unhealthy_threshold = 5
    timeout             = 10
    interval            = 30
  }
}
