//<![CDATA[

//Playlist
/*
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
*/

function initializePlayer() {
	
	myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [], {
		swfPath: "js",
		supplied: "oga, mp3",
		wmode: "window",
		volume: 0.9,
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
	console.log(rolesSelected);
	return rolesSelected;
}

function generatePlaylist(roles) {
	
	var playlist = [];
	
	/* Setup */
	playlist.push({
		title:"All Players - Close Eyes and Make Fists",
		mp3:"media/1-setup.mp3",
		text:"Everyone close your eyes. Extend your hand into a fist in front of you."
	});
	playlist.push({
		title:"All Players - Confirm Eyes and Fists",
		mp3:"media/2-setup-confirm.mp3",
		text:"Ready? You should have your eyes closed and fist out. Okay. Here we go..."
	});
	
	
	//Minions
	if($.inArray('oberon', roles) != -1) {
		/* Oberon */
		playlist.push({
			title:"Minions w/ Oberon 1",
			mp3:"media/3-minions-with-oberon.mp3",
			text:"Minions of Mordred, but not Oberon, I repeat, not Oberon, open your eyes and look around."
		});
		playlist.push({
			title:"Minions w/ Oberon 2",
			mp3:"media/4-minions-with-oberon-confirm.mp3",
			text:"Minions of Mordred, but not Oberon, you are looking at the other Minions of Mordred"
		});
		
	} else {
		/* No Oberon */
		playlist.push({
			title:"Minions w/o Orberon",
			mp3:"media/5-minions-without-oberon.mp3",
			text:"Minions of Mordred, open your eyes and look around so that you know all of the agents of evil..."
		});
		
	}
	
	/* Default */
	playlist.push({
		title:"Minions Look Around",
		mp3:"media/delay.mp3",
		text:"One one thousand, two one thousand, three one thousand"
	});
	playlist.push({
		title:"Minions Close Eyes",
		mp3:"media/6-minions-close-eyes.mp3",
		text:"Minions of Mordred, close your eyes."
	});
	playlist.push({
		title:"Fists Reset",
		mp3:"media/thumbs-down-reset.mp3",
		text:"Thumbs down.  All players should have their eyes closed and their hands in a fist in front of them."
	});

	//Merlin
	if($.inArray('merlin', roles) != -1) {
		//Mordred
		if($.inArray('mordred', roles) != -1) {
			/* Mordred */
			playlist.push({
				title:"Minions of Mordred (No Mordred) - Extend Thumbs",
				mp3:"media/7-merlin-with-mordred.mp3",
				text:"Minions of Mordred, but not Mordred himself, extend your thumb so that Merlin will know of you."
			});
			playlist.push({
				title:"Merlin of Mordred (No Mordred) - Confirm Thumbs",
				mp3:"media/8-merlin-with-mordred-confirm.mp3",
				text:"Minions of Mordred, but not Mordred himself, confirm your thumb is up."
			});
			
		} else {
			/* No Mordred */
			playlist.push({
				title:"Minions of Mordred - Extend Thumbs",
				mp3:"media/9-merlin-without-mordred.mp3",
				text:"Minions of Mordred, extend your thumb so that Merlin will know of you."
			});
			playlist.push({
				title:"Minions of Mordred - Confirm Thumbs",
				mp3:"media/10-merlin-without-mordred-confirm.mp3",
				text:"Minions of Mordred, confirm your thumb is up."
			});
			
		}
		
		/*
		playlist.push({
			title:"Delay",
			mp3:"media/delay.mp3",
			text:"One one thousand, two one thousand, three one thousand"
		});
		*/

		playlist.push({
			title:"Merlin - Open Eyes",
			mp3:"media/11-merlin-eyes.mp3",
			text:"Merlin, open your eyes and see the agents of evil"
		});
		
		playlist.push({
			title:"Merlin - Looking",
			mp3:"media/12-merlin-eyes-confirm.mp3",
			text:"Merlin, you should have your eyes open and looking at the minions of Mordred"
		});

		playlist.push({
			title:"Delay",
			mp3:"media/delay.mp3",
			text:"One one thousand, two one thousand, three one thousand"
		});

		playlist.push({
			title:"Minions of Mordred - Reset Fists",
			mp3:"media/13-merlin-thumbs-down.mp3",
			text:"Minions of Mordred, put your thumbs down and reform your hand into a fist."
		});

		playlist.push({
			title:"Merlin - Close Eyes",
			mp3:"media/14-merlin-close-eyes.mp3",
			text:"Merlin, close your eyes."
		});

		playlist.push({
			title:"All Players - Reset",
			mp3:"media/reset.mp3",
			text:"All players should have eyes closed and hands in a fist in front of them."
		});
	}
	
	//Percival
	if($.inArray('percival', roles) != -1) {
		//Merlin and Morgana
		if($.inArray('merlin', roles) != -1 && $.inArray('morgana', roles) != -1) {
			playlist.push({
				title:"Merlin and Morgana - Extend Thumbs",
				mp3:"media/15-percival-merlin-with-morgana.mp3",
				text:"Merlin and Morgana, extend your thumb so that Percival may know of you."
			});
			
			playlist.push({
				title:"Merlin and Morgana - Confirm Thumbs",
				mp3:"media/16-percival-merlin-with-morgana-confirm.mp3",
				text:"Merlin and Morgana, confirm your thumbs are up"
			});
			/*
			playlist.push({
				title:"Delay",
				mp3:"media/delay.mp3",
				text:"One one thousand, two one thousand, three one thousand"
			});
			*/
			
			playlist.push({
				title:"Percival - Open Eyes",
				mp3:"media/17-percival-merlin-morgana-eyes.mp3",
				text:"Percival, open your eyes so you may know Merlin and Morgana."
			});
			playlist.push({
				title:"Percival - Looking",
				mp3:"media/18-percival-merlin-morgana-eyes-confirm.mp3",
				text:"Percival, you should be looking at Merlin and Morgana."
			});
			
			playlist.push({
				title:"Delay",
				mp3:"media/delay-3.mp3",
				text:"One one thousand, two one thousand, three one thousand"
			});

			playlist.push({
				title:"Merlin and Morgana - Make Fists",
				mp3:"media/19-percival-merlin-morgana-thumbs-down.mp3",
				text:"Merlin and Morgana, put your thumbs down and form your hand into a fist."
			});
		}
		else if($.inArray('merlin', roles) != -1) {
			playlist.push({
				title:"Merlin - Extend Thumb",
				mp3:"media/20-percival-merlin.mp3",
				text:"Merlin, extend your thumb so that Percival may know of you."
			});

			playlist.push({
				title:"Merlin - Confirm Thumb",
				mp3:"media/21-percival-merlin-confirm.mp3",
				text:"Merlin, confirm your thumb is up."
			});
			/*
			playlist.push({
				title:"Delay",
				mp3:"media/delay-3.mp3",
				text:"One one thousand, two one thousand, three one thousand"
			});
			*/
			
			playlist.push({
				title:"Percival - Open Eyes",
				mp3:"media/22-percival-merlin-eyes.mp3",
				text:"Percival, open your eyes so you may know Merlin"
			});
			playlist.push({
				title:"Percival - Looking",
				mp3:"media/23-percival-merlin-eyes-confirm.mp3",
				text:"Percival, you should be looking at Merlin."
			});
			
			playlist.push({
				title:"Delay",
				mp3:"media/delay-3.mp3",
				text:"One one thousand, two one thousand, three one thousand"
			});
			
			playlist.push({
				title:"Merlin - Make Fist",
				mp3:"media/24-percival-merlin-fist.mp3",
				text:"Merlin, put your thumb down and form your hand into a fist."
			});
		}
		else if($.inArray('morgana', roles) != -1) {
			playlist.push({
				title:"Morgana - Extend Thumb",
				mp3:"media/.mp3",
				text:"Morgana, extend your thumb so that Percival may know of you."
			});
			
			playlist.push({
				title:"Morgana - Confirm Thumb",
				mp3:"media/.mp3",
				text:"Right now Morgana should have their thumb up."
			});
			/*
			playlist.push({
				title:"Delay",
				mp3:"media/delay-3.mp3",
				text:"One one thousand, two one thousand, three one thousand"
			});
			*/
			
			playlist.push({
				title:"Percival - Open Eyes",
				mp3:"media/.mp3",
				text:"Percival, open your eyes so you may know Morgana"
			});
			playlist.push({
				title:"Percival - Looking",
				mp3:"media/.mp3",
				text:"Percival you should be looking at Morgana."
			});

			playlist.push({
				title:"Delay",
				mp3:"media/delay-3.mp3",
				text:"One one thousand, two one thousand, three one thousand"
			});

			playlist.push({
				title:"Morgana - Make Fist",
				mp3:"media/.mp3",
				text:"Morgana put your thumb down and form your hand into a fist."
			});
		}
		else {
			playlist.push({
				title:"Useless Percival",
				mp3:"media/25-percival-useless.mp3",
				text:"There is no Merlin or Morgana.  Percival you are useless"
			});
		}
		
		playlist.push({
			title:"Percival - Close Eyes",
			mp3:"media/30-percival-close-eyes.mp3",
			text:"Percival, close your eyes."
		});
		
		playlist.push({
			title:"Percival - Close Eyes Confirm",
			mp3:"media/31-percival-close-eyes-confirm.mp3",
			text:"Percival, confirm your eyes are closed."
		});
		
		playlist.push({
			title:"All Players - Reset",
			mp3:"media/reset.mp3",
			text:"All players should have their eyes closed and hands in a fist in front of them."
		});
		
	}
	
	//Lancelot
	if($.inArray('lancelot', roles) != -1) {
	}
	
	
	//Ending
	playlist.push({
		title:"All Players - Open Eyes",
		mp3:"media/setup-complete.mp3",
		text:"The setup is complete, everyone may open their eyes."
	});
	
	return playlist;
}

function updatePlaylist(playlist) {
	console.log(playlist);
	myPlaylist.setPlaylist(playlist);
}

//]]>