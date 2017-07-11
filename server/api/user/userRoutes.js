const userRoutes = require('express').Router();
const logger = require('../../util/logger.js');
const userModel= require('./userModel.js');
const userService = require('./userServices.js');

userRoutes.route('/')
      .get((req, res) => {})
      .post((req, res) => {});

userRoutes.route('/:id')
    .get((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {});