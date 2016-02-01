$(function () {

	$(window).on('scroll', function () {
		if ( $(this).scrollTop() !== 0 ) {
			$('.navbar').addClass('navbar-scrolled');
			console.log('not zero');
		} else {
			console.log('zero');
			$('.navbar').removeClass('navbar-scrolled');
		}
	});
});