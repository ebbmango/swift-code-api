import { DatabaseSync } from "node:sqlite";

// internal state
let db: DatabaseSync | null = null;

/**
 * Starts the SQLite database and applies the schema.
 */
export async function startDatabase(path: string = "./data/sqlite.db"): Promise<void> {
  if (db) throw new Error("Database already started.");
  db = new DatabaseSync(path);
  await initSchema();
}

/**
 * Returns the current DB instance, or throws if not started.
 */
export function useDatabase(): DatabaseSync {
  if (!db) throw new Error("Database not started yet.");
  return db;
}

/**
 * Applies the SQL schema.
 */
async function initSchema(): Promise<void> {
  const schemaSQL: string = await Deno.readTextFile("src/database/schema.sql");
  useDatabase().exec(schemaSQL);
}
