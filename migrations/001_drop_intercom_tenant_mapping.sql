-- Migration: Drop unused intercom_tenant_mapping table
-- PlanetScale Insights detected this table is not being used by the application
-- This migration safely removes the table to improve schema cleanliness

DROP TABLE `planetscale`.`intercom_tenant_mapping`;