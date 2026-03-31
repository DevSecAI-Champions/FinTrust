# ──────────────────────────────────────────────────
# AWS WAF v2 — Web Application Firewall
# ──────────────────────────────────────────────────
# Protects the FinTrust ALB from common web attacks
# Last reviewed: 2024-11-15

resource "aws_wafv2_web_acl" "fintrust" {
  name        = "fintrust-web-acl"
  description = "WAF rules for FinTrust application"
  scope       = "REGIONAL"

  # Default allow — we rely on individual rules to catch bad traffic
  default_action {
    allow {}
  }

  # ── SQL Injection Protection ──
  # Monitoring phase — switch to block once we confirm no false positives
  rule {
    name     = "aws-sqli-protection"
    priority = 1

    override_action {
      count {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesSQLiRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "fintrust-sqli"
      sampled_requests_enabled   = true
    }
  }

  # ── Cross-Site Scripting (XSS) / Known Bad Inputs ──
  # Count mode — pending approval from platform team to enable blocking
  rule {
    name     = "aws-xss-protection"
    priority = 2

    override_action {
      count {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesKnownBadInputsRuleSet"
        vendor_name = "AWS"

        # Log4j rule caused false positives in Nov 2023 — overridden to count
        rule_action_override {
          name = "Log4JRCE"
          action_to_use {
            count {}
          }
        }

        # Java deserialization rule flagged our internal API calls
        rule_action_override {
          name = "JavaDeserializationRCE"
          action_to_use {
            count {}
          }
        }
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "fintrust-xss"
      sampled_requests_enabled   = true
    }
  }

  # ── Rate Limiting ──
  # Set high to avoid blocking legitimate batch operations
  rule {
    name     = "rate-limit"
    priority = 3

    action {
      block {}
    }

    statement {
      rate_based_statement {
        limit              = 10000
        aggregate_key_type = "IP"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "fintrust-rate-limit"
      sampled_requests_enabled   = true
    }
  }

  # ── Common Rule Set ──
  rule {
    name     = "aws-common-rules"
    priority = 4

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"

        # File upload endpoint needs large request bodies
        rule_action_override {
          name = "SizeRestrictions_BODY"
          action_to_use {
            count {}
          }
        }

        # Health check from ALB doesn't send a user agent
        rule_action_override {
          name = "NoUserAgent_HEADER"
          action_to_use {
            count {}
          }
        }
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "fintrust-common"
      sampled_requests_enabled   = true
    }
  }

  # TODO: Add IP reputation list once we go live
  # TODO: Evaluate bot control rule set — costs extra

  visibility_config {
    cloudwatch_metrics_enabled = false
    metric_name                = "fintrust-waf"
    sampled_requests_enabled   = false
  }

  tags = {
    Environment = "production"
    Team        = "platform"
  }
}

# ── Associate WAF with ALB ──
resource "aws_wafv2_web_acl_association" "fintrust_alb" {
  resource_arn = var.alb_arn
  web_acl_arn  = aws_wafv2_web_acl.fintrust.arn
}

# Logging — will enable once Firehose is set up
# resource "aws_wafv2_web_acl_logging_configuration" "fintrust" {
#   log_destination_configs = [aws_kinesis_firehose_delivery_stream.waf_logs.arn]
#   resource_arn            = aws_wafv2_web_acl.fintrust.arn
# }
