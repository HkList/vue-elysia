import { initElysia } from '$/services/elysia.ts'
import { initExceptionHandler } from '$/services/exceptionHandler.ts'
import { initRedis } from '$/services/redis.ts'

initExceptionHandler()
await initRedis()
await initElysia()
