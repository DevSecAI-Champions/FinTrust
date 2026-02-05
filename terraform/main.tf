# FinTrust Terraform - Deliberately insecure for IaC Security Champions training.
# Do not use in production.

terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# Deliberate: public S3 bucket for training
module "s3" {
  source   = "./modules/s3"
  name     = "fintrust-training-bucket-${var.environment}"
  public_read = true
}

# Deliberate: wildcard IAM policy for training
module "iam" {
  source = "./modules/iam"
  name   = "fintrust-training-role"
}

# Deliberate: DB without encryption or backup for training
module "db" {
  source     = "./modules/db"
  identifier = "fintrust-${var.environment}"
}

variable "aws_region" {
  default = "eu-west-1"
}

variable "environment" {
  default = "training"
}
