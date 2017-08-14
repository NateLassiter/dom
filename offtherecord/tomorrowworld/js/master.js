yepnope([
{
	test : Modernizr.touch,
	yep  : [],
	nope : ['/tomorrowworld/js/desktop.js']
}
]);

if(Modernizr.touch) {
    var threshold = 900;
    var effectspeed = 100;
}
else {
	var threshold = 600;
	var effectspeed = 900;
}

$('[data-original]')
	.filter(':not([data-masonry])')
	.lazyload({
		threshold : threshold,
		effect : "fadeIn",
		effectspeed: effectspeed
	});


// PRELOADER

$("#cover, .header:first, .cover-content:first").queryLoader2({
	overlayId: 'loader',
	onComplete: function () {
		$('.header:first').fadeIn(300);

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
	$(this).waypoint('disable');
	return false;
});




// SUBSCRIBE POPUP

$('#subscribe-popup #close-btn').click(function(){
	event.preventDefault();
	$("#subscribe-popup").fadeOut();
});


// MANUAL LAZY LOAD

function manualLazyLoad() {
	var $img = $(this);
	$img
		.attr('src', $img.attr('data-original'))
		.removeAttr('data-original');
}