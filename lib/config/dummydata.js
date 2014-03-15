'use strict';

var mongoose = require('mongoose'),
  	User = mongoose.model('User'),
  	Interest = mongoose.model('Interest'),
	Event = mongoose.model('Event');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
/*
User.find({}).remove(function() {
  User.create({
    username: "Test",
    password: "PASS",
	interests: [],
	events: []
  }, {
    username: "sdfsdf",
    password: "PAsdfsdfSS",
	interests: [],
	events: []
  });
});

Interest.find({}).remove(function() {
  Interest.create({
    name: "Tennis", 
	userCount: 0,
	events: []
  }, {
    name: "Chess", 
	userCount: 0,
	events: []
  });
});


Event.find({}).remove(function() {
  Event.create({
	name: "Test Event", 
	date: "1/1/2012",
	description: "A Fun Event",
	interest: 0,
	users: []
  }, {
    name: "Test Event 2", 
	date: "1/2/2012",
	description: "A Fun Event 2",
	interest: 0,
	users: []
  });
});
*/


