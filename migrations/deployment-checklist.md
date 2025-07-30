# Deployment Checklist: Add comments.post_id Index

## Pre-deployment Verification

- [ ] **Query Analysis**: Confirm that adding an index on `post_id` will benefit the most common query patterns
- [ ] **Table Size**: Check current table size to estimate index creation time
- [ ] **Write Load**: Verify current write load to assess impact during index creation
- [ ] **Backup**: Ensure recent database backup is available
- [ ] **Monitoring**: Set up monitoring for the migration process

## Deployment Steps

### For PlanetScale (Recommended)
- [ ] Create a new branch in PlanetScale
- [ ] Apply the DDL statement: `ALTER TABLE comments ADD INDEX idx_comments_on_post_id (post_id);`
- [ ] Test query performance on the branch
- [ ] Create a deploy request
- [ ] Review and approve the deploy request
- [ ] Monitor performance after deployment

### For Traditional MySQL
- [ ] Check current server load
- [ ] Run during low-traffic hours
- [ ] Use `ALGORITHM=INPLACE, LOCK=NONE` if supported:
  ```sql
  ALTER TABLE comments 
  ADD INDEX idx_comments_on_post_id (post_id) 
  ALGORITHM=INPLACE, LOCK=NONE;
  ```
- [ ] Monitor `SHOW PROCESSLIST` during execution
- [ ] Verify index creation with `SHOW INDEX FROM comments;`

## Post-deployment Verification

- [ ] **Index Exists**: Verify the index was created successfully
- [ ] **Query Performance**: Test that target queries are using the new index
- [ ] **Application Performance**: Monitor application response times
- [ ] **Write Performance**: Ensure write operations are not significantly impacted
- [ ] **Error Monitoring**: Check for any new database errors

## Query Testing Commands

```sql
-- Verify index exists
SHOW INDEX FROM comments WHERE Key_name = 'idx_comments_on_post_id';

-- Test query plans (should use the new index)
EXPLAIN SELECT * FROM comments WHERE post_id = 123;

-- Performance comparison
SELECT COUNT(*) FROM comments WHERE post_id IN (1, 2, 3, 4, 5);
```

## Rollback Plan

If issues occur:
1. Monitor error rates and performance metrics
2. If performance degrades significantly, remove the index:
   ```sql
   ALTER TABLE comments DROP INDEX idx_comments_on_post_id;
   ```
3. Investigate the root cause before attempting re-deployment

## Success Criteria

- [ ] Index creation completes without errors
- [ ] Target queries show improved execution time
- [ ] No significant impact on write performance
- [ ] Application response times improve or remain stable
- [ ] No increase in database error rates