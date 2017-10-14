const config = require('./server/config/config.js');
const server = require('./server/server.js');
const logger = require ('./server/util/logger.js');

server.listen(config.port);
logger.log('=====> 🌎 Listening on http//localhost:' + config.port);
