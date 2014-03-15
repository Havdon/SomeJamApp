'use strict';

angular.module('someJamAppApp')
.controller('UserinterestCtrl', function ($scope, $http, $log, $location, UserSession) {
	if(UserSession.id == -1 || UserSession.data == undefined || UserSession.data.interests == undefined) { 
		$location.path("login");
	}

	$scope.interests = [];

	$log.log(UserSession.data);

	
	for(var i = 0; i < UserSession.data.interests.length; i++) {
		var interestId = UserSession.data.interests[i];
		$http.get('/api/interest/id/' + interestId).success(function(interest) {
			$log.log(interest);
			interest.eventObjects = [];
	    	for(var j = 0; j < interest.events.length; j++) {
	    		var eventId = interest.events[j];
	    		$http.get('/api/event/id/' + eventId).success(function(eventObj) {
					$log.log(eventObj);
					interest.eventObjects.push(eventObj);
			    });
	    	}


			$scope.interests.push(interest);

	    	
	    });
	}
	
});
