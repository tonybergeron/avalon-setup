'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('AvalonCtrl', [function() {
	
	var myPlaylist;
	
	//Initilize Player
	initializePlayer();
	
	//Setup defaults
	roleDefaults();
	
	//Setup initial playlist off of the roles currently checked
	updateGame();
	
	//Setup event triggers on checkboxes
	$('#roles input:checkbox').click(function() {
		updateGame(); //Update selected roles
	})
	.controller('RulesCtrl', [function() {
		
	}]);
	
  }]);