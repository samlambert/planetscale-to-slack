-- Migration: Remove redundant email index
-- Created: 2024-12-27
-- 
-- PlanetScale detected that index_users_on_email is redundant because it's
-- covered by index_users_on_email_and_status which includes both email and status columns.
-- 
-- Original index: KEY `index_users_on_email` (`email`)
-- Covering index: KEY `index_users_on_email_and_status` (`email`, `status`)
-- 
-- This change will save approximately 16384 bytes of storage while maintaining
-- the same query performance since any query that uses the email column can
-- use the composite index instead.

ALTER TABLE `planetscale`.`users` DROP INDEX `index_users_on_email`;