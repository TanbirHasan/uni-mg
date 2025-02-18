import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Server is connected suc')
})

export default app
