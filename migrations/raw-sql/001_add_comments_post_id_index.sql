-- Migration: Add index on comments.post_id for performance optimization
-- Date: 2024-12-27
-- Reason: PlanetScale detected that this index would improve query performance

-- Add the index
ALTER TABLE `planetscale`.`comments` ADD INDEX `idx_comments_on_post_id` (`post_id`);

-- Verify the index was created
SHOW INDEX FROM `planetscale`.`comments` WHERE Key_name = 'idx_comments_on_post_id';