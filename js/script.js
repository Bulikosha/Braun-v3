var menuBlock = document.getElementById('mobileMenuBlock');

function openMenu() {

	menuBlock.style.display = 'block';
}

function closeMenu() {
	menuBlock.style.display = 'none';
}

$(document).ready(function() {
	$('.slider').slick({
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
		dots: false,
	});
})