'use strict';
require('dotenv').config({ silent: true });
const express = require ('express');
const path = require('path');
const server = express();
const api = require('./api/api.js');

// setup the server middleware
require('./middleware/serverMiddleware.js')(server);


server.use(express.static(path.join(__dirname, '../dist')));
// setup the api
server.use('/api', api);


// setup global handle errors
server.use((req, res, next)  => {
  res.status(404).sendFile(path.join(__dirname, '../public/notFound.html'));
});

server.use((err, req, res, next) => {
   console.error(err.message);
   res.status(500).sendFile(path.join(__dirname, '../public/internalServerError.html'));
});

// export the server for testing
module.exports = server;

