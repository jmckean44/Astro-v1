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
