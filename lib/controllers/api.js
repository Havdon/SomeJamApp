'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Interest = mongoose.model('Interest'),
	Event = mongoose.model('Event');


/**********************************

EVENT ACCESS 		START

************************************/

/**
*	Gets a event by the id
*/
exports.getEvent = function(req, res) {
	var id = req.params.id;
	return Event.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json(item);
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a event interest by the id
*/
exports.getEventInterest = function(req, res) {
	var id = req.params.id;
	return Event.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({interest: item.interest} );
		    } else {
		      return res.send(err);
		    }
        });
};



/**
*	Gets a event name by the id
*/
exports.getEventName = function(req, res) {
	var id = req.params.id;
	return Event.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({name: item.name} );
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a event description by the id
*/
exports.getEventDescription= function(req, res) {
	var id = req.params.id;
	return Event.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({description: item.description} );
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a event date by the id
*/
exports.getEventDate = function(req, res) {
	var id = req.params.id;
	return Event.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({date: item.date} );
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a event users by the id
*/
exports.getEventUsers = function(req, res) {
	var id = req.params.id;
	return Event.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({users: item.users} );
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets all events
*/
exports.getAllEvents = function(req, res) {
	return Event.find({}, function(err, item) {
            if (!err) {
		      return res.json(item);
		    } else {
		      return res.send(err);
		    }
        });
};


/**
*	Creates new event and returns JSON object of that user
*/
exports.createEvent = function(req, res) {
	var name = req.body.name;
	var date = req.body.date;
	var description = req.body.description;
	var interest = req.body.interest;

	if(name === undefined || date === undefined || description === undefined || description == undefined || interest === undefined || name.length <= 0) {
		return res.json(JSON.stringify({ success: false, error: "Some POST variable not set" }));
	}

	var eventObj = new Event({
		name: name, 
		date: date,
		description: description,
		interest: interest,
		users: []
	});

	eventObj.save(function (err) {
		if (!err) {

	      Event.findById(eventObj, function (err, doc) {
			    if (err) return res.json(JSON.stringify({ success: false, error: "Failed to find object after creation." }));
			    
			    return Interest.findByIdAndUpdate(interest, {$push: {events: doc._id}}, {safe: true, upsert: true}, function (err) {
				    if (err) return res.json(JSON.stringify({ success: false, error: "Failed to find interest." }));
				    return res.json(doc);
				  });

			    
			  });
	    } else {
	    	
	      return res.json(JSON.stringify({ success: false, error: "Failed to save event in database." }));
	    }
	});
};


/**********************************

INTEREST ACCESS 		START

************************************/


/**
*	search for interests using a string
*/
exports.searchForInterests = function(req, res) {
	var string = req.params.string;
	return Interest.find({name: new RegExp(string, "i")}, function(err, item) {
		if (!err) {
			return res.json(item);
		} else {
			return res.send(err);
		}
    });
};

/**
*	search for one interest using a string
*/
exports.searchForOneInterests = function(req, res) {
	var string = req.params.string;
	return Interest.findOne({name: new RegExp(string, "i")}, function(err, item) {
		if (!err) {
			return res.json(item);
		} else {
			return res.send(err);
		}
    });
};

/**
*	search for top interests in area
*/
exports.getTopInterests = function(req, res) {
	return Interest.find({}).sort({userCount: -1}).limit(5).exec( 
	    function(err, item) {
	    	if (!err) {
				return res.json(item);
			} else {
				return res.send(err);
			}
	    }
	);
}

/**
*	Gets a interest by the id
*/
exports.getInterest = function(req, res) {
	var id = mongoose.Types.ObjectId(req.params.id);
	return Interest.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json(item);
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a interest name by the id
*/
exports.getInterestName = function(req, res) {
	var id = req.params.id;
	return Interest.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({name: item.name });
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a interest user count by the id
*/
exports.getInterestUserCount = function(req, res) {
	var id = req.params.id;
	return Interest.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({userCount: item.userCount });
		    } else {
		      return res.send(err);
		    }
        });
};


/**
*	Gets a interest events by the id
*/
exports.getInterestEvents = function(req, res) {
	var id = req.params.id;
	return Interest.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({events: item.events });
		    } else {
		      return res.send(err);
		    }
        });
};



/**
*	Gets all interest
*/
exports.getAllInterest = function(req, res) {
	return Interest.find({}, function(err, item) {
            if (!err) {
		      return res.json(item);
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Creates new interest and returns JSON object of that user
*/
exports.createInterest = function(req, res) {
	var name = req.body.name;

	if(name === undefined || name.length <= 0) {
		return res.json(JSON.stringify({ success: false, error: "Username or password was not set" }));
	}

	var interestObj = new Interest({
		name: name, 
		userCount: 0,
		events: []
	});

	interestObj.save(function (err) {
		if (!err) {
	      Interest.findById(interestObj, function (err, doc) {
			    if (err) return res.json(JSON.stringify({ success: false, error: "Failed to find object after creation." }));
			    return res.json(doc);
			  });
	    } else {
	    	
	      return res.json(JSON.stringify({ success: false, error: "Failed to save interest in database." }));
	    }
	});
};





/**********************************

USERS ACCESS			START

************************************/


/**
*	Validates user name and password.
*/
exports.validateUser = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;


	if(username === undefined || password === undefined || username.length <= 0 || password.length <= 0) {
		return res.json(JSON.stringify({ valid: false, error: "Username or password was not set" }));
	}

	return User.findOne({'username':username, 'password': password}, function(err, item) {
            if (!err && item != undefined) {
		      return res.json({valid:true, id: item._id});
		    } else {
		      return res.json({valid:false});
		    }
        });
};

/**
*	Gets a user by the id
*/
exports.getUser = function(req, res) {
	var id = req.params.id;
	return User.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json(item);
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a user interests by the id
*/
exports.getUserInterests = function(req, res) {
	var id = req.params.id;
	return User.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({interests: item.interests});
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a user events by the id
*/
exports.getUserEvents = function(req, res) {
	var id = req.params.id;
	return User.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({events: item.events});
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Gets a user username by the id
*/
exports.getUserUsername = function(req, res) {
	var id = req.params.id;
	return User.findOne({'_id':id}, function(err, item) {
            if (!err) {
		      return res.json({username: item.username});
		    } else {
		      return res.send(err);
		    }
        });
};

/**
*	Adds an interest to a user by the id and increments the interest user count
*/
exports.addInterestToUser = function(req, res) {
	var id = req.body.userId;
	var interestId = req.body.interestId;

	if(interestId === undefined) {
		return res.json({ success: false, error: "Interest id was not found." });
	}

	if(id === undefined) {
		return res.json({ success: false, error: "User id was not found." });
	}

	return User.findByIdAndUpdate(id, {$push: {interests: interestId}}, {upsert: true}, function (err) {
			    if (err) return res.json(500, { success: false, error: "Failed to find user." });
			    return Interest.findByIdAndUpdate(interestId, {$inc: {userCount: 1}}, {safe: true, upsert: true}, function (err) {
				    if (err) return res.json({ success: false, error: "Failed to find interest." });
				    return res.json({success: true});
				  });

			  });
};

/**
*	Makes user attend event.
*/
exports.addAttendEvent = function(req, res) {
	var id = req.body.userId;
	var eventId = req.body.eventId;

	if(eventId === undefined) {
		return res.json(JSON.stringify({ success: false, error: "Event id was not found." }));
	}

	if(id === undefined) {
		return res.json({ success: false, error: "User id was not found." });
	}

	return User.findByIdAndUpdate(id, {$push: {events: eventId}}, {safe: true, upsert: true}, function (err) {
			    if (err) return res.json(500, {success: false, error: "Failed to push event into user." });
			    return Event.findByIdAndUpdate(eventId, {$push: {users: id}}, {safe: true, upsert: true}, function (err) {
				    if (err) return res.json(500, { success: false, error: "Failed push user into event." });
				    return res.json({success: true});
				  });

			  });
};

/**
*	Creates new user and returns JSON object of that user
*/
exports.createUser = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;


	if(username === undefined || password === undefined || username.length <= 0 || password.length <= 0) {
		return res.json(JSON.stringify({ success: false, error: "Username or password was not set" }));
	}

	var userObj = new User({
	  	username: username,
	 	password: password,
		interests: [],
		events: []
	});

	userObj.save(function (err) {
		if (!err) {
	      User.findById(userObj, function (err, doc) {
			    if (err) return res.json(JSON.stringify({ success: false, error: "Failed to find object after creation." }));
			    return res.json(doc);
			  });
	    } else {
	    	
	      return res.json(JSON.stringify({ success: false, error: "Failed to save interest in database." }));
	    }
	});
};