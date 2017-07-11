require('color');
var _ = require('lodash');
var config = require('../config/config.js');

var noop = function(){};

var consolelog = config.logging ? console.log.bind(console) : noop;

var logger = {
  log: function() {
    let args = _.toArray(arguments)
     .map(function(arg) {
       if(typeof arg === 'object') {
        var string = JSON.stringify(arg, 2);
        return string.magenta;
       }else{
        arg+=''
         return arg.magenta;
       }
     });
     consolelog.apply(console, args);
  }
};

module.exports = logger;
