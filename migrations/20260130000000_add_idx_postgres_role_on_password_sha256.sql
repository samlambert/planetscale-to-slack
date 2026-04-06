ALTER TABLE `planetscale`.`postgres_role`
  ADD INDEX `idx_postgres_role_on_password_sha256` (`password_sha256`);
