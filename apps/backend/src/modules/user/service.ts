import { Drizzle, Tables } from '$db'
import { status } from 'elysia'

export class UserService {
  static async getAllUsers() {
    const data = await Drizzle.select().from(Tables.User)
    return status(200, {
      message: '获取用户列表成功',
      data,
    })
  }
}
