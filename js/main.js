$(function () {
	// Scrolling navbar effect.
	$(window).on('scroll', function () {
		if ( $(this).scrollTop() > 10 ) {
			$('.navigation-bar').addClass('scrolled');
		} else {
			$('.navigation-bar').removeClass('scrolled');
		}
	});

	// Login and Register in on modal
	var $loginRegisterModal = $('#login-register-modal');
	$('a[data-open="register"]').on('click', function (event) {
		event.preventDefault();

		$loginRegisterModal.addClass('show-register');
		$loginRegisterModal.removeClass('show-login');
	});

	$('a[data-open="login"]').on('click', function (event) {
		event.preventDefault();

		$loginRegisterModal.addClass('show-login');
		$loginRegisterModal.removeClass('show-register');
	});

	$('.btn-buy-now').on('click', function (event) {
		event.preventDefault();

		$('#login-register-modal').modal('show');
	});


	$('.spinner .btn:first-of-type').on('click', function() {
		var $input = $(this).parent().siblings('input');

		$input.val( parseInt($input.val()) + 1);
	});

	$('.spinner .btn:last-of-type').on('click', function() {
		var $input = $(this).parent().siblings('input');
		var currentValue = parseInt($input.val());

		if ( (currentValue - 1) >= 1 ) {
			$input.val( currentValue - 1);
		}
	});
});
