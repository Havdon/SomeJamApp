'use strict';

var mongoose = require('mongoose'),
  	User = mongoose.model('User'),
  	Interest = mongoose.model('Interest'),
	Event = mongoose.model('Event');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in

User.find({}).remove(function() {
  User.create({
    username: "Peter",
    password: "sdsdds",
	interests: [],
	events: []
  }, {
    username: "Anna",
    password: "sdfsdf",
	interests: [],
	events: []
  });
});

Interest.find({}).remove(function() {
  Interest.create({
    name: "Tennis", 
	userCount: 10,
	events: []
  }, {
    name: "Chess", 
	userCount: 20,
	events: []
  }, {
    name: "Soccer", 
	userCount: 2,
	events: []
  }, {
    name: "DANCE", 
	userCount: 100,
	events: []
  }, {
    name: "killing", 
	userCount: 0,
	events: []
  }, {
    name: "living", 
	userCount: 999,
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



