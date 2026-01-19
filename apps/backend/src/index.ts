import { initElysia } from '$/services/elysia.ts'
import { initExceptionHandler } from '$/services/exceptionHandler.ts'
import { initPrisma } from '$/services/prisma.ts'
import { initRedis } from '$/services/redis.ts'

initExceptionHandler()
await initRedis()
await initPrisma()
await initElysia()
