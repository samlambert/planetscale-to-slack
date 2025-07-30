-- Migration: Drop unused old_user_sessions table
-- Date: 2025-01-30
-- Reason: PlanetScale detected this table as unused
-- 
-- This migration safely drops the old_user_sessions table which has been
-- identified as unused by PlanetScale monitoring.
--
-- IMPORTANT: Ensure you have a backup of this table before running this migration
-- in case it needs to be restored later.

-- Drop the unused table
DROP TABLE IF EXISTS `planetscale`.`old_user_sessions`;

-- Migration completed successfully
-- Table old_user_sessions has been dropped from planetscale keyspace