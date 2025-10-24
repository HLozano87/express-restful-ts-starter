import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const connectPrisma = async () => {
  try {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      throw new Error('DATABASE_URL environment variable is not defined')
    }
    await prisma.$connect()
    console.log('PostgreSQL connected')
  } catch (error) {
    console.error('PostgreSQL connection error: ', error)
    process.exit(1)
  }
}

export default prisma
