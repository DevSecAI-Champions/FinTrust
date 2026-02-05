# DELIBERATE IaC FLAW: RDS without encryption or backup for Security Champions training.

variable "identifier" {
  type = string
}

resource "aws_db_instance" "this" {
  identifier     = var.identifier
  engine         = "postgres"
  engine_version = "15"
  instance_class = "db.t3.micro"

  allocated_storage     = 20
  db_name              = "fintrust"
  username             = "admin"
  password             = "ChangeMeInProduction" # Deliberate: placeholder for training

  # Deliberate: no encryption, no backup for training
  storage_encrypted = false
  backup_retention_period = 0
  skip_final_snapshot    = true

  publicly_accessible = false
}
