(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var slider = document.querySelector('#main-slider');
		var prev = slider.querySelector(':scope .slider-prev');
		var next = slider.querySelector(':scope .slider-next');
		var slides = slider.querySelectorAll(':scope .slide');
		var currentSlide = 0;
		var timer = null;
		var timeDelay = 5000;

		var timeoutNextSlide = function() {
			timer = setTimeout(function() {
				next.click();
			}, timeDelay);
		};

		var prevSlide = function() {
			for (var i=0; i<slides.length; i++) {
				slides[i].classList.remove('active');
			}
			currentSlide--;

			if (currentSlide < 0) {
				currentSlide = slides.length-1;
			}

			slides[currentSlide].classList.add('active');
			clearTimeout(timer);
			timeoutNextSlide();
		};

		var nextSlide = function() {
			for (var i=0; i<slides.length; i++) {
				slides[i].classList.remove('active');
			}
			currentSlide++;
			if (currentSlide > slides.length-1) {
				currentSlide = 0;
			}
			slides[currentSlide].classList.add('active');
			clearTimeout(timer);
			timeoutNextSlide();
		};
		timeoutNextSlide();

		prev.addEventListener('click', prevSlide);
		next.addEventListener('click', nextSlide);

	});

})();
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var boxes = document.querySelectorAll('.picture-cnt');
		var markBox = function(e) {
			e.preventDefault();

			for (var i=0; i<boxes.length; i++) {
				boxes[i].classList.remove('active');
			}
			e.currentTarget.classList.add('active');
		};

		for (var i=0; i<boxes.length; i++) {
			boxes[i].addEventListener('click', markBox)
		}
	});
})();
