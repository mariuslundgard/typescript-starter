import * as os from 'os'
import config from './config'

export interface Message {
  type: String
  name: String
  pid: Number
  hostname: String
  message: String
}

export function error (message: String) {
  const errorMessage: Message = {
    name: config.log.name,
    hostname: os.hostname(),
    pid: process.pid,
    type: 'error',
    message
  }

  process.stdout.write(`${JSON.stringify(errorMessage)}\n`)
}

export function info (message: String) {
  const infoMessage: Message = {
    name: config.log.name,
    hostname: os.hostname(),
    pid: process.pid,
    type: 'info',
    message
  }

  process.stdout.write(`${JSON.stringify(infoMessage)}\n`)
}
