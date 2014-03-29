'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory("TeamService",function() {
    var teams = ["Fenerbahçe","Galatasaray","Beşiktaş"];
	return { 
		  all: function() { 
			return users;
		  },
		  first: function() {
			return users[0];
		  };
	};
  }).

  value('version', '0.1');