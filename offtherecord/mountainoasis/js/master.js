yepnope([
{
	test : Modernizr.touch,
	yep  : [],
	nope : ['/mountainoasis/js/desktop.js']
}
]);

if(Modernizr.touch) {
    var threshold = 900;
    var effectspeed = 100;
}
else {
	var threshold = -30;
	var effectspeed = 800;
}

$('[data-original]')
	.filter(':not([data-masonry])')
	.lazyload({
		threshold : threshold,
		effect : "fadeIn",
		effectspeed: effectspeed
	});


// PRELOADER

$("#cover, .header:first, .cover-content:first, #video-container").queryLoader2({
	overlayId: 'loader',
	onComplete: function () {
		$('.header:first').fadeIn(300);
		console.log("done loading");
    }
});





// SCROLLING MENU

$("#side-nav ul li a, div.scroll a, .featuring:first a").click(function(event){
	event.preventDefault();
	var scrollDiv = $(this).attr('href');
	$("html, body").animate({
		scrollTop: $(scrollDiv).position().top
	}, 1500);
});


// PLAYER SCROLL EVENTS



$("#show-popup").waypoint(function(){
	$('#subscribe-popup').fadeIn();
	$(this).waypoint('disable');
	console.log('show popup');
});


// SUBSCRIBE POPUP

$('#subscribe-popup #close-btn').click(function(){
	$("#subscribe-popup").fadeOut();
	return false;
});


// ADDING BACKGROUND IMAGES ON SCROLL

$('#section1-cover').waypoint(function(){
	$('#section2-cover').addClass('display-bg');
});

$('#section2-cover').waypoint(function(){
	$('#section3-cover').addClass('display-bg');
});

$('#section3-cover').waypoint(function(){
	$('#section4-cover').addClass('display-bg');
});

$('#section4-cover').waypoint(function(){
	$('#section5-cover').addClass('display-bg');
});

$('#section5-cover').waypoint(function(){
	$('#section6-cover').addClass('display-bg');
});

$('#section6-cover').waypoint(function(){
	$('#section7-cover').addClass('display-bg');
});

$('#section7-cover').waypoint(function(){
	$('#end').addClass('display-bg');
});



