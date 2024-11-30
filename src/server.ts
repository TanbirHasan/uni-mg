import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

const port = 4000

process.on('uncaughtException', err => {
  errorLogger.error(err)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully')
    server = app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('failed to connect server')
  }

  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

// SIGTERM for detecting suddden crash
