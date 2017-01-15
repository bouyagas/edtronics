'use strict';
require('dotenv').config({ silent: true });
const express = require ('express');
const logger = require ('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');

const server = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

server.use(logger('dev'));

server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, 'dist')));

server.listen(PORT, () => console.log('Welcome to Edtronics! server listening on port', PORT));





