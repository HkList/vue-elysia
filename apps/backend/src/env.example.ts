import type { EnvConfig } from '@backend/config.ts'

export const env: EnvConfig = {
  APP_PORT: 3000,
  NODE_ENV: 'development',

  REDIS_HOST: 'localhost',
  REDIS_PORT: 6379,

  DATABASE_URL: 'postgresql://postgres:password@localhost:5432/backend',

  OPENAPI_PATH: '/openapi',
}
