import { defineConfig } from "drizzle-kit";
import env from "./src/env";

export default defineConfig({
  out: "./src/db/drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // url: db_url,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    user: env.DB_USER,
    ssl: env.ENV === "production" ? { rejectUnauthorized: false } : false,
  },
});
