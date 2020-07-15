function openModal() {
	document.getElementById("modalFullscreen").style.width = "100%"
}
function closeModal() {
	document.getElementById("modalFullscreen").style.width = "0%"
} !

$(function () {
	"use strict";
	var wind = $(window);
	$.scrollIt({
		upKey: 38,
		downKey: 40,
		easing: 'swing',
		scrollTime: 600,
		activeClass: 'active',
		onPageChange: null,
		topOffset: -55
	});
	if ($('.wow').length) {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();
	}

	window.onscroll = function () { myFunction() };

	// header
	var header = document.getElementById("header");
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}

	// clients logo carousel
	$(".project-carousel").owlCarousel({
		loop: true,
		center: true,
		nav: true,
		dots: true,
		margin: 1,
		responsiveClass: !0,
		autoplay: false,
		smartSpeed: 950,
		autoplayTimeout: 6000,
		autoplayHoverPause: !0,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		items: 5,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			991: {
				items: 1
			},
			1024: {
				items: 1
			},
			1200: {
				items: 1
			},
			1920: {
				items: 1
			}
		}
	});

	// date range picker start here
	$(function () {
		$('input[name="daterange"]').daterangepicker({
			opens: 'left'
		}, function (start, end, label) {
			console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
		});
	});
});