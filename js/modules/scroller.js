define(['jquery', 'module', 'helpers/binder'], function($, module, Binder) {

	var images = $(module.config().imageSelector)
	var container = $(module.config().container);
	var frames = container.children();
	var w = $(window);

	var animating = false;
	var frame = 0;

	var m = {

		wheel: function(e) {
			e = window.event || e;
			var delta = e.detail? e.detail*(-120) : e.wheelDelta;
			m.scroller(delta);
		},

		keypress: function(e) {
			var code = e.keyCode || e.charCode;

			switch (code) {
				case 40: 
					m.scroller(-1);
					break;
				case 38:
					m.scroller(1);
					break;
			}
		},

		adjustClasses: function(c, n) {
			var a = c.attr('id');
			var b = n.attr('id');

			$('html').removeClass(a).addClass(b);
			c.removeClass('active');
			n.addClass('active');
		},

		footer: {
			visible: function() {
				return $('html').hasClass('footer-visible');
			},

			show: function () {
				if ( ! animating) {
					$('html').addClass('footer-visible');
				}
			},

			hide: function() {
				animating = true;
				$('html').removeClass('footer-visible');
				setTimeout(function() { animating = false; }, 1200);
			}
		},

		scroller: function(y) {

			//get window height
			var h = w.height();

			//get current frame
			var current = $('.active', container);

			if (y > 0) {

				if (m.footer.visible()) {
					m.footer.hide();
					return;
				}
				
				//scroll up
				if (current.prev().length > 0) {

					m.animate(current, 0, function() {	
						frame -= 1;
						m.adjustClasses(current, current.prev());
					});
				}
			} else {
				//scroll down
				var next = current.next();

				if (next.length > 0) {

					m.animate(next, h, function() {
						frame += 1;
						m.adjustClasses(current, next);
					});
				} else {
					m.footer.show();
				}
			}

			
		},

		animate: function(el, val, cb) {
			if ( ! animating) {
				if (typeof cb == "function") {
					cb();
				}

				animating = true;
				$(el).css({height:val});
				setTimeout(function() { animating = false; }, 1200);
			}
		}
	};

	if ( ! Modernizr.touch) {
		var evt = (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";

		if (document.attachEvent) {
			document.attachEvent("on" + evt, m.wheel);
		} else if (document.addEventListener) {
			document.addEventListener(evt, m.wheel, false)
		}
	}

	var binds = {
		document: {
			keydown: [ m.keypress ],
		}
	}

	var binder = new Binder(binds);

	//force a sizeup
	//m.size();

	return m;
});