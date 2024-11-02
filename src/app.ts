import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersService from './app/modules/users/users.service'
import usersRouter from "./app/modules/users/users.route"
const app: Application = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Application routes
app.use('/api/v1/users/',usersRouter)

app.get('/', async (req: Request, res: Response) => {
   
  res.send('Server is connceted successfully')
})

export default app
