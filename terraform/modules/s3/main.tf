# DELIBERATE IaC FLAW: Public S3 bucket for Security Champions / tfsec / checkov training.

variable "name" {
  type = string
}

variable "public_read" {
  type    = bool
  default = true # Deliberate: allows public read for training
}

resource "aws_s3_bucket" "this" {
  bucket = var.name
}

resource "aws_s3_bucket_public_access_block" "this" {
  bucket = aws_s3_bucket.this.id

  block_public_acls       = !var.public_read
  block_public_policy     = !var.public_read
  ignore_public_acls     = var.public_read
  restrict_public_buckets = !var.public_read
}

resource "aws_s3_bucket_acl" "this" {
  count  = var.public_read ? 1 : 0
  bucket = aws_s3_bucket.this.id

  acl = "public-read" # Deliberate: public read for training
}
