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
    name: "My Little Pony", 
	userCount: 31,
	events: [],
    "_id": "53244feb7a5b08000026f67b"
  }, {
    name: "Sudoku", 
	userCount: 25,
	events: ["53244feb7a5b08100026f69v"],
    "_id": "53244feb7a5b08000026f67a"
  }, {
    name: "Ice-cream", 
	userCount: 21,
	events: [],
    "_id": "53244feb7a5b08000026f67v"
  }, {
    name: "Robin", 
	userCount: 21,
	events: [],
    "_id": "53244feb7a5b08000026f69v"
  }, {
    name: "Meatballs", 
	userCount: 20,
	events: [],
    "_id": "53244feb7a5b08100026f69v"
  }, {
    name: "living", 
	userCount: 1,
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
	users: ["53244feb7a5b08000026f67a"],
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


