'use strict';
require('dotenv').config({ silent: true });
const express = require ('express');
const logger = require ('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');
const colors = require('colors/safe');

colors.setTheme({
  info: ['white', 'bgBlack', 'underline', 'italic' ]
});

const server = express();
const PORT = process.argv[2] || process.env.PORT || 3001;

server.use(logger('dev'));

server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, 'dist')));

server.listen(PORT, () => console.log(colors.info('Welcome to Edtronics! server listening on port 3001', PORT)));





