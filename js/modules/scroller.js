define(['jquery', 'module'], function($, module) {

	var container = $(module.config().container);
	var frames = container.children();
	var sizer = $(module.config().sizer);
	var w = $(window);

	var animating = false;
	var frame = 0;

	var m = {

		wheel: function(e) {
			e = window.event || e;
			var delta = e.detail? e.detail*(-120) : e.wheelDelta;
			m.scroller(delta);
		},

		touch: function(e) {
			//TODO
		},

		scroller: function(y) {

			//get window height
			var h = w.height();

			//get current frame
			var current = $('.active', container);

			if (y > 0) {
				//scroll up
				if (current.prev().length > 0) {

					frame -= 1;

					m.animate(current, h, function() {
						current.removeClass('active');
						current.prev().addClass('active');
					});
				}
			} else {
				//scroll down
				var next = current.next();

				if (next.length > 0) {

					frame += 1;

					m.animate(next, 0, function() {
						current.removeClass('active');
						next.addClass('active');
					});
				}
			}

			require(['header'], function(header) {
				if (frame > 0) {
					header.hide();
				} else {
					header.show();
				}
			});
		},

		animate: function(el, val, cb) {
			if ( ! animating) {
				if (typeof cb == "function") {
					cb();
				}

				animating = true;
				$(el).stop().animate({top: val}, 1200, function() {
					animating = false;
				})
			}
		}
	};

	var evt = (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";

	if (document.attachEvent) {
		document.attachEvent("on" + evt, m.wheel)
	} else if (document.addEventListener) {
		document.addEventListener(evt, m.wheel, false)
	}

	//force a sizeup
	//m.size();

	return m;
});