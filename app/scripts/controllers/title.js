'use strict';

angular.module('someJamAppApp')
  .controller('TitleCtrl', function ($scope, $location, $http, $log, UserSession) {
    if(UserSession.id != -1) { 
		$location.path("user/interest");
	}
    $scope.withTop = 'withoutTop';
  	$scope.searchLocation = function() {
  		$http.get('/api/interest/search/top/anylocation').success(function(topInterests) {
	    	$scope.topInterests = topInterests;
            $scope.withTop = 'withTop';
	    });
  	};

  });
