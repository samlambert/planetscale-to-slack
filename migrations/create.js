import fs from 'fs';
import path from 'path';

const migrationName = process.argv[2];
if (!migrationName) {
  console.error('Please provide a migration name');
  console.error('Usage: npm run migrate:create <migration_name>');
  process.exit(1);
}

const timestamp = new Date().toISOString()
  .replace(/[:-]/g, '')
  .replace(/\..+/, '')
  .replace('T', '_');

const filename = `${timestamp}_${migrationName.replace(/\s+/g, '_').toLowerCase()}.sql`;
const filepath = path.join(path.dirname(new URL(import.meta.url).pathname), filename);

const template = `-- Migration: ${migrationName}
-- Created: ${new Date().toISOString()}

-- Add your migration SQL here
`;

fs.writeFileSync(filepath, template);
console.log(`Created migration: ${filename}`);