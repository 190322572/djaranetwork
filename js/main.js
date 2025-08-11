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

document.addEventListener('DOMContentLoaded', function() {
// 获取模态框元素
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close-btn');

// 为所有View Details按钮添加点击事件
document.querySelectorAll('.view-details-btn').forEach(button => {
	button.addEventListener('click', function() {
		// 获取当前卡片中的内容
		const card = this.closest('.project-card');
		const title = card.querySelector('h3').textContent;
		const description = card.querySelector('.service-description').textContent;
		const imgSrc = card.querySelector('img').src;
		const imgAlt = card.querySelector('img').alt;
		
		
		// 填充模态框内容
		modalTitle.textContent = title;
		modalContent.innerHTML = `
			<img src="${imgSrc}" alt="${imgAlt}" style="width:100%; max-height:300px; object-fit:cover; border-radius:4px; margin-bottom:20px;">
			<p>${description}</p>
		`;
		
		// 显示模态框
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden'; // 防止背景滚动
	});
});

// 关闭模态框
function closeModal() {
	modal.style.display = 'none';
	document.body.style.overflow = 'auto'; // 恢复背景滚动
}

closeBtn.addEventListener('click', closeModal);

// 点击模态框外部关闭
window.addEventListener('click', function(event) {
	if (event.target === modal) {
		closeModal();
	}
});

// ESC键关闭模态框
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape' && modal.style.display === 'block') {
		closeModal();
	}
});
});



function openModal(modalId) {
	document.getElementById(modalId).classList.add('show');
	document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal(modalId) {
	document.getElementById(modalId).classList.remove('show');
	document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
	if (event.target.classList.contains('modal')) {
		event.target.classList.remove('show');
		document.body.style.overflow = 'auto';
	}
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		const modals = document.querySelectorAll('.modal.show');
		modals.forEach(modal => {
			modal.classList.remove('show');
			document.body.style.overflow = 'auto';
		});
	}
});