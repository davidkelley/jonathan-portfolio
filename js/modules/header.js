define(['jquery'], function($) {

	var m = {

		show: function() {
			$('html').addClass('header-visible');
		},

		hide: function() {
			$('html').removeClass('header-visible');
		}
	};

	return m;
});