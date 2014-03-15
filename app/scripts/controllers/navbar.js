'use strict';

angular.module('someJamAppApp')
.controller('NavbarCtrl', function ($scope, $http) {

	$scope.menu = [
		{
			title: "INTERESTS",
			link: "#/user/interest"
		}, 
		{
			title: "MEETUPS",
			link: "#/user/meetups"
		}
	];


});
