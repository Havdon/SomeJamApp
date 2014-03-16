'use strict';

angular.module('someJamAppApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $log, UserSession) {
  	if(UserSession.id !== -1) { 
  		$location.path("user/interest");
  	}
    
  	$scope.validateUser = function() {
  		$http({
            method : 'POST',
            url : '/api/user/validate',
            data : {username:$scope.username, password:$scope.password}
        }).success(function(userData) {
	    	if(userData.valid === true && userData.id !== undefined) {
	    		UserSession.setId(userData.id);
          $http.get('/api/user/id/' + userData.id).success(function(data) {
              UserSession.setDataObject(data);
              $location.path("user/interest");
          });
          
	    	}
	    });
  	};


    // $scope.username = "Username";
    // $scope.password = "password";
    // $scope.validateUser();
});
