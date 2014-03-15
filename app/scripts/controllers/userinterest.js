'use strict';

angular.module('someJamAppApp')
.controller('UserinterestCtrl', function ($scope, $http, $log, $location, UserSession) {
	if(UserSession.id == -1 || UserSession.data == undefined || UserSession.data == null) { 
		$location.path("login");
	}

	$scope.goToDetails = function(id) {
        //UserSession.data.eventId = id;
        $location.path("user/eventdetails/"+id);
    }
	$scope.interests = [];
	
	if(UserSession.data != null) {
		for(var i = 0; i < UserSession.data.interests.length; i++) {
			var interestId = UserSession.data.interests[i];
			$http.get('/api/interest/id/' + interestId).success(function(interest) {
				interest.eventObjects = [];
		    	for(var j = 0; j < interest.events.length; j++) {
		    		var eventId = interest.events[j];
		    		$http.get('/api/event/id/' + eventId).success(function(eventObj) {
						interest.eventObjects.push(eventObj);
				    });
		    	}


				$scope.interests.push(interest);

		    	
		    });
		}
	}


	$scope.containsThisUser = function(users) {
		for(i = 0; i < users.length; i++) {
			if(users[i] === UserSession.id)
				return true;
		}
		return false;
	}

	$scope.searchInterest = {};

	$scope.searchChanged = function() {
		if($scope.interestSearch.length >= 3) {
			$http.get('/api/interest/search/one/name/' + $scope.interestSearch).success(function(interest) {
				if($scope.searchInterest == undefined || $scope.searchInterest._id !== interest._id) {
					if(UserSession.data.interests.indexOf(interest._id) === -1) {
						$scope.searchInterest = interest;
						if($scope.searchInterest != undefined) {
							$scope.eventObjects = [];
							if($scope.searchInterest.events != undefined) {
						    	for(var j = 0; j < $scope.searchInterest.events.length; j++) {
						    		var eventId = $scope.searchInterest.events[j];
						    		$http.get('/api/event/id/' + eventId).success(function(eventObj) {
										$scope.eventObjects.push(eventObj);
								    });
						    	}
						    }
					    }
					}
				}
			})
			.error(function(data) {
				$scope.searchInterest = {};
			    });
		} else {
			$scope.searchInterest = {};
		}
	}

	$scope.addInterest = function() {
		if($scope.searchInterest._id !== undefined) {
			if(UserSession.data.interests.indexOf($scope.searchInterest._id) === -1) {
				$http({
		            method : 'POST',
		            url : '/api/user/add/interest',
		            data : {userId:UserSession.id, interestId: $scope.searchInterest._id}
		        }).success(function(userData) {
		        	if(userData.success != false) {
			        	$scope.searchInterest.userCount++;
			        	$scope.interests.push($scope.searchInterest);
						UserSession.data.interests.push($scope.searchInterest._id);
			        	$scope.interestSearch = '';
			        	$scope.searchInterest = {};
			        }
		        });
		    }
	    }
	}

	$scope.createNewEvent = function(id) {
		$location.path("/events/create/" + id);
	}
	
});
