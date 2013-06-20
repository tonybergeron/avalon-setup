//<![CDATA[
$(document).ready(function(){
	
	$("#jquery_jplayer_1").jPlayer({
		swfPath: "js",
		supplied: "oga, mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true
	});
	
	/*
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [], {
		swfPath: "js",
		supplied: "oga, mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true
	});

	
	$("#playlist-setPlaylist-audio-mix").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Minions",
				mp3:"media/minions.mp3"
				//oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
			}
		]);
	});
	*/
	
});
//]]>