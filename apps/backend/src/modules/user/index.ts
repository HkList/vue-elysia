import { UserModel } from '@backend/modules/user/model.ts'
import { UserService } from '@backend/modules/user/service.ts'
import { Elysia } from 'elysia'

export const userModule = new Elysia({ prefix: '/users' }).get(
  '/',
  async () => await UserService.getAllUsers(),
  {
    response: {
      200: UserModel.getAllUsersSuccess,
    },
    detail: {
      summary: '获取所有用户',
      tags: ['用户管理'],
    },
  },
)
