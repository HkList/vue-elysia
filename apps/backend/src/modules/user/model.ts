import { Typeboxs } from '@backend/db'
import { t } from 'elysia'

export const UserModel = {
  getAllUsersSuccess: t.Object({
    message: t.String(),
    data: t.Array(Typeboxs.UserTypeboxSchema),
  }),
}
