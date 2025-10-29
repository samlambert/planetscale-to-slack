-- Migration: Remove redundant index from postgres_cluster_cidr table
-- Generated: 2025-10-29
-- PlanetScale Insights Detection
--
-- Reason: Redundant index detected by PlanetScale Insights
-- The index `index_postgres_cluster_cidr_on_cidrable` is redundant because
-- it's covered by the unique index `idx_postgres_cluster_cidr_unique`
--
-- Redundant Index:
--   KEY `index_postgres_cluster_cidr_on_cidrable` (`cidrable_type`, `cidrable_id`)
--
-- Covered By:
--   UNIQUE KEY `idx_postgres_cluster_cidr_unique` (`cidrable_type`, `cidrable_id`, `database_name`, `username`)
--
-- Impact:
--   - Space saved: 16384 bytes
--   - Reduced index maintenance overhead
--   - No performance degradation (covered by unique index)

ALTER TABLE `planetscale`.`postgres_cluster_cidr` 
DROP INDEX `index_postgres_cluster_cidr_on_cidrable`;
