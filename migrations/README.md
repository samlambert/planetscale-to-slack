# Database Optimization: Add Index on comments.post_id

## Background
PlanetScale has detected that a new index would improve query performance for the `comments` table.

**Optimization Details:**
- Table: `comments`
- Keyspace: `planetscale`
- New Index: `idx_comments_on_post_id`
- Columns: `post_id`
- DDL Statement: `ALTER TABLE `planetscale`.`comments` ADD INDEX `idx_comments_on_post_id` (`post_id`);`

## Performance Impact

### Benefits
- **Faster lookups**: Queries filtering by `post_id` will be significantly faster
- **Improved JOIN performance**: JOINs between posts and comments will be optimized
- **Better query planning**: Database optimizer can make better decisions

### Considerations
- **Write overhead**: Small performance impact on INSERT/UPDATE/DELETE operations
- **Storage space**: Additional ~5-10% storage for the index
- **Maintenance**: Index will be maintained automatically by the database

## Common Query Patterns That Will Benefit

```sql
-- Get all comments for a specific post
SELECT * FROM comments WHERE post_id = ?;

-- Count comments per post
SELECT post_id, COUNT(*) FROM comments GROUP BY post_id;

-- JOIN posts with their comments
SELECT p.*, c.* 
FROM posts p 
LEFT JOIN comments c ON p.id = c.post_id 
WHERE p.id = ?;

-- Get recent comments for a post
SELECT * FROM comments 
WHERE post_id = ? 
ORDER BY created_at DESC 
LIMIT 10;
```

## Implementation Examples

This directory contains migration examples for popular frameworks:

- `rails/` - ActiveRecord migration
- `django/` - Django migration
- `prisma/` - Prisma schema
- `typeorm/` - TypeORM migration
- `sequelize/` - Sequelize migration
- `raw-sql/` - Raw SQL migration files

Each implementation follows the framework's best practices for adding database indexes safely.