import { config } from '$/config.ts'
import { SQL } from 'bun'
import { drizzle } from 'drizzle-orm/bun-sql'

export const client = new SQL(config.DATABASE_URL)

export const db = drizzle({ client })

export { tables } from '$/db/schema.ts'
