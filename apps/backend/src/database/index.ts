import { config } from '@backend/config.ts'
import { drizzle } from 'drizzle-orm/node-postgres'

export const Drizzle = drizzle(config.DATABASE_URL)

export { Tables } from '@backend/database/schema.ts'
export { Schemas } from '@backend/database/typebox.ts'
