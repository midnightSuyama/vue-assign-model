const nightwatch = require('nightwatch')
const httpServer = require('http-server')

var server = httpServer.createServer({
  root: '.'
})
server.listen(8080)

nightwatch.runner({
  config: 'test/nightwatch.config.js'
}, done => {
  server.close()
})
