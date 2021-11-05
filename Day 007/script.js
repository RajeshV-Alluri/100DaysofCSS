$('.fa-search').bind('click', () => {
	$('input').toggleClass('active');
});

$('.menu-icon').bind('click', () => {
	$('.center').toggleClass('active');
	$('.menu').toggleClass('showMenu');
});