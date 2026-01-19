import { UserPlain } from '$/prisma/generated/prismabox/User.ts'
import { t } from 'elysia'

export const UserModel = {
  getAllUsers: {
    success: t.Object({
      message: t.Literal('获取用户列表成功'),
      data: t.Array(UserPlain),
    }),
  },
}
