import 'dotenv/config'
import http from 'node:http'
import app from './app'
import { connectDBType } from './config/connectDB'

const PORT = process.env.PORT || 3000
const SERVER = http.createServer(app)

try {
  await connectDBType()
  SERVER.listen(PORT, () => {
    console.log(`Server listen in http://localhost:${PORT}`)
  })
} catch (error) {
  console.error('Connection server failed: ', error)
  process.exit(1)
}
