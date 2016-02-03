$(function () {
	// Scrolling navbar effect.
	$(window).on('scroll', function () {
		if ( $(this).scrollTop() > 10 ) {
			$('.navbar').addClass('navbar-scrolled');
		} else {
			$('.navbar').removeClass('navbar-scrolled');
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
		$('.spinner input').val( parseInt($('.spinner input').val()) + 1);
	});
	$('.spinner .btn:last-of-type').on('click', function() {
		var currentValue = parseInt($('.spinner input').val());
		if ( (currentValue - 1) >= 1 ) {
			$('.spinner input').val( currentValue - 1);
		}
	});

	$('#item-count').on('change', function (event) {
		if (parseInt($(this).val()) < 0) {
			$(this).val(0);
		}
	});

});
