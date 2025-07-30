-- Migration: Drop unused temp_data table
-- Date: 2025-01-30
-- Reason: PlanetScale detected this table as unused and safe to drop
-- 
-- This migration removes the temp_data table from the planetscale keyspace
-- as it has been identified as unused by PlanetScale's analysis tools.
--
-- IMPORTANT: Before running this migration, ensure:
-- 1. The table is truly unused (verified by PlanetScale analysis)
-- 2. No application code references this table
-- 3. No foreign key constraints depend on this table
-- 4. Take a backup if needed for rollback capability

-- Check if table exists before attempting to drop
-- (This is safe in MySQL/PlanetScale)
SET @table_exists = (
    SELECT COUNT(*)
    FROM information_schema.tables 
    WHERE table_schema = 'planetscale' 
    AND table_name = 'temp_data'
);

-- Drop the table if it exists
SET @sql = IF(@table_exists > 0, 'DROP TABLE `planetscale`.`temp_data`', 'SELECT "Table temp_data does not exist" as message');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Log the action
SELECT 
    CASE 
        WHEN @table_exists > 0 THEN 'temp_data table has been dropped successfully'
        ELSE 'temp_data table did not exist'
    END as migration_result;