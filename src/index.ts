/// <reference path="../typings/main.d.ts" />

import {Server} from 'http'
import {StartOptions, start} from './server'
import * as log from './log'
import config from './config'

const startOptions: StartOptions = config.server

start(config.server, ({request, response}) => {
  const body = {
    message: 'Hello, world'
  }

  response.end(JSON.stringify(body))
}, (error: Error, server: Server) => {
  if (error) {
    log.error(error.message)

    process.exit(1)
  } else {
    log.info(`The application is listening at port ${config.server.port}`)

    process.once('SIGTERM', () => {
      server.close()
      process.exit(0)
    })
  }
})
