

// MASONRY

// var container = document.querySelector('#work-group1');
// var msnry = new Masonry( container, {
//   // options
//   columnWidth: 320,
//   itemSelector: '.item1',
//   isFitWidth: true,
//   gutter: 30
// });

var $container = $('#work-group1').masonry();
// initialize Masonry after all images have loaded  
$container.imagesLoaded( function() {
  $container.masonry({
    columnWidth: 320,
    itemSelector: '.item1',
    isFitWidth: true,
    gutter: 30
  });
});

// WAYPOINTS

$('.logo').waypoint(function() {
  $('.quote-container h2, .quote-container img').addClass('animated fadeIn');
});


// SCROLLING MENU

$(".arrow-link").click(function(event){
	event.preventDefault();
	var scrollDiv = $(this).attr('href');
	$("html, body").animate({
		scrollTop: $(scrollDiv).position().top
	}, 1000);
});


// VIDEO BKG

$('#vid-bkg').videoBG({
  mp4:'static/vid/dom-vid.mp4',
  ogv:'static/vid/dom-vid.ogv',
  webm:'static/vid/dom-vid.webm',
  poster:'static/img/bkg-header.jpg',
  scale:true,
  zIndex:0,
  height: 640
});