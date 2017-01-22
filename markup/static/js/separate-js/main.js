$(document).ready(function() {

	$('.js-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		draggable: true,
		dots: true,
		// autoplay: true,
		// autoplaySpeed: 5000,
		// lazyLoad: 'ondemand'
	});
    
	// $('.js-view-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	draggable: false,
	// 	fade: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 5000,
	// 	lazyLoad: 'ondemand',
	// 	asNavFor: '.js-nav-slider'
	// });

	// $('.js-nav-slider').slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	focusOnSelect: true,
	// 	draggable: false,
	// 	vertical: true,
	// 	asNavFor: '.js-view-slider'
	// });


	$('.js-modal').on('show.bs.modal', function () {
		var docHeight    = $(document).height(),
			windowHeight = $(window).height(),
			docWidth     = $(document).outerWidth(),
			windowWidth  = $(window).outerWidth(),
			widthScroll  = windowWidth - docWidth;

		if (docHeight > windowHeight) {
			// fix-scroll
			$('body').css("paddingRight", widthScroll);
		}
		else { 
			$('body').css("paddingRight", "0");
		}
	});
	$('.js-modal').on('hidden.bs.modal', function () {
		$('body').css("paddingRight", "0");
	});


});