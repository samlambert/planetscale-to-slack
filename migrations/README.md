# Database Migrations

This directory contains SQL migration files for database schema changes.

## How to Apply Migrations

### Using PlanetScale CLI

1. **Install PlanetScale CLI** (if not already installed):
   ```bash
   # macOS
   brew install planetscale/tap/pscale
   
   # Other platforms - see https://docs.planetscale.com/reference/planetscale-cli
   ```

2. **Authenticate with PlanetScale**:
   ```bash
   pscale auth login
   ```

3. **Create a new branch for the migration**:
   ```bash
   pscale branch create <your-database> migration-branch
   ```

4. **Apply the migration**:
   ```bash
   pscale shell <your-database> migration-branch < migrations/20250730201148_drop_old_user_sessions_table.sql
   ```

5. **Create a deploy request**:
   ```bash
   pscale deploy-request create <your-database> migration-branch
   ```

6. **Review and deploy through PlanetScale dashboard**

### Using PlanetScale Web Console

1. Navigate to your database in the PlanetScale dashboard
2. Create a new branch for the migration
3. Open the console for the new branch
4. Copy and paste the SQL from the migration file
5. Execute the migration
6. Create a deploy request to merge changes to main

## Migration Files

### 20250730201148_drop_old_user_sessions_table.sql
- **Purpose**: Drops the unused `old_user_sessions` table
- **Reason**: Table identified as unused by PlanetScale monitoring
- **Safety**: Uses `DROP TABLE IF EXISTS` to prevent errors if table doesn't exist

### 20250730201148_drop_old_user_sessions_table_rollback.sql
- **Purpose**: Rollback migration to restore the table if needed
- **Warning**: Creates empty table structure - data must be restored from backup

## Safety Guidelines

1. **Always backup** before running destructive migrations
2. **Test migrations** on a development branch first
3. **Review foreign key constraints** before dropping tables
4. **Verify table is truly unused** before dropping
5. **Keep rollback scripts** for critical changes

## Verification

Before applying the drop migration, verify the table is unused:

```sql
-- Check for any foreign key references
SELECT 
  TABLE_NAME,
  COLUMN_NAME,
  CONSTRAINT_NAME,
  REFERENCED_TABLE_NAME,
  REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE REFERENCED_TABLE_NAME = 'old_user_sessions';

-- Check table size and last modification
SELECT 
  table_name,
  table_rows,
  data_length,
  update_time
FROM information_schema.tables 
WHERE table_name = 'old_user_sessions';
```