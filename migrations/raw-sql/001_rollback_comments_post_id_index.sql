-- Rollback: Remove index on comments.post_id
-- Date: 2024-12-27

-- Remove the index
ALTER TABLE `planetscale`.`comments` DROP INDEX `idx_comments_on_post_id`;

-- Verify the index was removed
SHOW INDEX FROM `planetscale`.`comments` WHERE Key_name = 'idx_comments_on_post_id';