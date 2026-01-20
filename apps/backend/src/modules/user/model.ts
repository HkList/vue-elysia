import { Schemas } from '$db'
import { t } from 'elysia'

export const UserModel = {
  getAllUsers: {
    success: t.Object({
      message: t.Literal('获取用户列表成功'),
      data: t.Array(Schemas.UserSchema),
    }),
  },
}
