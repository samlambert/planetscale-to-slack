-- Rollback Migration: Restore old_user_sessions table
-- Date: 2025-01-30
-- 
-- This rollback migration can be used to restore the old_user_sessions table
-- if it needs to be recovered after the drop migration.
--
-- NOTE: This is a basic structure. You may need to adjust column types,
-- constraints, and data based on your specific requirements.
--
-- WARNING: This will create an empty table. If you need to restore data,
-- you must restore from a backup taken before the table was dropped.

-- Recreate the table (basic structure - adjust as needed)
CREATE TABLE IF NOT EXISTS `planetscale`.`old_user_sessions` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `session_id` varchar(128) NOT NULL,
    `user_id` bigint(20) DEFAULT NULL,
    `ip_address` varchar(45) DEFAULT NULL,
    `user_agent` text,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `expires_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `session_id` (`session_id`),
    KEY `user_id` (`user_id`),
    KEY `expires_at` (`expires_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- NOTE: Remember to restore data from backup if needed