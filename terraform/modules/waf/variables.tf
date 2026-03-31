variable "alb_arn" {
  description = "ARN of the Application Load Balancer to protect"
  type        = string
}

# TODO: parameterise environment — currently hardcoded to "production" in tags
# TODO: make rate limit configurable — currently hardcoded to 10000
# TODO: add allowed_countries variable for geo-restriction
