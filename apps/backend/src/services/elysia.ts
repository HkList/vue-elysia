import { config } from '$/config.ts'
import { userModule } from '$/modules/index.ts'
import { bearer } from '@elysiajs/bearer'
import { cors } from '@elysiajs/cors'
import { staticPlugin } from '@elysiajs/static'
import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'

export const app = new Elysia()
  .use(
    swagger({
      path: config.OPENAPI_PATH,
      documentation: {
        info: {
          title: 'vue-elysia',
          version: '1.0.0',
          description: 'vue-elysia API 文档',
        },
        security: [{ bearer: [] }],
        components: {
          securitySchemes: {
            bearer: {
              type: 'http',
              scheme: 'bearer',
            },
          },
        },
      },
    }),
  )
  .use(bearer())
  .use(cors())
  .use(staticPlugin())
  .use(userModule)

export async function initElysia() {
  return new Promise<void>((resolve) => {
    app.listen(config.APP_PORT, () => {
      console.log(`🦊 Elysia成功启动在 ${app.server?.url.origin}`)
      resolve()
    })
  })
}
