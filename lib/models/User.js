'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * User Schema
 */
var UserSchema = new Schema({
  username: String,
  password: String,
  interests: Array,
  events: Array
});


mongoose.model('User', UserSchema);
