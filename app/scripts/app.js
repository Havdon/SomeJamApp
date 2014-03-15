'use strict';

angular.module('someJamAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/title',
        controller: 'TitleCtrl'
      }).when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });