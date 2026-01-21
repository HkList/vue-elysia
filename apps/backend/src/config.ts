import process from 'node:process'
import { env as _env } from '@backend/env.ts'
import e from 'env-var'

export interface EnvConfig {
  NODE_ENV?: 'production' | 'development'
  APP_PORT?: number

  REDIS_HOST?: string
  REDIS_PORT?: number

  DATABASE_URL: string

  OPENAPI_PATH?: string
}

const env = e.from({
  ...process.env,
  ...Object.fromEntries(Object.entries(_env).map(([key, value]) => [key, String(value)])),
})

export const config = {
  NODE_ENV: env.get('NODE_ENV').default('development').asEnum(['production', 'development']),
  APP_PORT: env.get('APP_PORT').default(3000).asPortNumber(),

  REDIS_HOST: env.get('REDIS_HOST').default('localhost').asString(),
  REDIS_PORT: env.get('REDIS_PORT').default(6379).asPortNumber(),

  DATABASE_URL: env.get('DATABASE_URL').required().asString(),

  OPENAPI_PATH: env.get('OPENAPI_PATH').default('/openapi').asString(),
}
