-- Drop redundant index covered by index_keyspace_config_change_on_keyspace_and_state
ALTER TABLE `planetscale`.`keyspace_config_change_request`
  DROP INDEX `index_keyspace_config_change_on_keyspace_id`;
