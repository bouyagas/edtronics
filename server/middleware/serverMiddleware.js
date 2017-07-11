const logger = require ('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');
const helmet = require('helmet');


// setup global function middleware here
module.exports = function(server) {
  server.use(helmet());
  server.use(logger('dev'));
  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token_authorization");
    next();
  });
  server.use(bodyParser.json());
}
