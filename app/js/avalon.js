//<![CDATA[

//Playlist
var myPlaylist;

$(document).ready(function(){
	
	//Initilize Player
	initializePlayer();
	
	//Setup defaults
	roleDefaults();
	
	//Setup initial playlist off of the roles currently checked
	updateGame();
	
	//Setup event triggers on checkboxes
	$('#roles input:checkbox').click(function() {
		updateGame(); //Update selected roles
	});
	
});

function initializePlayer() {
	
	myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [], {
		swfPath: "js",
		supplied: "oga, mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true
	});
	
}


//Setup role defaults
function roleDefaults() {
	var defaults = ['merlin'];
	$('#roles input:checkbox').each(function() {
		if($.inArray($(this).attr('id'), defaults) != -1) {
			$(this).attr('checked', true); //Check the checkbox
		} else {
			$(this).attr('checked', false); //Uncheck checkboxes not selected
		}
	});
}



//Update the playlist based on the roles selected
function updateGame() {
	
	//Get the roles
	var roles = getSelectedRoles();
	
	//Create the playlist
	var playlist = generatePlaylist(roles);
	
	//Push the playlist to the player
	updatePlaylist(playlist);
}

function getSelectedRoles() {
	var rolesSelected = [];
	$('#roles input:checkbox').each(function() {
		if($(this).is(':checked')) {
			rolesSelected.push($(this).attr('id'));
		}
	});
	return rolesSelected;
}

function generatePlaylist(roles) {
	
	var playlist = [];
	
	/* Setup */
	playlist.push({
		title:"All Players - Close Eyes and Make Fists",
		mp3:"media/minions.mp3",
		text:"Everyone close your eyes and extend your hand into a fist in front of you."
	});
	playlist.push({
		title:"All Players - Confirm Eyes and Fists",
		mp3:"media/minions.mp3",
		text:"Ready? You should have your eyes closed and fist out. Okay. Here we go.."
	});
	
	
	//Minions
	if($.inArray('oberon', roles)) {
		/* Oberon */
		playlist.push({
			title:"Minions w/ Oberon 1",
			mp3:"",
			text:"Minions of Mordred, not Oberon, - I repeat not oh ber ron, open your eyes and look around so that you know all agents of evil."
		});
		playlist.push({
			title:"Minions w/ Oberon 2",
			mp3:"",
			text:"So right now all of the minions of Mordred but not Oh ber ron should have their eyes open and be looking at each other."
		});
		
	} else {
		/* No Oberon */
		playlist.push({
			title:"Minions w/o Orberon",
			mp3:"",
			text:"Minions of Mordred, open your eyes and look around so that you know all agents of evil.."
		});
		
	}
	
	/* Default */
	playlist.push({
		title:"Minions Look Around",
		mp3:"",
		text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
	});
	playlist.push({
		title:"Minions Close Eyes",
		mp3:"",
		text:"Minions of Mordred, close your eyes."
	});
	playlist.push({
		title:"Fists Reset",
		mp3:"",
		text:"All players should have their eyes closed and hands in a fist in front of them"
	});

	//Merlin
	if($.inArray('merlin', roles)) {
		//Mordred
		if($.inArray('mordred', roles)) {
			/* Mordred */
			playlist.push({
				title:"Minions of Mordred (No Mordred) - Extend Thumbs",
				mp3:"",
				text:"Minions of Mordred, but not Mordred himself, extend your thumb so that Merlin will know of you."
			});
			playlist.push({
				title:"Merlin of Mordred (No Mordred) - Confirm Thumbs",
				mp3:"",
				text:"So the minions, but not Mordred, should have your thumbs up."
			});
			
		} else {
			/* No Mordred */
			
			playlist.push({
				title:"Minions of Mordred - Extend Thumbs",
				mp3:"",
				text:"Minions of Mordred, extend your thumb so that Merlin will know of you."
			});
			playlist.push({
				title:"Minions of Mordred - Confirm Thumbs",
				mp3:"",
				text:"So the minions should have your thumbs up."
			});
			
		}
		
		playlist.push({
			title:"Delay",
			mp3:"",
			text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
		});

		playlist.push({
			title:"Merlin - Open Eyes",
			mp3:"",
			text:"Merlin, open your eyes and see the agents of evil"
		});
		
		playlist.push({
			title:"Merlin - Looking",
			mp3:"",
			text:"Merlin you should have your eyes open and looking at the minions of Mordred"
		});

		playlist.push({
			title:"Delay",
			mp3:"",
			text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
		});

		playlist.push({
			title:"Minions of Mordred - Reset Fists",
			mp3:"",
			text:"Minions of Mordred put your thumbs down and reform your hand into a fist."
		});

		playlist.push({
			title:"Merlin - Close Eyes",
			mp3:"",
			text:"Merlin close your eyes."
		});

		playlist.push({
			title:"All Players - Reset",
			mp3:"",
			text:"All players should have eyes closed and hands in a fist in front of them."
		});
	}
	
	//Percival
	if($.inArray('percival', roles)) {
		//Merlin and Morgana
		if($.inArray('merlin', roles) != -1 && $.inArray('morgana', roles) != -1) {
			playlist.push({
				title:"Merlin and Morgana - Extend Thumbs",
				mp3:"",
				text:"Merlin and Morgana, extend your thumb so that Percival may know of you."
			});
			
			playlist.push({
				title:"Merlin and Morgana - Confirm Thumbs",
				mp3:"",
				text:"Right now Merlin and Morgana should have their thumbs up."
			});
			playlist.push({
				title:"Delay",
				mp3:"",
				text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
			});
			
			playlist.push({
				title:"Percival - Open Eyes",
				mp3:"",
				text:"Percival, open your eyes so you may know Merlin and Morgana"
			});
			playlist.push({
				title:"Percival - Looking",
				mp3:"",
				text:"Percival you should be looking at Merlin and Morgana."
			});
			
			playlist.push({
				title:"Delay",
				mp3:"",
				text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
			});

			playlist.push({
				title:"Merlin and Morgana - Make Fists",
				mp3:"",
				text:"Merlin and Morgana, - put your thumbs down and form your hand into a fist."
			});
		}
		else if($.inArray('merlin', roles) != -1) {
			playlist.push({
				title:"Merlin - Extend Thumb",
				mp3:"",
				text:"Merlin extend your thumb so that Percival may know of you."
			});

			playlist.push({
				title:"Merlin - Confirm Thumb",
				mp3:"",
				text:"Right now Merlin should have their thumb up."
			});
			playlist.push({
				title:"Delay",
				mp3:"",
				text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
			});
			
			playlist.push({
				title:"Percival - Open Eyes",
				mp3:"",
				text:"Percival, open your eyes so you may know Merlin"
			});
			playlist.push({
				title:"Percival - Looking",
				mp3:"",
				text:"Percival you should be looking at Merlin."
			});
			
			playlist.push({
				title:"Delay",
				mp3:"",
				text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
			});
			
			playlist.push({
				title:"Merlin - Make Fist",
				mp3:"",
				text:"Merlin put your thumb down and form your hand into a fist."
			});
		}
		else if($.inArray('morgana', roles) != -1) {
			playlist.push({
				title:"Morgana - Extend Thumb",
				mp3:"",
				text:"Morgana extend your thumb so that Percival may know of you."
			});
			
			playlist.push({
				title:"Morgana - Confirm Thumb",
				mp3:"",
				text:"Right now Morgana should have their thumb up."
			});
			playlist.push({
				title:"Delay",
				mp3:"",
				text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
			});
			
			playlist.push({
				title:"Percival - Open Eyes",
				mp3:"",
				text:"Percival, open your eyes so you may know Morgana"
			});
			playlist.push({
				title:"Percival - Looking",
				mp3:"",
				text:"Percival you should be looking at Morgana."
			});

			playlist.push({
				title:"Delay",
				mp3:"",
				text:"One one thousand, two one thousand, three one thousand, four one thousand, five one thousand"
			});

			playlist.push({
				title:"Morgana - Make Fist",
				mp3:"",
				text:"Morgana put your thumb down and form your hand into a fist."
			});
		}
		else {
			playlist.push({
				title:"Useless Percival",
				mp3:"",
				text:"There is no Merlin or Morgana.  Percival you are useless"
			});
		}
		
		playlist.push({
			title:"Percival - Close Eyes",
			mp3:"",
			text:"Percival, close your eyes."
		});
		
		playlist.push({
			title:"Percival - Close Eyes Confirm",
			mp3:"",
			text:"Percival make sure your eyes are closed."
		});
		
		playlist.push({
			title:"All Players - Reset",
			mp3:"",
			text:"All players should have their eyes closed and hands in a fist in front of them."
		});
		
	}

	/* Ending */
	playlist.push({
		title:"All Players - Open Eyes",
		mp3:"",
		text:"Everyone open your eyes. "
	});
	
	return playlist;
}

function updatePlaylist(playlist) {
	myPlaylist.setPlaylist(playlist);
}

//]]>