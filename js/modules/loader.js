define(['jquery'], function($) {

	//get all image tags
	var imgs = $('img');

	//percentage loaded
	var Loader = function Loader(container) {

		if (container === void 0) throw new Exception("Loader needs container element");

		this.container = container;
		this.imgs = $('img', container);

		this.check();

		(function() {
			var tags = container.getElementsByTagName('*');

			for (var i in tags) {
				var el = tags[i];

				if (this.hasBackground(el)) {
					var img = new Image();
					img.src = $(el).css('backgroundImage');
					this.imgs.push(img);
				}
			}
		}).call(this);

		//loop through elements and append load function
		var that = this;

		//ensure loading timeout does not occur
		this.timeoutID = setTimeout(function() {
			//override!
			try { that.increment(100); } catch(e) {};
		},5000);

		//images found?
		console.log(['images', this.imgs.length]);
		if (this.imgs.length > 0) {
			//determine percentile for each image
			var percentile = Math.ceil(100/this.imgs.length);

			[].forEach.call(this.imgs, function(el) {
				console.log([el, el.src]);
				if (el.complete && (typeof el.naturalWidth == "number" && el.naturalWidth > 0)) {
					that.increment(percentile);
				} else {
					el.onload = function() {
						that.increment(percentile);
					};
				}
			});
		} else {
			//no images found!
			this.increment(100);
		}
		
	};

	Loader.prototype.check = function() {
		if (this.loaded < 100) {
			$(this.container).addClass('loading');
		} else {
			$(this.container).removeClass('loading');
			$(this.container).addClass('loaded');
		}
	};

	Loader.prototype.increment = function(val) {
		console.log(val);
		if (this.loaded + val > this.loaded) {
			this.loaded += val;
			this.adjust();
			this.check();
		}
	};

	Loader.prototype.adjust = function() {
		require(['helpers/animator'], function(animate) {
			animate($('.percentage', this.container), {
				width: this.loaded
			});
		});
	}

	//determine if element has a background style
	Loader.prototype.hasBackground = function(el) {
		if (el.currentStyle) {
			if (el.currentStyle['backgroundImage'] !== 'none') {
				return true;
			}	
		} else if (window.getComputedStyle) {
			var style = document.defaultView.getComputedStyle(el, null);
			if (style && style.getPropertyValue('background-image') !== 'none') {
				return true;
			}
		}

		return false;
	};
	

	return Loader;

});