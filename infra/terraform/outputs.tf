output "rds_endpoint" {
  value = aws_db_instance.postgres.endpoint
}

output "redis_endpoint" {
  value = aws_elasticache_cluster.redis.cache_nodes[0].address
}

output "s3_bucket" {
  value = aws_s3_bucket.uploads.id
}

output "eks_cluster_name" {
  value = aws_eks_cluster.main.name
}
