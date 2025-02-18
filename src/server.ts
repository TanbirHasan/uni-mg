import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

const port = 4000

async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connected successfully')
    app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect database', err)
  }
}

server()
