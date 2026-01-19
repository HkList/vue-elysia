import { UserModel } from '$/modules/user/model.ts'
import { UserService } from '$/modules/user/service.ts'
import { Elysia } from 'elysia'

export const userModule = new Elysia({ prefix: '/users' }).get(
  '/',
  async () => await UserService.getAllUsers(),
  {
    response: {
      200: UserModel.getAllUsers.success,
    },
    detail: {
      summary: '获取所有用户',
      tags: ['用户管理'],
    },
  },
)
