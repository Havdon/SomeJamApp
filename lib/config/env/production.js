'use strict';
console.log('process.env.MONGOHQ_URL = ' + process.env.MONGOHQ_URL);
module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/fullstack'
  }
};