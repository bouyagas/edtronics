const _ = require('lodash');

// default config for our api
const config = {
  // placing the name for our possible NODE_ENV value of later
  dev: 'development',
  test: 'testing',
  pord: 'producton',
  port: process.env.PORT || 3000
}
// check to see if the NODE_ENV was set, if not set it to dev.
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

// set config.env to whatever the NODE_ENV
config.dev = process.env.NODE_ENV;


 var envConfig;

try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
} catch(e) {
    envConfig
}
module.exports = _.merge(config, envConfig);
