var pkg = require('../package.json')

export default {
  log: {
    name: pkg.name
  },
  server: {
    port: parseInt(process.env.APP_PORT || '8080', 10),
    host: process.env.APP_HOST
  }
}
