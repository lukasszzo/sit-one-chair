(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var slider = document.querySelector('#main_slider');
		var left = slider.querySelector('.left');
		var right = slider.querySelector('.right');
		var slides = slider.querySelectorAll('.slide');
		var presentSlide = 0;
		var timer = null;
		var timeDelay = 5000;

		var timeoutRightSlide = function() {
			timer = setTimeout(function() {
				right.click();
			}, timeDelay);
		};

		var rightSlide = function() {

			for (var i=0; i<slides.length; i++) {
				slides[i].classList.remove('active');
			}
			presentSlide--;


			if (presentSlide < 0) {
				presentSlide = slides.length-1;
			}


			slides[presentSlide].classList.add('active');


			clearTimeout(timer);
			timeoutRightSlide();
		};

		var leftSlide = function() {


			for (var i=0; i<slides.length; i++) {
				slides[i].classList.remove('active');
			}
			presentSlide++;

			if (presentSlide > slides.length-1) {
				presentSlide = 0;
			}
			slides[presentSlide].classList.add('active');

			clearTimeout(timer);
			timeoutRightSlide();
		};


		timeoutRightSlide();

		left.addEventListener('click', leftSlide);
		right.addEventListener('click', rightSlide);

	});

})();


(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var boxes = document.querySelectorAll('.picture_center');
		console.log(boxes)
		var markBox = function(a) {
			a.preventDefault();

			for (var i=0; i<boxes.length; i++) {
				boxes[i].classList.remove('active');
			}

			a.currentTarget.classList.add('active');
		};

		for (var i=0; i<boxes.length; i++) {
			boxes[i].addEventListener('click', markBox)
		}
	});
})();
