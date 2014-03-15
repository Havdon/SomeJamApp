'use strict';

angular.module('someJamAppApp')
  .service('UserSession', function User() {
  	this.id = -1;
  	this.data = null;
  	this.setId = function(value) {
  		this.id = value;
  	}

  	this.setDataObject = function(value) {
  		this.data = value;
  	}

  	this.isValid = function() {
  		return (this.id !== -1);
  	}

});
