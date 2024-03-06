import type { Config } from "drizzle-kit";
 
import * as dotenv from 'dotenv'
dotenv.config()

export default {
  schema: "./drizzle/schema/*",
  out: "./migrations",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL ?? ""
  },
  verbose: true,
  strict: true,
} satisfies Config;