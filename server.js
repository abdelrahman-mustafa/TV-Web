const server = require('./src')

const path = require('path')
const express = require('express');
const config = require('./src/config/config')

server.express.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.express.get('/', (req, res) => res.redirect('/tv/client'));
server.express.get('/tv', (req, res) => res.redirect('/tv/client'));

server.express.use(express.static(path.resolve(__dirname, 'static')))
server.express.use('/tv/client', (req, res) => res.sendFile(path.resolve(__dirname, './static/index.html')));
server.express.use('/tv/admin', (req, res) => res.sendFile(path.resolve(__dirname, './static/admin/index.html')));
const helmet = require('helmet')
const compression = require('compression')
server.express.use(helmet())
server.express.use(compression())
// server.express.use(config.limiter)
server.start(config.options, ({ port }) => {
    console.log(`Server running at http://localhost:${port}`)
})
