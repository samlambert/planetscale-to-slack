# Database Migrations

This directory contains SQL migration files for PlanetScale database schema changes.

## How to Apply Migrations

1. **Using PlanetScale CLI:**
   ```bash
   # Apply the migration to a development branch
   pscale shell <database-name> <branch-name> < 001_drop_intercom_tenant_mapping.sql
   ```

2. **Using PlanetScale Deploy Requests:**
   - Create a new branch in PlanetScale
   - Apply the migration to the branch
   - Create a deploy request to merge changes to main

## Migration Files

- `001_drop_intercom_tenant_mapping.sql` - Removes unused `intercom_tenant_mapping` table based on PlanetScale Insights recommendation