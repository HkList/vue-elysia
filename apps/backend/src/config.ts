import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import env from 'env-var'

const __dirname = dirname(fileURLToPath(import.meta.url))

dotenv.config({
  path: resolve(__dirname, '../.env'),
  quiet: true,
})

export const config = {
  NODE_ENV: env.get('NODE_ENV').default('development').asEnum(['production', 'development']),
  APP_PORT: env.get('APP_PORT').default(3000).asPortNumber(),

  DATABASE_URL: env.get('DATABASE_URL').required().asString(),

  REDIS_HOST: env.get('REDIS_HOST').default('localhost').asString(),
  REDIS_PORT: env.get('REDIS_PORT').default(6379).asPortNumber(),

  OPENAPI_PATH: env.get('OPENAPI_PATH').default('/openapi').asString(),
}
