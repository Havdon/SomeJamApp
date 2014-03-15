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
    username: "Username",
    password: "password",
	interests: ["53244feb7a5b08000026f67b", "53244feb7a5b08000026f67a"],
	events: [],
    "_id": "53244feb7a5b08000026f67b"
  }, {
    username: "Anna",
    password: "sdfsdf",
	interests: ["53244feb7a5b08000026f67b", "53244feb7a5b08000026f67a"],
	events: [],
    "_id": "53244feb7a5b08000026f67a"
  });
});

Interest.find({}).remove(function() {
  Interest.create({
    name: "Tennis", 
	userCount: 10,
	events: [],
    "_id": "53244feb7a5b08000026f67b"
  }, {
    name: "Chess", 
	userCount: 20,
	events: ["53244feb7a5b08100026f69v"],
    "_id": "53244feb7a5b08000026f67a"
  }, {
    name: "Soccer", 
	userCount: 2,
	events: [],
    "_id": "53244feb7a5b08000026f67v"
  }, {
    name: "DANCE", 
	userCount: 100,
	events: [],
    "_id": "53244feb7a5b08000026f69v"
  }, {
    name: "killing", 
	userCount: 0,
	events: [],
    "_id": "53244feb7a5b08100026f69v"
  }, {
    name: "living", 
	userCount: 999,
	events: [],
    "_id": "54244feb7a5b08100026f69v"
  });
});


Event.find({}).remove(function() {
  Event.create({
	name: "Test Event", 
	date: "1/1/2012",
	description: "A Fun Event",
	interest: "53244feb7a5b08000026f67b",
	users: [],
    "_id": "53244feb7a5b08100026f69v"
  }, {
    name: "Test Event 2", 
	date: "1/2/2012",
	description: "A Fun Event 2",
	interest: 0,
	users: [],
    "_id": "53244feb7a5b08100026f69d"
  });
});



