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