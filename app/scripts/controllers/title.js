'use strict';

angular.module('someJamAppApp')
  .controller('TitleCtrl', function ($scope, $http, $log) {
    
  	$scope.searchLocation = function() {
  		$http.get('/api/interest/search/top/anylocation').success(function(topInterests) {
	    	$scope.topInterests = topInterests;
	    });
  	};

  });
