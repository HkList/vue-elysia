import { Drizzle, Schemas } from '@backend/db'
import { status } from 'elysia'

export class UserService {
  static async getAllUsers() {
    // 查询数据时推荐使用这种形式
    const data = await Drizzle.query.User.findMany()

    // 也可以使用下面这种形式, 一般用于复杂查询
    const _data = await Drizzle.select().from(Schemas.User)

    return status(200, {
      message: '获取用户列表成功',
      data,
    })
  }
}
