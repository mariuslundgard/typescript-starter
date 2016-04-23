import * as http from 'http'

export interface StartOptions {
  port: number
  host?: number
}

export interface HttpContext {
  request: http.IncomingMessage
  response: http.ServerResponse
}

export function start<Server> (options: StartOptions, handler: Function, callback: Function) {
  const server = http.createServer((request, response) => {
    const ctx: HttpContext = {request, response}

    handler(ctx)
  })

  server.listen(options.port, options.host, (error: Error) => {
    if (error) {
      callback(error)
      return
    }

    callback(null, server)
  })
}
