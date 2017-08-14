

// FADDING IN ELEMENTS

// var browserHeight = $(window).height();
// var browserOffset = 9/10 * browserHeight;

// $('.thumbnails, .quote').waypoint(function(){
// 	$(this).toggleClass('pics');},
//     { offset: browserOffset }
// );


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
		videoId: 'Hjo_NK1vEZE',
		playerVars: {
			'controls': 0 }
	});

}





// PLAYER SCROLL EVENTS

	$("#cover h1:first").waypoint(function(){
		section1Video.playVideo();
		$('#cover h1:first').waypoint('disable');
    });




// HEADER SCROLL EVENTS

	$(".nav-show").waypoint(function(){
		$('.header-small').slideToggle();
		$('#side-nav').slideToggle();
		$('.video1').slideToggle();
	});


// TABLE OF CONTENTS / SIDE NAV

	$("#side-nav a.nav1").hover(
		function(){
		$("#details1").fadeIn();
		},
		function(){
		$("#details1").hide();
	});

	$("#side-nav a.nav2").hover(
		function(){
		$("#details2").fadeIn();
		},
		function(){
		$("#details2").hide();
	});

	$("#side-nav a.nav3").hover(
		function(){
		$("#details3").fadeIn();
		},
		function(){
		$("#details3").hide();
	});

	$("#side-nav a.nav4").hover(
		function(){
		$("#details4").fadeIn();
		},
		function(){
		$("#details4").hide();
	});

	$("#side-nav a.nav5").hover(
		function(){
		$("#details5").fadeIn();
		},
		function(){
		$("#details5").hide();
	});

	$("#side-nav a.nav6").hover(
		function(){
		$("#details6").fadeIn();
		},
		function(){
		$("#details6").hide();
	});

	$("#side-nav a.nav7").hover(
		function(){
		$("#details7").fadeIn();
		},
		function(){
		$("#details7").hide();
	});

	$("#side-nav a.nav8").hover(
		function(){
		$("#details8").fadeIn();
		},
		function(){
		$("#details8").hide();
	});

	$("#side-nav a.nav9").hover(
		function(){
		$("#details9").fadeIn();
		},
		function(){
		$("#details9").hide();
	});





