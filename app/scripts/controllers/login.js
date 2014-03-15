'use strict';

angular.module('someJamAppApp')
  .controller('LoginCtrl', function ($scope, $http, $log, UserSession) {
  	$scope.validateUser = function() {
  		$http({
            method : 'POST',
            url : '/api/user/validate',
            data : {username:$scope.username, password:$scope.password}
        }).success(function(userData) {
	    	if(userData.valid === true && userData.id !== undefined) {
	    		LocalUser.setId(userData.id);
	    		$log.log("LocalUser.id = " + LocalUser.id);
	    	}
	    });
  	};
});
