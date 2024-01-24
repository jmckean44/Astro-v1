const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active');
	mobileNav.classList.toggle('active');
	overlay.classList.toggle('open');
});



// Disable scroll-to-top default behaviour
// document.addEventListener('astro:after-swap', () =>
// 	window.scrollTo({
// 		left: 0,
// 		top: 0,
// 		behavior: 'instant',
// 	})
// );
