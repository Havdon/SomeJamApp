'use strict';

angular.module('someJamAppApp')
  .controller('EventdetailsCtrl', function ($scope, $http, $routeParams) {
      
      $scope.participants = "";
    
      $http.get('/api/event/id/'+$routeParams.id).success(function(data) {
          $scope.event = data;
          //$date = data. 
          
          $http.get('/api/interest/id/'+data.interest).success(function(interest) {
              $scope.interest = interest.name;
          });
          
          var i = 0;
          for(i=0; i<data.users.length; ++i) {
              
              $http.get('/api/user/id/'+data.users[i]+'/username').success(function(user) {
                
                  $scope.participants = $scope.participants+user.username;
                  if (i != data.users.length-1) {
                      $scope.participants = $scope.participants+', ';
                  }
              });
          }
                                                               
            
      });
      
        
        
      
  });
