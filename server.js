'use strict';
require('dotenv').config({ silent: true });
const express = require ('express');
const logger = require ('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');
const helmet = require('helmet');
const colors = require('colors/safe');

colors.setTheme({
  info: ['white', 'bgBlack', 'underline', 'italic' ]
});

const server = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

server.use(logger('combined'));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token_authorization");
  next();
});

server.use(bodyParser.json());

server.use(helmet());

server.use(express.static(path.join(__dirname, 'dist')));

server.use((req, res, next)  => {
  res.status(404).sendFile(path.join(__dirname, 'public/notFound.html'));
});

server.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).sendFile(path.join(__dirname, 'public/internalServerError.html'));
});


server.listen(PORT, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(colors.info(`=====> 🌎  Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`))
  }
})



