# Database Migrations

This directory contains database migrations for the PlanetScale database schema optimization.

## Setup

1. Set up your environment variables in `.env`:
   ```
   DATABASE_HOST=your-planetscale-host
   DATABASE_USERNAME=your-username
   DATABASE_PASSWORD=your-password
   DATABASE_NAME=planetscale
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Migrations

To run all pending migrations:
```bash
npm run migrate
```

## Creating New Migrations

To create a new migration:
```bash
npm run migrate:create "migration description"
```

This will create a new timestamped SQL file in the migrations directory.

## Migration Files

- `20241227_remove_redundant_email_index.sql` - Removes the redundant `index_users_on_email` index as recommended by PlanetScale optimization analysis.

## Index Optimization Details

The removed index `index_users_on_email` was redundant because:
- It only indexed the `email` column
- The existing `index_users_on_email_and_status` index covers both `email` and `status` columns
- MySQL can use composite indexes for queries that only need the first column(s)
- This optimization saves 16384 bytes of storage space
- Query performance remains unchanged as the composite index provides the same functionality

## Safety Considerations

- The migration verifies that the covering index exists before removing the redundant index
- All migrations are tracked in the `migrations` table to prevent duplicate executions
- Each migration is atomic and will roll back on error