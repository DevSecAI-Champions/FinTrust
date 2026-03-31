# ──────────────────────────────────────────────────
# EC2 Module — Variables
# ──────────────────────────────────────────────────

variable "vpc_id" {
  description = "VPC ID for security groups and target group"
  type        = string
}

variable "public_subnet_ids" {
  description = "Public subnet IDs for the ALB"
  type        = list(string)
}

variable "private_subnet_ids" {
  description = "Private subnet IDs for app instances"
  type        = list(string)
}

variable "ami_id" {
  description = "AMI ID for EC2 instances"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.medium"
}

variable "certificate_arn" {
  description = "ACM certificate ARN for HTTPS listener"
  type        = string
}

# No variable for SSH key pair — hardcoded in main.tf
# No variable for allowed SSH CIDR — defaults to 0.0.0.0/0
# No variable for DB password — inline in user_data
# No variable for API key — inline in user_data
