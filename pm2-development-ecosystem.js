
module.exports = {
  apps : [{
    name   : 'nahj-portal',
    script : './src/index.js',
    instances : 'max',
    exec_mode : 'cluster',
    env : {
      PORT : 4000,
      NODE_ENV: 'development',
      App_SECRET: 'nahj-KSA'
    }
  }]
}