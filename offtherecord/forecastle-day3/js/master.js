yepnope([
{
	test : Modernizr.touch,
	yep  : [],
	nope : ['/forecastle-day3/js/desktop.js']
}
]);

if(Modernizr.touch) {
    var threshold = 900;
    var effectspeed = 100;
}
else {
	var threshold = 0;
	var effectspeed = 700;
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



// PLAYER SCROLL EVENTS / MASONRY


$("#section3-content").waypoint(function(){
	var $imgs = $('[data-masonry]', $("#section4-content"));
	$imgs.each(manualLazyLoad);
	var $fanList = $('#fanList');
	$fanList.imagesLoaded(function(){
		$fanList.masonry({
			itemSelector : '.fan',
			columnWidth : 0,
			isFitWidth: true
		});
	});
});


$("#section4-content").waypoint(function(){
	var $section = $(this);
	$('#subscribe-popup').fadeIn();
	$section.waypoint('disable');
	var $imgs = $('[data-masonry]', $("#section5-content"));
	$imgs.each(manualLazyLoad);
	var $fanList2 = $('#fanList2');
	$fanList2.imagesLoaded(function(){
		$fanList2.masonry({
			itemSelector : '.fan2',
			columnWidth : 0,
			isFitWidth: true
		});
	});
});

$("#section8-content").waypoint(function(){

	var $imgs = $('[data-masonry]', $("#section9-content"));

	$imgs.each(manualLazyLoad);
	
	var $fanList3 = $('#fanList3');
	$fanList3.imagesLoaded(function(){
		$fanList3.masonry({
			itemSelector : '.fan3',
			columnWidth : 0,
			isFitWidth: true
		});
	});

	var $fanList4 = $('#fanList4');
	$fanList4.imagesLoaded(function(){
		$fanList4.masonry({
			itemSelector : '.fan4',
			columnWidth : 0,
			isFitWidth: true
		});
	});

});


// SUBSCRIBE POPUP

$('#subscribe-popup #close-btn').click(function(){
	$("#subscribe-popup").fadeOut();
	return false;
});


// MANUAL LAZY LOAD

function manualLazyLoad() {
	var $img = $(this);
	$img
		.attr('src', $img.attr('data-original'))
		.removeAttr('data-original');
}