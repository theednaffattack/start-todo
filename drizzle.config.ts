import { log } from 'console'
import { config as envConfig } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

if (process.env.NODE_ENV && process.env.NODE_ENV == 'dev') {
  envConfig({ path: '.env.local' })
} else {
  envConfig()
}

const db_url = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

console.log('DB URL', db_url)

export default defineConfig({
  out: './src/db/drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: db_url,
  },
})
