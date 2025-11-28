import { config as envConfig } from "dotenv";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { config } from "../app_config.ts";

import * as schema from "./schema.ts";
import env from "@/env.ts";

// envConfig({ path: '.env.local' })

const pool = new Pool({
  // connectionString: env.DB_URL,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
  user: env.DB_USER,
});
export const db = drizzle(pool, { schema });
