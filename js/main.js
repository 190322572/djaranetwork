// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
	nav.classList.toggle('active');
	mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
		'<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
	const header = document.getElementById('header');
	if (window.scrollY > 100) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

// Slider/Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-nav span');

function showSlide(n) {
	slides.forEach(slide => slide.classList.remove('active'));
	dots.forEach(dot => dot.classList.remove('active'));
	
	currentSlide = (n + slides.length) % slides.length;
	slides[currentSlide].classList.add('active');
	dots[currentSlide].classList.add('active');
}

function nextSlide() {
	showSlide(currentSlide + 1);
}

// Dot Navigation for Slider
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		showSlide(index);
	});
});

// Auto Slide
let slideInterval = setInterval(nextSlide, 5000);

// Pause on Hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => {
	clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
	slideInterval = setInterval(nextSlide, 5000);
});

// Number Animation
function animateNumbers() {
	const statNumbers = document.querySelectorAll('.stat-number');
	const speed = 200;
	
	statNumbers.forEach(statNumber => {
		const target = +statNumber.getAttribute('data-count');
		const count = +statNumber.innerText;
		const increment = target / speed;
		
		if (count < target) {
			statNumber.innerText = Math.ceil(count + increment);
			setTimeout(animateNumbers, 1);
		} else {
			statNumber.innerText = target;
		}
	});
}

// Trigger Number Animation on Scroll
window.addEventListener('scroll', () => {
	const aboutSection = document.querySelector('.about');
	const aboutPosition = aboutSection.getBoundingClientRect().top;
	const screenPosition = window.innerHeight / 1.3;
	
	if (aboutPosition < screenPosition) {
		animateNumbers();
	}
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		
		const targetId = this.getAttribute('href');
		if (targetId === '#') return;
		
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth'
			});
			
			// Close Mobile Menu
			if (nav.classList.contains('active')) {
				nav.classList.remove('active');
				mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
			}
		}
	});
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		alert('Thank you for your message! We will contact you soon.');
		this.reset();
	});
}