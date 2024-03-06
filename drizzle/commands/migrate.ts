import { migrate as drizzleMigrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from '../db';

export async function migrate() {
    await drizzleMigrate(db, { migrationsFolder: './migrations' });
}