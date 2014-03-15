'use strict';

angular.module('someJamAppApp')
  .controller('MeetupsCtrl', function ($scope, $http, $location, $log, UserSession) {
  	if(UserSession.id == -1 || UserSession.data == undefined || UserSession.data == null || UserSession.data ==  null) { 
		$location.path("login");
	} else {
		$scope.events = [];

		for(var j = 0; j < UserSession.data.events.length; j++) {
    		var eventId = UserSession.data.events[j];
    		$http.get('/api/event/id/' + eventId).success(function(eventObj) {
    			$http.get('/api/interest/id/' + eventObj.interest).success(function(interest) {
    				eventObj.interest = interest;
    				$log.log(eventObj);
    				$scope.events.push(eventObj);
    			});
				
		    });
    	}
	}
    //$scope.events = UserSession.data.events;
  });
