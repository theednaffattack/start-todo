import { config as envConfig } from 'dotenv'

import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { config } from '../app_config.ts'

import * as schema from './schema.ts'

// envConfig({ path: '.env.local' })

if (process.env.NODE_ENV && process.env.NODE_ENV == 'dev') {
  envConfig({ path: '.env.local' })
} else {
  envConfig()
}

const pool = new Pool({
  connectionString: config.db_url,
})
export const db = drizzle(pool, { schema })
