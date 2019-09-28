const RateLimit = require('express-rate-limit');

const {
  NODE_ENV, App_SECRET, PORT
} = process.env;

const CONFIG = {
    App_SECRET,
  limiter: new RateLimit({
    windowMs: 15 * 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
  }),
  options: {
    port: PORT || 5000,
    endpoint: '/api',
    // disable playground in production
    playground: NODE_ENV === 'development' ? '/playground' : false
  }
};

module.exports = { ...CONFIG };