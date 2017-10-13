$(function(){

	// Filter buttons
	$('.filter-bar-element a').on('click', function(e) {
		e.preventDefault();
		var self = $(this);
		var elToShow = self.parents('.filter-bar-element').attr('rel');
		if(elToShow == '.all'){
			$('.gallery-element').show(300);
		}
		else{
			$('.gallery-element').hide(300);
			$(elToShow).show(300);
		}
	});

	// Filter buttons in dropdown menu
	$('.filter-bar-element-m a').on('click', function(e) {
		e.preventDefault();
		var self = $(this);
		var elToShowM = self.parents('.filter-bar-element-m').attr('rel');
		if( elToShowM == '.all'){
			$('.gallery-element').show(300);
		}
		else{
			$('.gallery-element').hide(300);
			$(elToShowM).show(300);
		}
	});

	// Menu button 
	$('.menu a, .close-menu').on('click', function(e) {
		e.preventDefault();
		$('.open-menu').toggleClass('hiden');
		$('.open-menu').addClass('animated fadeIn');
		$('.menu a').fadeToggle(300);
		$('.search a').fadeToggle(300);
	});

	// Search button 
	$('.search a, .close-search').on('click', function(e) {
		e.preventDefault();
		$('.open-search').toggleClass('hiden');
		$('.open-search').addClass('animated fadeIn');
		$('.search a').fadeToggle(300);
		$('.menu a').fadeToggle(300);
	});

	// Show picture page
	$('.gallery-element a').on('click', function(e) {
		e.preventDefault();
		var self = $(this);
		var name = self.data('name');
		var artist = self.data('artist');
		var price = self.data('price');
		var img = self.data('img');
		$('.content .filter-bar, .content .gallery').fadeToggle(300);
		$('.picture').delay(300).fadeToggle(300);
		$('.picture img').attr('src', img);
		$('.picture h3 span').text(name);
		$('.picture p:nth-child(2) span').text(artist);
		$('.picture p:nth-child(3) span').text(price);
	});
	// Adaptive filter button 
	$('.filter-bar-button a').on('click', function(e){
		e.preventDefault();
		$('.dropdown-filter').slideToggle();
		$('.dropdown-filter').addClass('animated fadeIn');
	});
});



