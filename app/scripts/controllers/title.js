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
        setTimeout(function() {
          $('html, body').animate({
              scrollTop: $("#results").offset().top
          }, 1000);
        }, 100);

        
	    });
  	};

    $scope.doLogin = function() {
      if($scope.username.length < 3 || $scope.password.length < 3) return;
      
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
    }

  });
