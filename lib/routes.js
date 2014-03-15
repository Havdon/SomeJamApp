'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Event API

  app.get('/api/event/id/:id', api.getEvent);
  app.get('/api/event/id/:id/interest', api.getEventInterest);
  app.get('/api/event/id/:id/name', api.getEventName);
  app.get('/api/event/id/:id/description', api.getEventDescription);
  app.get('/api/event/id/:id/date', api.getEventDate);
  app.get('/api/event/id/:id/users', api.getEventUsers);
  app.get('/api/event/all', api.getAllEvents);


  app.post('/api/event/new', api.createEvent);


  // Interest API

  app.get('/api/interest/id/:id', api.getInterest);
  app.get('/api/interest/id/:id/name', api.getInterestName);
  app.get('/api/interest/id/:id/events', api.getInterestEvents);
  app.get('/api/interest/id/:id/usercount', api.getInterestUserCount);
  app.get('/api/interest/all', api.getAllInterest);

  app.post('/api/interest/new', api.createInterest);



  // User API
  app.get('/api/user/id/:id', api.getUser);
  app.get('/api/user/id/:id/interests', api.getUserInterests);
  app.get('/api/user/id/:id/events', api.getUserEvents);
  app.get('/api/user/id/:id/username', api.getUserUsername);

  app.post('/api/user/new', api.createUser);
  app.post('/api/user/add/interest', api.addInterestToUser);
  app.post('/api/user/attend/event', api.addAttendEvent);
  

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};