import { config } from '@backend/config.ts'
import { SQL } from 'bun'
import { drizzle } from 'drizzle-orm/bun-sql'

export const Client = new SQL(config.DATABASE_URL)

export const Drizzle = drizzle({ client: Client })

export { Tables } from '@backend/db/schema.ts'
export { Schemas } from '@backend/db/typebox.ts'
