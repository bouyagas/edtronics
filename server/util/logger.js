
require('color');
const _ = require('lodash');
const config = require('../config/config.js');

const noop = () => {};

const consolelog = config.logging ? console.log.bind(console) : noop;

const logger = {
  log: () => {
    let args = _.toArray(arguments)
     .map((arg) => {
       if(typeof arg === 'object') {
        // let string = JSON.stringify(arg, 2);
        // return string.magenta;
       }else{
        arg+=''
         return arg.magenta;
       }
     });
     consolelog.apply(console, args);
  }
}

module.exports = logger;
