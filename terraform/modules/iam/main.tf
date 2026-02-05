# DELIBERATE IaC FLAW: Wildcard IAM policy for Security Champions / tfsec / checkov training.

variable "name" {
  type = string
}

resource "aws_iam_role" "this" {
  name = var.name

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}

# Deliberate: Action = "*" and Resource = "*" for training
resource "aws_iam_role_policy" "wildcard" {
  name = "${var.name}-wildcard"
  role = aws_iam_role.this.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = "*"
        Resource = "*"
      }
    ]
  })
}
