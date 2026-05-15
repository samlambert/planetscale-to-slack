# Database Migrations

This directory contains database migration files for schema changes.

## How to Apply Migrations

This project uses PlanetScale for database management. Migrations should be applied using one of the following methods:

### Option 1: PlanetScale CLI
```bash
pscale shell <database> <branch> < migrations/001_drop_intercom_tenant_mapping.sql
```

### Option 2: PlanetScale Console
1. Open the PlanetScale console
2. Navigate to your database and branch
3. Use the SQL console to execute the migration

### Option 3: Deploy Request
1. Create a deploy request in PlanetScale
2. Apply the schema changes through the PlanetScale interface
3. Deploy the changes after review

## Migration Files

- `001_drop_intercom_tenant_mapping.sql` - Drops the unused intercom_tenant_mapping table
- `001_drop_intercom_tenant_mapping_rollback.sql` - Rollback instructions (restore from backup if needed)

## Notes

- Always test migrations on a development branch first
- Create a backup before applying destructive changes
- Review the changes with your team before deploying to production