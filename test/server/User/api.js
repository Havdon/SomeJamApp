'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('GET /api/user/id/10', function() {
  
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/user/id/10')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });
});


var prevUserId = 0;

// Create new user, Check initial values.
describe('POST /api/user/new', function() {
  
  it('should respond with JSON array', function(done) {

    var postData = {
        "username" : "test",
        "password" : "sdaasd"
    };

    request(app)
      .post('/api/user/new')
      .send(postData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        prevUserId = res.body._id;
        res.body.should.have.property('_id');
        res.body.should.have.property('username');
        res.body.should.have.property('password');
        res.body.should.have.property('events');
        res.body.should.have.property('interests');
        done();
      });
  });
});


// Get all user data. check values.
describe('GET /api/user/id/:id', function() {
  
  it('should respond with User data model JSON objecy', function(done) {


    request(app)
      .get('/api/user/id/' + prevUserId)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('_id');
        res.body.should.have.property('username');
        res.body.username.should.equal("test");
        res.body.should.have.property('password');
        res.body.password.should.equal("sdaasd");
        res.body.should.have.property('events');
        res.body.should.have.property('interests');
        done();
      });
  });
});

// Get interest of user.
describe('GET /api/user/id/:id/interest', function() {
  
  it('should respond with JSON object', function(done) {


    request(app)
      .get('/api/user/id/' + prevUserId + '/interests')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('interests');
        done();
      });
  });
});

// Get username of user.
describe('GET /api/user/id/:id/username', function() {
  
  it('should respond with JSON object', function(done) {


    request(app)
      .get('/api/user/id/' + prevUserId + '/username')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('username');
        res.body.username.should.equal("test");
        done();
      });
  });
});




var prevInterestId = 0;

// Create new interest. Check initial values
describe('POST /api/interest/new', function() {
  
  it('should respond with JSON object', function(done) {


    var postData = {
        "name": "tesstststT"
    };

    request(app)
      .post('/api/interest/new')
      .send(postData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('_id');
        prevInterestId = res.body._id;
        res.body.should.have.property('name');
        res.body.name.should.equal("tesstststT");
        res.body.should.have.property('userCount');
        res.body.userCount.should.equal(0);
        res.body.should.have.property('events');
        res.body.events.should.be.instanceof(Array);
        done();
      });
  });
});


// Add new interest to user
describe('POST /api/user/add/interest', function() {
  
  it('should respond with JSON object', function(done) {


    var postData = {
        "id": prevUserId,
        "interestId": prevInterestId
    };

    request(app)
      .post('/api/user/add/interest')
      .send(postData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        
        done();
      });
  });
});

// Check that user count of interest has increased
describe('GET /api/interest/id/:id', function() {
  
  it('should respond with JSON object', function(done) {


    request(app)
      .get('/api/interest/id/' + prevInterestId)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('_id');
        prevInterestId = res.body._id;
        res.body.should.have.property('name');
        res.body.name.should.equal("tesstststT");
        res.body.should.have.property('userCount');
        res.body.userCount.should.equal(1);
        res.body.should.have.property('events');
        res.body.events.should.be.instanceof(Array);
        done();
      });
  });
});

var prevEventId = 0;

// Create new event
describe('POST /api/event/new', function() {
  
  it('should respond with JSON object', function(done) {


    var postData = {
        "name": "FUN EVENT",
        "date": "0/0/0",
        "description" : "sdaksdalkasd",
        "interest"  : prevInterestId
    };

    request(app)
      .post('/api/event/new')
      .send(postData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('_id');
        prevEventId = res.body._id;
        res.body.should.have.property('name');
        res.body.name.should.equal(postData.name);
        res.body.should.have.property('date');
        res.body.date.should.equal(postData.date);
        res.body.should.have.property('description');
        res.body.description.should.equal(postData.description);
        res.body.should.have.property('interest');
        res.body.interest.should.equal(postData.interest);
        res.body.should.have.property('users');
        res.body.users.length.should.equal(0);
        
        done();
      });
  });
});


// Check that the events array length has increased to 1 after new event was created
describe('GET /api/interest/id/:id', function() {
  
  it('should respond with JSON object', function(done) {


    request(app)
      .get('/api/interest/id/' + prevInterestId)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('_id');
        prevInterestId = res.body._id;
        res.body.should.have.property('name');
        res.body.name.should.equal("tesstststT");
        res.body.should.have.property('userCount');
        res.body.userCount.should.equal(1);
        res.body.should.have.property('events');
        res.body.events.should.be.instanceof(Array);
        res.body.events.length.should.equal(1);
        done();
      });
  });
});


// Attend event
describe('POST /api/user/attend/event', function() {
  
  it('should respond with JSON object', function(done) {


    var postData = {
        "id": prevUserId,
        "eventId": prevEventId
    };

    request(app)
      .post('/api/user/attend/event')
      .send(postData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        
        done();
      });
  });
});

// Check that the events array length has increased to 1 after new event was created
describe('GET /api/event/id/:id', function() {
  
  it('should respond with JSON object', function(done) {


    request(app)
      .get('/api/event/id/' + prevEventId)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.property('name');
        res.body.should.have.property('date');
        res.body.should.have.property('description');
        res.body.should.have.property('interest');
        res.body.should.have.property('users');
        res.body.users.length.should.equal(1);
        done();
      });
  });
});