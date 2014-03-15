'use strict';

angular.module('someJamAppApp')
  .service('UserSession', function User() {
  	this.id = -1;
  	this.username = '';
  	this.setId = function(value) {
  		this.id = value;
  	}

  	this.setUsername = function(value) {
  		this.username = value;
  	}

  	this.isValid = function() {
  		return (this.id !== -1);
  	}

});
