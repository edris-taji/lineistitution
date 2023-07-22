/** @format */

$('.js-height-full').height($(window).height());
$('.js-height-parent').each(function () {
	$(this).height($(this).parent().first().height());
});

// Fun Facts
function count($this) {
	var current = parseInt($this.html(), 10);
	current = current + 1; /* Where 50 is increment */

	$this.html(++current);
	if (current > $this.data('count')) {
		$this.html($this.data('count'));
	} else {
		setTimeout(function () {
			count($this);
		}, 50);
	}
}

$('.stat-timer').each(function () {
	$(this).data('count', parseInt($(this).html(), 10));
	$(this).html('0');
	count($(this));
});

$('.header').affix({
	offset: {
		top: 100,
		bottom: function () {
			return (this.bottom = $('.footer').outerHeight(true));
		},
	},
});

$(window).load(function () {
	$('#preloader').on(500).fadeOut();
	$('.preloader').on(600).fadeOut('slow');
});

$(document).ready(function () {
	// Add smooth scrolling to all links
	$('a').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});