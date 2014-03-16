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
	interests: ["53244feb7a5b08000026f32a", "53244feb7a5b08000026f67a"],
	events: ["53244feb7a5b08100026f90b", "53244feb7a5b08100026f69d"],
    "_id": "53244feb7a5b08000026f67b"
  }, {
    username: "Anna",
    password: "sdfsdf",
	interests: ["53244feb7a5b08000026f32a", "53244feb7a5b08000026f67a"],
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
<<<<<<< HEAD
	events: ["53244feb7a5b08100026f69v"],
=======
	events: [""],
>>>>>>> origin/master
    "_id": "53244feb7a5b08000026f67a"
  }, {
    name: "Ice-cream", 
	userCount: 21,
<<<<<<< HEAD
	events: [],
    "_id": "53244feb7a5b08000026f67v"
=======
	events: ["53244feb7a5b08100026f90b", "53244feb7a5b08100026f69d"],
    "_id": "53244feb7a5b08000026f32a"
>>>>>>> origin/master
  }, {
    name: "Robin", 
	userCount: 21,
	events: [],
    "_id": "53244feb7a5b08000026f69v"
  }, {
    name: "Meatballs", 
	userCount: 20,
	events: [],
    "_id": "53244feb7a5b08100026f90b"
  }, {
    name: "living", 
	userCount: 1,
	events: [],
    "_id": "54244feb7a5b08100026f21a"
  });
});


Event.find({}).remove(function() {
  Event.create({
	name: "Summer party!!!", 
	date: "10.06.2014, Friday",
	description: "I SCREAM! YOU SCREAM! WE SCREAM! ICE-CREAME! Whoooooooooooo!",
	interest: "53244feb7a5b08000026f32a",
	users: ["53244feb7a5b08000026f67b"],
    "_id": "53244feb7a5b08100026f90b"
  }, {
    name: "Let's make DIY ice-cream", 
	date: "13.06.2014",
	description: "They are gonna taste disgusting...",
	interest: "53244feb7a5b08000026f32a",
	users: ["53244feb7a5b08000026f67b"],
    "_id": "53244feb7a5b08100026f69d"
  });
});


