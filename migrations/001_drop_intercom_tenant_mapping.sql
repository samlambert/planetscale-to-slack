-- Migration: Drop unused intercom_tenant_mapping table
-- Description: Remove unused table detected by PlanetScale Insights
-- Date: $(date '+%Y-%m-%d')

DROP TABLE IF EXISTS `planetscale`.`intercom_tenant_mapping`;