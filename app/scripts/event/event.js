/**
 * Created by Konstantin Petrukhnov on 15.3.2014.
 */
angular.module('someJamAppApp')
  .controller('EventCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    $scope.dummy = dummy;

    $scope.eventList = [
      {id: 1, interest: 'football', description: 'Football game with random people. Age limit: 20-50 years.', time: '18.03.2014 11:00', location: 'Hartwall arena', registered:11, interested: 13},
      {id: 2, interest: 'somejam', description: 'SomeJam is for people who are interested in service design, youth work, social work, social media and using a design-based approach to problem solving and creativity.', time: '16.03.2014 18:00', location: 'Youth Activity Center Happi', registered:39, interested: 120},
      {id: 3, interest: 'football', description: 'School football for girls. 10-12 years old.', time: '02.04.2014 11:00', location: 'Palomylly', registered:2, interested: 60}
    ];
  }]);
