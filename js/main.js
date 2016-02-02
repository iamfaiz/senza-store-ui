$(function () {
	$(window).on('scroll', function () {
		if ( $(this).scrollTop() > 10 ) {
			$('.navbar').addClass('navbar-scrolled');
		} else {
			$('.navbar').removeClass('navbar-scrolled');
		}
	});
});