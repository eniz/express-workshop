'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});


/**
*  Module
*
* Description
*/
var teams = ["Fenerbahçe","Galatasaray","Beşiktaş"];
var app = angular.module('myApp', []);

app.factory("TeamService",function() {
    var teams = ["Fenerbahçe","Galatasaray","Beşiktaş"];
    return { 
  	  all: function() { 
  		return users;
  	  },
  	  first: function() {
  		return users[0];
      }
  	};
});

app.controller("TeamController", function ($scope, TeamService) {
	$scope.teams = TeamService.all();
});

app.controller("AnotherController", function ($scope, TeamService) {
	$scope.firstTeam = TeamService.first();
});