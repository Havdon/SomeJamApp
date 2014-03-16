'use strict';

angular.module('someJamAppApp')
.controller('CreateeventCtrl', function ($scope, $http, $routeParams, $location, UserSession) {
    
    $scope.name = undefined;
    $scope.date = undefined;
    $scope.description = undefined;
    $scope.interestName = undefined;
    
	if(UserSession.id == -1 || UserSession.data == undefined || UserSession.data == null || UserSession.data ==  null) { 
		$location.path("login");
	} else {

		$scope.interestName = "";
		$http.get('/api/interest/id/' + $routeParams.id).success(function(interest) {
			$scope.interestName = interest.name;
            $scope.interestId = $routeParams.id;
	    });
	}


	$scope.createEvent = function() {
		$http({
            method : 'POST',
            url: '/api/event/new',
            data: {name:$scope.name, date:$scope.date, description:$scope.description, interest:$scope.interestId}
        }).success(function(eventObj) {
            alert(eventObj.toString());
            $location.path('/user/interest');
        });
	}
	
});
