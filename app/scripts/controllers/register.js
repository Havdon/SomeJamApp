'use strict';

angular.module('someJamAppApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    
      $scope.register = function() {
            $http({
                method: 'POST',
                url: '/api/user/new',
                data : {username:$scope.username, password:$scope.password}}).success(function(userData) {
                
            });
      }
  });
