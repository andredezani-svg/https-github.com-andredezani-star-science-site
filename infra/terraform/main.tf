terraform {
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

# VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags = { Name = "starsciencelab-vpc" }
}

# Public subnets
resource "aws_subnet" "public" {
  count                   = 2
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(aws_vpc.main.cidr_block, 8, count.index)
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
  tags = { Name = "starsciencelab-public-${count.index}" }
}

# Private subnets (app)
resource "aws_subnet" "private_app" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(aws_vpc.main.cidr_block, 8, count.index + 10)
  availability_zone = data.aws_availability_zones.available.names[count.index]
  tags = { Name = "starsciencelab-private-app-${count.index}" }
}

# Private subnets (data)
resource "aws_subnet" "private_data" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(aws_vpc.main.cidr_block, 8, count.index + 20)
  availability_zone = data.aws_availability_zones.available.names[count.index]
  tags = { Name = "starsciencelab-private-data-${count.index}" }
}

# RDS PostgreSQL
resource "aws_db_instance" "postgres" {
  identifier        = "starsciencelab-db"
  engine            = "postgres"
  engine_version    = "16.3"
  instance_class    = "db.t4g.large"
  allocated_storage = 100
  db_name           = "starsciencelab"
  username          = var.db_username
  password          = var.db_password
  skip_final_snapshot = false
  backup_retention_period = 30
  backup_window     = "03:00-04:00"
  maintenance_window = "sun:04:00-sun:05:00"
  multi_az          = true
  storage_encrypted = true
  db_subnet_group_name = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.rds.id]
  tags = { Name = "starsciencelab-postgres" }
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "starsciencelab-redis"
  engine               = "redis"
  node_type            = "cache.t4g.medium"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7"
  subnet_group_name    = aws_elasticache_subnet_group.main.name
  security_group_ids   = [aws_security_group.redis.id]
  tags = { Name = "starsciencelab-redis" }
}

# S3 bucket for uploads
resource "aws_s3_bucket" "uploads" {
  bucket = "starsciencelab-uploads"
  tags   = { Name = "starsciencelab-uploads" }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "uploads" {
  bucket = aws_s3_bucket.uploads.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "uploads" {
  bucket                = aws_s3_bucket.uploads.id
  block_public_acls     = true
  block_public_policy   = true
  ignore_public_acls    = true
  restrict_public_buckets = true
}

# EKS Cluster
resource "aws_eks_cluster" "main" {
  name     = "starsciencelab-eks"
  role_arn = aws_iam_role.eks.arn
  vpc_config {
    subnet_ids = concat(aws_subnet.public[*].id, aws_subnet.private_app[*].id)
  }
  tags = { Name = "starsciencelab-eks" }
}

# Security groups
resource "aws_security_group" "rds" {
  name   = "starsciencelab-rds-sg"
  vpc_id = aws_vpc.main.id
  ingress {
    from_port = 5432
    to_port   = 5432
    protocol  = "tcp"
    cidr_blocks = [aws_vpc.main.cidr_block]
  }
}

resource "aws_security_group" "redis" {
  name   = "starsciencelab-redis-sg"
  vpc_id = aws_vpc.main.id
  ingress {
    from_port = 6379
    to_port   = 6379
    protocol  = "tcp"
    cidr_blocks = [aws_vpc.main.cidr_block]
  }
}

# Data sources
data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_db_subnet_group" "main" {
  name       = "starsciencelab-db-subnet"
  subnet_ids = aws_subnet.private_data[*].id
}

resource "aws_elasticache_subnet_group" "main" {
  name       = "starsciencelab-redis-subnet"
  subnet_ids = aws_subnet.private_data[*].id
}

resource "aws_iam_role" "eks" {
  name = "starsciencelab-eks-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "eks.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "eks_policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.eks.name
}
