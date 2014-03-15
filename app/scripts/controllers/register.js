'use strict';

angular.module('someJamAppApp')
  .controller('RegisterCtrl', function ($scope, $log, $http, $location, UserSession) {
    
      $scope.register = function() {
            $http({
                method: 'POST',
                url: '/api/user/new',
                data : {username:$scope.username, password:$scope.password}}).success(function(userData) {
                    
                    if(typeof userData._id !== 'undefined') {
                        UserSession.setId(userData.id);
                    
                        UserSession.setDataObject(userData);
                        $log.log("LocalUser.id = " + UserSession.id);
                        $location.path("user/interest");
                        //$location.path("user/interest");

                }
            });
      }
  });
