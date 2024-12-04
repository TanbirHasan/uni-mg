import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/routes'
import { StatusCodes } from 'http-status-codes'
const app: Application = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/', router)

app.get('/', async (req: Request, res: Response) => {
  res.send('Server is connceted successfully')
})

// global error handler
app.use(globalErrorHandler)

// handle not found route

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: '.',
        message: 'API not Found',
      },
    ],
  })
})
export default app
