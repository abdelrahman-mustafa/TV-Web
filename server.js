const Zone = require('zone.js/dist/zone-node')
require('reflect-metadata')
const server = require('./src')
// const client_ser = require('./dist/server.js');
const path = require('path')
const join  = path.join
const express = require('express');
const config = require('./src/config/config')
const fs = require('fs')


const { ngExpressEngine } = require('@nguniversal/express-engine');
const { renderModuleFactory } =  require('@angular/platform-server');
const  { enableProdMode } =  require('@angular/core');

const  { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = fs.readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

server.express.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

server.express.set('view engine', 'html');
server.express.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
server.express.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
server.express.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});


server.express.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// server.express.get('/', (req, res) => res.redirect('/home'));

// server.express.get('/', client_ser());

server.express.get('/tv', (req, res) => res.redirect('/'));
server.express.use('/policy', (req, res) => res.sendFile(path.resolve(__dirname, './static/privacy_policy.html')));
server.express.use('/live', (req, res) => res.sendFile(path.resolve(__dirname, './static/index_kwik.html')));


server.express.use(express.static(path.resolve(__dirname, 'static')))
server.express.use('/home', (req, res) => res.sendFile(path.resolve(__dirname, './static/home/index.html')));
server.express.use('/admin', (req, res) => res.sendFile(path.resolve(__dirname, './static/admin/index.html')));
const helmet = require('helmet')
const compression = require('compression')
server.express.use(helmet())
server.express.use(compression())
// server.express.use(config.limiter)
server.start(config.options, ({ port }) => {
    console.log(`Server running at http://localhost:${port}`)
})
