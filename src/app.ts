import express, { Application, Request, Response } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/routes'
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
export default app
