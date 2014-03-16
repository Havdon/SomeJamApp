'use strict';


angular.module('someJamAppApp')
  .controller('EventdetailsCtrl', function ($scope, $http, $routeParams, $location, UserSession) {
      
      $scope.participants = "";
      
      $scope.eventUserIds = [];

      $scope.joinEvent = function(eventId) {

          $http({ 
              method: 'POST',
              url: '/api/user/attend/event',
              data: {userId:UserSession.id, eventId:eventId}
          }).success(function(success) {
               $scope.joinButtonDisabled = true;
          });

    };

    
      $http.get('/api/event/id/'+$routeParams.id).success(function(data) {
          $scope.event = data;
          
          $http.get('/api/interest/id/'+data.interest).success(function(interest) {
              $scope.interest = interest.name;
          });
          
          $scope.eventUserIds = data.users;
          $scope.userId = $routeParams.id;
          
          var i = 0;
          for(i=0; i<data.users.length; i++) {
              
              $http.get('/api/user/id/'+data.users[i]+'/username').success(function(user) {
                
                  $scope.participants = $scope.participants+user.username+" ";
                  
              });
          }
                                                               
            
      });
      
        
        
      
  });
