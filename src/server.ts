import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'

const port = 4000

async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully')
    app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('failed to connect server')
  }
}

server()
