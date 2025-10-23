import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import logger from 'morgan'
import createError, { HttpError } from 'http-errors'
import helmet from 'helmet'

const app = express()
app.disable('x-powered-by')

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use(logger('dev'))

// Not found
app.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.url.startsWith('/api')) {
    return res.status(404).send('Not found')
  }
  next(createError(404, 'API route not found'))
})

// Error Handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500
  const message = err.message || 'Internal server error'

  if (res.headersSent) return next(err)
  res.status(status).json({
    success: false,
    message,
  })
})

export default app
