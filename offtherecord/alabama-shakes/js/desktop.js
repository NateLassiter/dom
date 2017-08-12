

// FADDING IN ELEMENTS

    var browserHeight = $(window).height();
	var browserOffset = 9/10 * browserHeight;

	$('.thumbnails, .quote').waypoint(function(){
		$(this).toggleClass('pics');},
        { offset: browserOffset }
    );




// VIDEO PLAYER CONTROLS

	$("#play-video1").click(function() {
		albumPlayer.playVideo();
		$("#name-video1").show();
		$("#play-video1").hide();
		$('#stop-video1').css('display', 'block');
		$(".now-playing").show();
		return false;
	});

	$("#stop-video1").click(function() {
		albumPlayer.pauseVideo();
		$("#name-video1").show();
		$("#stop-video1").hide();
		$('#play-video1').css('display', 'block');
		$(".now-playing").hide();
		return false;
	});

	$("#play-video2").click(function() {
		livePlayer.playVideo();
		$("#name-video2").show();
		$("#play-video2").hide();
		$('#stop-video2').css('display', 'block');
		$(".now-playing").show();
		return false;
	});

	$("#stop-video2").click(function() {
		livePlayer.pauseVideo();
		$("#name-video2").show();
		$("#stop-video2").hide();
		$('#play-video2').css('display', 'block');
		$(".now-playing").hide();
		return false;
	});

	$("#play-video3").click(function() {
		singerPlayer.playVideo();
		$("#name-video3").show();
		$("#play-video3").hide();
		$('#stop-video3').css('display', 'block');
		$(".now-playing").show();
		return false;
	});

	$("#stop-video3").click(function() {
		singerPlayer.pauseVideo();
		$("#name-video3").show();
		$("#stop-video3").hide();
		$('#play-video3').css('display', 'block');
		$(".now-playing").hide();
		return false;
	});

	$("#play-video4").click(function() {
		bioPlayer.playVideo();
		$("#name-video4").show();
		$("#play-video4").hide();
		$('#stop-video4').css('display', 'block');
		$(".now-playing").show();
		return false;
	});

	$("#stop-video4").click(function() {
		bioPlayer.pauseVideo();
		$("#name-video4").show();
		$("#stop-video4").hide();
		$('#play-video4').css('display', 'block');
		$(".now-playing").hide();
		return false;
	});


// INITIATE VIDEO PLAYER

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var albumPlayer,
	livePlayer,
	singerPlayer,
	bioPlayer;

function onYouTubeIframeAPIReady() {

	albumPlayer = new YT.Player('albumVid', {
		height: '390',
		width: '640',
		videoId: 'Le-3MIBxQTw',
		playerVars: {
			'controls': 0 },
		events: {
			'onStateChange': video1playing
		}
	});

	livePlayer = new YT.Player('liveVid', {
		height: '390',
		width: '640',
		videoId: 'z_bSt6UmyAU',
		playerVars: {
			'controls': 0 },
		events: {
			'onStateChange': video2playing
		}
	});

	singerPlayer = new YT.Player('singerVid', {
		height: '390',
		width: '640',
		videoId: 'uixTByj_NZY',
		playerVars: {
			'controls': 0 },
		events: {
			'onStateChange': video3playing
		}
	});

	bioPlayer = new YT.Player('bioVid', {
		height: '390',
		width: '640',
		videoId: 'svZNjhsk2ys',
		playerVars: {
			'controls': 0 },
		events: {
			'onStateChange': video4playing
		}
	});
}


function video1playing(event) {
	if (event.data == YT.PlayerState.PLAYING) {
          livePlayer.pauseVideo();
          singerPlayer.pauseVideo();
          bioPlayer.pauseVideo();
          $('.video2, .video3, .video4').hide();
          $('.video1').show();
          console.log('video1playing');
        }
}

function video2playing(event) {
	if (event.data == YT.PlayerState.PLAYING) {
          albumPlayer.pauseVideo();
          singerPlayer.pauseVideo();
          bioPlayer.pauseVideo();
          $('.video1, .video3, .video4').hide();
          $('.video2').show();
          console.log('video2playing');
        }
}

function video3playing(event) {
	if (event.data == YT.PlayerState.PLAYING) {
          livePlayer.pauseVideo();
          albumPlayer.pauseVideo();
          bioPlayer.pauseVideo();
          $('.video2, .video1, .video4').hide();
          $('.video3').show();
          console.log('video3playing');
        }
}

function video4playing(event) {
	if (event.data == YT.PlayerState.PLAYING) {
          livePlayer.pauseVideo();
          singerPlayer.pauseVideo();
          albumPlayer.pauseVideo();
          $('.video2, .video3, .video1').hide();
          $('.video4').show();
          console.log('video4playing');
        }
}


// PLAYER SCROLL EVENTS

	$("#album").waypoint(function(){
		albumPlayer.playVideo();
		$('.video1').show();
		// $('.gett-ready').hide();
		$('#album').waypoint('disable');
    });


	$("#live").waypoint(function(){
		$('.video1').hide();
		albumPlayer.stopVideo();
		livePlayer.playVideo();
		$('.video2').show();
		$('#live').waypoint('disable');
		console.log('second vidoe play');
	});


    $("#singer").waypoint(function(){
		$('.video2').hide();
		livePlayer.stopVideo();
		singerPlayer.playVideo();
		$('.video3').show();
		$('.now-playing').show();
		$('#singer').waypoint('disable');
	});

    $("#bio").waypoint(function(){
		$('.video3').hide();
		singerPlayer.stopVideo();
		bioPlayer.playVideo();
		$('.video4').show();
		$('.now-playing').show();
		$('#bio').waypoint('disable');
	});


// SCROLL EVENTS FOR EF MENU

	$("#section1").waypoint(function(){
		$('.header-small').slideToggle();
	});

