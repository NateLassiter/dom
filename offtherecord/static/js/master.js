


// PRELOADER

$("#ef-cover, #section1-cover").queryLoader2({
	overlayId: 'loader',
	onComplete: function () {
		$('.header:first').fadeIn(300, function(){
			yepnope([
			{
				test : Modernizr.touch,
				yep  : [],
				nope : ['/static/js/desktop.js']
			}
			]);
		});

    }
});



// SCROLLING MENU

$("#side-nav ul li a, div.scroll a").click(function(event){
		event.preventDefault();
		var scrollDiv = $(this).attr('href');
		$("html, body").animate({
			scrollTop: $(scrollDiv).position().top
		}, 1500);
	});



// MASONRY


	var $container = $('#fanList');
	$container.imagesLoaded(function(){
		$container.masonry({
		itemSelector : '.fan',
		columnWidth : 0,
		isFitWidth: true
		});
	});




// PLAYER SCROLL EVENTS


$("#section1-cover").waypoint(function(){
	otrLazyLoad('#section1-content');
});


$("#section1-content").waypoint(function(){
	otrLazyLoad('#section2-content');
});

$("#section2-content").waypoint(function(){
	otrLazyLoad('#section3-content');
});

$("#section3-content").waypoint(function(){
	otrLazyLoad('#section4-content');
});

$("#section4-content").waypoint(function(){
	otrLazyLoad('#section5-content');
});

$("#section5-content").waypoint(function(){
	otrLazyLoad('#section6-content');
});

$("#section6-content").waypoint(function(){
	otrLazyLoad('#end');
});


// SUBSCRIBE POPUP

	// $("#section1-content").waypoint(function(){
	// 	$('#subscribe-popup').fadeIn();
	// 	$('#section1-content').waypoint('disable');
	// });

	// $('#subscribe-popup #close-btn').click(function(){
	// 	event.preventDefault();
	// 	$("#subscribe-popup").fadeOut();
	// });



// LAZY LOAD - trigger is optional
function otrLazyLoad(content) {

	var $content = $(content);

	$('img[data-lazy-src]', $content).each(function(){
		var $img = $(this);
		$img.attr('src', $img.attr('data-lazy-src'));
		$img.removeAttr('data-lazy-src');
	});

}


