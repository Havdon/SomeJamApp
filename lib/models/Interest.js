'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Interest Schema
 */
var InterestSchema = new Schema({
  name: String, 
  userCount: Number,
  events: Array
});


mongoose.model('Interest', InterestSchema);
