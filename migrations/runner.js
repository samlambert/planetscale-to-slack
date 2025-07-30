import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

async function runMigrations() {
  try {
    // Create migrations table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        filename VARCHAR(255) NOT NULL UNIQUE,
        executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Get all migration files
    const migrationsDir = path.dirname(new URL(import.meta.url).pathname);
    const files = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort();

    for (const file of files) {
      // Check if migration has already been run
      const [rows] = await connection.execute(
        'SELECT * FROM migrations WHERE filename = ?',
        [file]
      );

      if (rows.length === 0) {
        console.log(`Running migration: ${file}`);
        
        // Read and execute migration
        const migration = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
        await connection.execute(migration);
        
        // Record migration as completed
        await connection.execute(
          'INSERT INTO migrations (filename) VALUES (?)',
          [file]
        );
        
        console.log(`✓ Migration ${file} completed`);
      } else {
        console.log(`⏭ Migration ${file} already applied`);
      }
    }
    
    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

runMigrations();