import { tables } from '$db'
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox'
import { t } from 'elysia'

const UserSelectSchema = createSelectSchema(tables.usersTable)
const _createUser = createInsertSchema(tables.usersTable, {
  email: t.String({ format: 'email' }),
})

export const UserModel = {
  getAllUsers: {
    success: t.Object({
      message: t.Literal('获取用户列表成功'),
      data: t.Array(UserSelectSchema),
    }),
  },
}
