'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Event Schema
 */
var EventSchema = new Schema({
  name: String, 
  date: String,
  description: String,
  interest: String,
  users: Array
});


mongoose.model('Event', EventSchema);
