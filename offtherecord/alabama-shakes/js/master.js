$(document).ready(function(){




// PRELOADER

$("#cover, #album").queryLoader2({
	overlayId: 'loader',
	onComplete: function () {
		$('header:first, .get-ready:first, .header:first').fadeIn(300, function(){
			yepnope([
			{
				test : Modernizr.touch,
				yep  : [],
				nope : ['js/desktop.js']
			}
			]);
		});

    }
});


// have one video div with desktop as default. Replace its html if touch

// var mobileVid-1 = 

// if $('body').hasClass('touch') {
// 	$('.video1').html('<iframe src=' + mobileVid-1 + '></iframe>');
// 	$('.video2').html('<iframe src=' + mobileVid-2 + '></iframe>');
// }; 


// SCROLLING MENU

$("#navbar ul li a, div.scroll a").click(function(event){
		event.preventDefault();
		var scrollDiv = $(this).attr('href');
		$("html, body").animate({
			scrollTop: $(scrollDiv).position().top
		}, 1500);
	});



// SLIDE NAV

var jPM = $.jPanelMenu({
    menu: '#menu',
    trigger: '.menu-trigger',
    duration: 100,
    direction: 'left',
    closeOnContentClick: false
	});

	jPM.on();

	$("a.menu-trigger:first").click(function() {
		$(".player-main, .get-ready, #navbar, .progress-bar").toggleClass('hide');
		$('.menu-icon').toggle();
		$('.menu-icon-close').toggle();
	});



// POSTERS


	var $container = $('#posterList');
	$container.imagesLoaded(function(){
		$container.masonry({
		itemSelector : '.poster',
		columnWidth : 0,
		isFitWidth: true
		});
	});

// SIGN UP & SHARE

	$('#signup').click(function(){
		event.preventDefault();
		$("#signup-container").fadeIn();
		$('#share-container').hide();
	});

	$('#signup-container #close-btn').click(function(){
		event.preventDefault();
		$("#signup-container").fadeOut();
	});

	$('#share').click(function(){
		event.preventDefault();
		$("#share-container").fadeIn();
		$('#signup-container').hide();
	});

	$('#share-container #close-btn').click(function(){
		event.preventDefault();
		$("#share-container").fadeOut();
	});



});


// PLAYER SCROLL EVENTS


    $("#cover").waypoint(function(){
		otrLazyLoad('.albumContent');
    });


	$("#album").waypoint(function(){
		otrLazyLoad('.liveContent');
		$('.get-ready').hide();
    });


	$("#live").waypoint(function(){
		otrLazyLoad('.singerContent');
	});


    $("#singer").waypoint(function(){
		otrLazyLoad('.bioContent');
	});



// SUBSCRIBE POPUP

	$("#section1-content").waypoint(function(){
		$('#subscribe-popup').fadeIn();
		$('#section1-content').waypoint('disable');
	});

	$('#subscribe-popup #close-btn').click(function(){
		event.preventDefault();
		$("#subscribe-popup").fadeOut();
	});


// IMAGE SLIDER

  //   $('.carousel').carousel({
		// interval: 2500
  //   });


// LAZY LOAD - trigger is optional
function otrLazyLoad(content) {

	console.log(content);

	var $content = $(content);

	$('img[data-lazy-src]', $content).each(function(){
		var $img = $(this);
		$img.attr('src', $img.attr('data-lazy-src'));
	});

	$('audio > source', $content).each(function(){
		var $src = $(this);
		var $parent = $src.parent();
		$src
			.attr('src', $src.attr('data-lazy-src'))
			.detach()
			.appendTo($parent);
	});
}



