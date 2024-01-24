const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

document.addEventListener('astro:page-load', () => {
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('is-active');
		mobileNav.classList.toggle('active');
		overlay.classList.toggle('open');
	});
});

document.addEventListener('astro:after-swap', () => ({}));

// Disable scroll-to-top default behaviour
// document.addEventListener('astro:after-swap', () =>
// 	window.scrollTo({
// 		left: 0,
// 		top: 0,
// 		behavior: 'instant',
// 	})
// );
