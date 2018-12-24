const server = require('./src')

const path = require('path')
const express = require('express');
const config = require('./src/config/config')

// server.express.use(express.static(path.resolve(__dirname, 'static')))

const helmet = require('helmet')
const compression = require('compression')

server.express.use(helmet())
server.express.use(compression())

server.express.use(config.limiter)


server.start(config.options, ({ port }) => {
    console.log(`Server running at http://localhost:${port}`)
  })
