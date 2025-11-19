-- PlanetScale Insights recommendation: remove redundant index covered by
-- idx_on_resource_id_resource_type_invoice_id_metric__be49735b38
ALTER TABLE `planetscale`.`line_item`
  DROP INDEX `idx_on_resource_id_resource_type_invoice_id_eef6d5ed63`;
