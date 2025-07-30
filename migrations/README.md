# Database Migrations

This directory contains SQL migration scripts for the PlanetScale database.

## Migration Files

### 20250730201235_drop_temp_data_table.sql
- **Purpose**: Drops the unused `temp_data` table from the `planetscale` keyspace
- **Reason**: PlanetScale analysis detected this table as unused and safe to remove
- **Safety**: Includes existence checks and detailed logging

## How to Apply Migrations

Since this is a webhook receiver application, migrations should be applied directly to your PlanetScale database using one of these methods:

### Option 1: PlanetScale CLI
```bash
pscale shell <database> <branch> < migrations/20250730201235_drop_temp_data_table.sql
```

### Option 2: PlanetScale Console
1. Navigate to your database in the PlanetScale console
2. Open the console/query interface
3. Copy and paste the migration SQL
4. Execute the statements

### Option 3: Main Application
If you have a main application that manages this database:
- Copy this migration to your application's migration system
- Follow your framework's migration process (Rails, Django, etc.)

## Safety Checklist

Before applying any migration:
- [ ] Verify the table is truly unused
- [ ] Check for any foreign key relationships
- [ ] Ensure no application code references the table
- [ ] Consider taking a backup for rollback capability
- [ ] Test on a development branch first

## Rollback

If you need to recreate the table, you would need to:
1. Have the original table schema
2. Restore from backup, or
3. Recreate manually (not recommended without knowing the original structure)