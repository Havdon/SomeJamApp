'use strict';

angular.module('someJamAppApp')
.controller('CreateeventCtrl', function ($scope, $http, $routeParams, $location, UserSession) {
	if(UserSession.id == -1 || UserSession.data == undefined || UserSession.data == null || UserSession.data ==  null) { 
		$location.path("login");
	} else {

		$scope.interestName = "";
		$http.get('/api/interest/id/' + $routeParams.id).success(function(interest) {
			$scope.interestName = interest.name;
	    });
	}


	$scope.createEvent = function() {
		$http({
            method : 'POST',
            url: '/api/event/new',
            data: {name:$scope.name, date:$scope.date, description:$scope.description, interest:$scope.interest}
        }).success(function(eventObj) {
            $location.path('/user/interest');
        });
	}
	
});