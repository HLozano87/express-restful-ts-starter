import { connectMongoose } from './mongodb'
import { connectPrisma } from './postgresdb'

type DBType = 'MONGO' | 'POSTGRES'

export const connectDBType = async () => {
  const dbType = (process.env.DB_TYPE as DBType) || null

  if (!dbType) {
    throw new Error('DB_TYPE environment variable is not defined')
  }

  try {
    if (dbType === 'MONGO') {
      await connectMongoose()
    } else if (dbType === 'POSTGRES') {
      await connectPrisma()
    } else {
      throw new Error(`Invalid DB_TYPE: ${dbType}`)
    }
  } catch (error) {
    console.error('Database connection error: ', error)
    process.exit(1)
  }
}
