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
		const description = card.querySelector('.service-description').innerHTML;
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

//为什么选择我们弹窗start
// Modal content for Why Choose Us section
const whyChooseModalContent = {
    modal1: {
        title: "Comprehensive 9-Service Delivery Model",
        content: `
            <p>We provide end-to-end infrastructure services across 9 specialised domains, from fibre deployment, HDD boring, network fault response, to mining and smart infrastructure. This integrated service model reduces delays, cuts costs, and ensures high performance at every stage — no subcontracting needed.</p>
        `
    },
    modal2: {
        title: "Proven Telecommunications & Mining Expertise",
        content: `
            <p>Our leadership and crews bring over a decade of field experience across NBN, Opticomm, Superloop, and major mining clients. Whether it's FTTP, directional drilling under roads or mining camp comms, we have a verified track record of delivering compliant, complex projects with zero non-conformances.</p>
        `
    },
    modal3: {
        title: "Fast Response, 24/7 Support & Emergency Crews",
        content: `
            <p>Through our dedicated operations team and in-house fleet, we mobilise technical teams and machinery within 24 hours for urgent maintenance, fault repair, or emergency network rerouting. Clients trust us to be responsive, ready, and effective — anytime, anywhere.</p>
        `
    },
    modal4: {
        title: "Certified, Safety-Inducted, and Regulatory Compliant",
        content: `
            <p>All our staff hold White Cards, Telstra/NBN accreditations, confined space tickets, traffic control licenses, and site-specific inductions including mining. WHS compliance and audit readiness are built into our operating standards, ensuring full legal and technical compliance.</p>
        `
    },
    modal5: {
        title: "In-House Equipment for Every Job",
        content: `
            <p>We own and operate all major tools including vacuum trucks, HDD rigs, trenchers, fusion splicers, and OTDR testers — eliminating third-party risk, improving schedule control, and maintaining quality across every worksite.</p>
        `
    },
    modal6: {
        title: "Trusted by Tier-1 Clients in Telco & Industry",
        content: `
            <p>We are a trusted subcontractor to telcos like Genus, Lightning Broadband, Opticomm, and Superloop, as well as clients in energy, local government, and mining. Our delivery record is clean — with consistent on-time performance and client satisfaction.</p>
        `
    },
    modal7: {
        title: "Smart Project Management with Clear Accountability",
        content: `
            <p>Our site supervisors and project managers oversee progress, safety, documentation, and client liaison from start to finish. Each project is delivered with detailed reporting, redline as-builts, GIS updates, and compliance packages — ensuring transparency and results.</p>
        `
    },
    modal8: {
        title: "Culturally-Rooted & Community-Focused",
        content: `
            <p>DjaraNetwork was founded with Indigenous values and a commitment to inclusive employment. We prioritise local hiring, mentorship, and capacity building in all communities we serve — while delivering best-in-class infrastructure outcomes.</p>
        `
    }
};

// Open Why Choose Us modal
function openWhyChooseModal(modalId) {
    const modal = document.getElementById('whyChooseModal');
    const modalTitle = document.getElementById('whyChooseModalTitle');
    const modalContent = document.getElementById('whyChooseModalContent');
    
    modalTitle.textContent = whyChooseModalContent[modalId].title;
    modalContent.innerHTML = whyChooseModalContent[modalId].content;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close Why Choose Us modal
function closeWhyChooseModal() {
    document.getElementById('whyChooseModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('whyChooseModal');
    if (event.target == modal) {
        closeWhyChooseModal();
    }
}
//为什么选择我们弹窗end