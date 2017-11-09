$(function(){
	$('#owl-demo').owlCarousel({
		items: 1,
		loop: true,
		mouseDrug: false,
		nav: true,
		navText: ["<img src=\"images/icons/prev3.png\">","<img src=\"images/icons/next3.png\">"],
		autoplay: true,
		autoplayTimeout: 4000,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
});
