

// FADDING IN ELEMENTS

var browserHeight = $(window).height();
var browserOffset = 9/10 * browserHeight;

$('.thumbnails, .quote').waypoint(function(){
	$(this).toggleClass('pics');},
    { offset: browserOffset }
);


// VIDEO PLAYER CONTROLS

	$("#play-video1").click(function() {
		section1Video.playVideo();
		$("#name-video1").show();
		$("#play-video1").hide();
		$('#stop-video1').css('display', 'block');
		$(".now-playing").show();
		return false;
	});

	$("#stop-video1").click(function() {
		section1Video.pauseVideo();
		$("#name-video1").show();
		$("#stop-video1").hide();
		$('#play-video1').css('display', 'block');
		$(".now-playing").hide();
		return false;
	});

	$("#play-video2").click(function() {
		section3Video.playVideo();
		$("#name-video2").show();
		$("#play-video2").hide();
		$('#stop-video2').css('display', 'block');
		$(".now-playing").show();
		return false;
	});

	$("#stop-video2").click(function() {
		section3Video.pauseVideo();
		$("#name-video2").show();
		$("#stop-video2").hide();
		$('#play-video2').css('display', 'block');
		$(".now-playing").hide();
		return false;
	});

	$("#play-video3").click(function() {
		section5Video.playVideo();
		$("#name-video3").show();
		$("#play-video3").hide();
		$('#stop-video3').css('display', 'block');
		$(".now-playing").show();
		return false;
	});

	$("#stop-video3").click(function() {
		section5Video.pauseVideo();
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
	bioPlayer,
	section1Video;

function onYouTubeIframeAPIReady() {



	section1Video = new YT.Player('section1Video', {
		height: '390',
		width: '640',
		videoId: 'CqucbWymAkA',
		playerVars: {
			'controls': 0 },
		events: {
			'onStateChange': video1playing
		}
	});

	section3Video = new YT.Player('section3Video', {
		height: '390',
		width: '640',
		videoId: 'G8QyPpCygDQ',
		playerVars: {
			'controls': 0 },
		events: {
			'onStateChange': video2playing
		}
	});

	section5Video = new YT.Player('section5Video', {
		height: '390',
		width: '640',
		videoId: 'MWffoV7MN60',
		playerVars: {
			'controls': 0 },
		events: {
			'onStateChange': video3playing
		}
	});
}


function video1playing(event) {
	if (event.data == YT.PlayerState.PLAYING) {
          section3Video.pauseVideo();
          section5Video.pauseVideo();
          $('.video2, .video3, .video4').hide();
          $('.video1').show();
          console.log('video1playing');
        }
}

function video2playing(event) {
	if (event.data == YT.PlayerState.PLAYING) {
          section1Video.pauseVideo();
          section5Video.pauseVideo();
          $('.video1, .video3, .video4').hide();
          $('.video2').show();
          console.log('video2playing');
        }
}

function video3playing(event) {
	if (event.data == YT.PlayerState.PLAYING) {
          section1Video.pauseVideo();
          section3Video.pauseVideo();
          $('.video2, .video1, .video4').hide();
          $('.video3').show();
          console.log('video3playing');
        }
}



// PLAYER SCROLL EVENTS

	$("#section1-cover").waypoint(function(){
		section1Video.playVideo();
		$('.video1').slideToggle();
		$('#section1-cover').waypoint('disable');
    });


	$("#section3-cover").waypoint(function(){
		$('.video1').hide();
		section1Video.stopVideo();
		section3Video.playVideo();
		$('.video2').show();
		$('#section3-cover').waypoint('disable');
	});


    $("#section5-cover").waypoint(function(){
		$('.video2').hide();
		section3Video.stopVideo();
		section5Video.playVideo();
		$('.video3').show();
		$('.now-playing').show();
		$('#section5-cover').waypoint('disable');
	});



// HEADER SCROLL EVENTS

	$(".nav-show").waypoint(function(){
		$('.header-small').slideToggle();
		$('#side-nav').slideToggle();
	});


// TABLE OF CONTENTS / SIDE NAV

	$("#side-nav a.nav1").hover(
		function(){
		$("#details1").show();
		},
		function(){
		$("#details1").hide();
	});

	$("#side-nav a.nav2").hover(
		function(){
		$("#details2").show();
		},
		function(){
		$("#details2").hide();
	});

	$("#side-nav a.nav3").hover(
		function(){
		$("#details3").show();
		},
		function(){
		$("#details3").hide();
	});

	$("#side-nav a.nav4").hover(
		function(){
		$("#details4").show();
		},
		function(){
		$("#details4").hide();
	});

	$("#side-nav a.nav5").hover(
		function(){
		$("#details5").show();
		},
		function(){
		$("#details5").hide();
	});

	$("#side-nav a.nav6").hover(
		function(){
		$("#details6").show();
		},
		function(){
		$("#details6").hide();
	});





