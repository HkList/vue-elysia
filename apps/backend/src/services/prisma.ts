import { config } from '$/config.ts'
import { PrismaClient } from '$generated/prisma_client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: config.DATABASE_URL,
})

export const prisma = new PrismaClient({
  adapter,
})

export async function initPrisma() {
  await prisma.$connect()
  console.log('🗄️  数据库连接成功!')
}
