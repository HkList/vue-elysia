import { t } from 'elysia'

export const UserSchema = t.Object({
  id: t.Integer(),
  name: t.String({ maxLength: 255 }),
  age: t.Integer(),
  email: t.String({ maxLength: 255 }),
  createdAt: t.Date(),
  updatedAt: t.Date(),
})

export const Schemas = {
  UserSchema,
} as const
