// FYH INGENIEROS - MISSION-CRITICAL B2B LANDING PAGE
// JavaScript for Interactive Components

// Global Variables
let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;
const totalSlides = 5;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Main Initialization
function initializePage() {
    // Hide loading screen first
    hideLoadingScreen();
    
    // Initialize components
    initializeCarousel();
    initializeServiceFilters();
    initializeScrollAnimations();
    initializeIndustrySelector();
    initializeROICalculator();
    initializePricingToggle();
    initializeSmoothScroll();
    initializeFormHandling();
    initializeMobileMenu();
    initializeHeader();
    startCounterAnimations();
}

// Loading Screen Management
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Add hidden class for immediate hide
        loadingScreen.classList.add('hidden');
        
        // Also set opacity for fallback
        loadingScreen.style.opacity = '0';
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (loadingScreen && loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, 600);
    }
}

// ====================
// CAROUSEL FUNCTIONALITY
// ====================

function initializeCarousel() {
    const carousel = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!carousel) return;
    
    // Set initial state
    updateCarousel();
    updateIndicators();
    
    // Start autoplay
    startAutoPlay();
    
    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.cases-carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', pauseAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Touch/swipe support
    initializeTouchSupport();
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateCarousel();
    updateIndicators();
    resetAutoPlay();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
    updateIndicators();
    resetAutoPlay();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.case-slide');
    
    if (!carousel) return;
    
    // Update transform
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active states
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    // Update navigation buttons
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function startAutoPlay() {
    if (!isAutoPlaying) return;
    
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function pauseAutoPlay() {
    clearInterval(autoPlayInterval);
}

function resetAutoPlay() {
    pauseAutoPlay();
    startAutoPlay();
}

function initializeTouchSupport() {
    const carousel = document.querySelector('.cases-carousel');
    if (!carousel) return;
    
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        pauseAutoPlay();
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                changeSlide(1);
            } else {
                changeSlide(-1);
            }
        }
        
        startAutoPlay();
    });
}

// ====================
// SERVICE FILTERS
// ====================

function initializeServiceFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            // Filter service cards
            serviceCards.forEach((card, index) => {
                const cardCategories = card.dataset.category?.split(' ') || [];
                
                if (category === 'all' || cardCategories.includes(category)) {
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ====================
// INDUSTRY SELECTOR
// ====================

function initializeIndustrySelector() {
    const industrySelect = document.getElementById('industry-selector');
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (!industrySelect) return;
    
    industrySelect.addEventListener('change', (e) => {
        const selectedIndustry = e.target.value;
        
        serviceCards.forEach(card => {
            const cardIndustries = card.dataset.industries?.split(' ') || [];
            
            if (selectedIndustry === 'all' || cardIndustries.includes(selectedIndustry)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0.3';
            }
        });
    });
}

// ====================
// ROI CALCULATOR
// ====================

function initializeROICalculator() {
    const calculatorInputs = document.querySelectorAll('.roi-input');
    const resultElements = document.querySelectorAll('.roi-result');
    
    calculatorInputs.forEach(input => {
        input.addEventListener('input', calculateROI);
    });
}

function calculateROI() {
    const currentCosts = parseFloat(document.getElementById('current-costs')?.value) || 0;
    const timeSpent = parseFloat(document.getElementById('time-spent')?.value) || 0;
    const employees = parseFloat(document.getElementById('employees')?.value) || 0;
    
    // Simple ROI calculation
    const automationSavings = (timeSpent * employees * 0.7) * 12; // 70% time reduction annually
    const costReduction = currentCosts * 0.3 * 12; // 30% cost reduction annually
    const totalSavings = automationSavings + costReduction;
    
    // Update results
    const savingsElement = document.getElementById('calculated-savings');
    const roiElement = document.getElementById('calculated-roi');
    
    if (savingsElement) {
        savingsElement.textContent = `${Math.round(totalSavings).toLocaleString()} UF`;
    }
    
    if (roiElement) {
        const roi = totalSavings > 0 ? Math.round((totalSavings / (currentCosts || 1)) * 100) : 0;
        roiElement.textContent = `${roi}%`;
    }
}

// ====================
// PRICING TOGGLE
// ====================

function initializePricingToggle() {
    const toggle = document.getElementById('service-toggle');
    const toggleLabels = document.querySelectorAll('.toggle-label');
    const scheduleInfos = document.querySelectorAll('.schedule-info');
    const priceAmounts = document.querySelectorAll('.price-amount');
    const scheduleTexts = document.querySelectorAll('.schedule-text');
    
    if (!toggle) return;
    
    let is24x7 = true; // Start with 24x7 active
    
    function updatePricing() {
        // Update toggle state
        toggle.classList.toggle('active', is24x7);
        
        // Update labels
        toggleLabels.forEach((label, index) => {
            if (index === 0) { // 5x8 label
                label.classList.toggle('active', !is24x7);
            } else { // 24x7 label
                label.classList.toggle('active', is24x7);
            }
        });
        
        // Update schedule info
        scheduleInfos.forEach((info, index) => {
            if (index === 0) { // 5x8 info
                info.classList.toggle('active', !is24x7);
            } else { // 24x7 info
                info.classList.toggle('active', is24x7);
            }
        });
        
        // Update prices with animation
        priceAmounts.forEach(priceElement => {
            const price5x8 = priceElement.dataset.price5x8;
            const price24x7 = priceElement.dataset.price24x7;
            const targetPrice = is24x7 ? price24x7 : price5x8;
            
            // Animate price change
            animatePriceChange(priceElement, targetPrice);
        });
        
        // Update schedule text in features
        scheduleTexts.forEach(text => {
            text.textContent = is24x7 ? '24×7' : '5×8';
        });
    }
    
    function animatePriceChange(element, targetPrice) {
        const currentPrice = parseInt(element.textContent);
        const target = parseInt(targetPrice);
        const duration = 500;
        const steps = 30;
        const stepValue = (target - currentPrice) / steps;
        const stepTime = duration / steps;
        
        let current = currentPrice;
        let step = 0;
        
        const timer = setInterval(() => {
            step++;
            current += stepValue;
            
            if (step >= steps) {
                current = target;
                clearInterval(timer);
            }
            
            element.textContent = Math.round(current);
        }, stepTime);
    }
    
    // Toggle click handler
    toggle.addEventListener('click', () => {
        is24x7 = !is24x7;
        updatePricing();
    });
    
    // Initialize with 24x7 active
    updatePricing();
}

// ====================
// SCROLL ANIMATIONS
// ====================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger counter animations
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => animateCounter(counter));
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// ====================
// COUNTER ANIMATIONS
// ====================

function startCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });
        
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const suffix = element.textContent.replace(/[\d.]/g, '');
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const displayValue = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
        element.textContent = displayValue + suffix;
    }, stepTime);
}

// ====================
// SMOOTH SCROLL
// ====================

function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// ====================
// HEADER FUNCTIONALITY
// ====================

function initializeHeader() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            if (header) header.style.transform = 'translateY(-100%)';
        } else {
            if (header) header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', throttle(updateHeader, 10));
}

// ====================
// MOBILE MENU
// ====================

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu?.classList.toggle('active');
    hamburger?.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu?.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu?.classList.remove('active');
    hamburger?.classList.remove('active');
    document.body.style.overflow = '';
}

// ====================
// FORM HANDLING
// ====================

function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    });
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate form
    if (!validateForm(form)) {
        showNotification('Complete todos los campos requeridos.', 'error');
        return;
    }
    
    // Show loading state
    if (submitButton) {
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simulate submission
        setTimeout(() => {
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            showNotification('Mensaje enviado exitosamente.', 'success');
            
            console.log('Form submitted:', Object.fromEntries(formData));
        }, 2000);
    }
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Campo requerido');
            isValid = false;
        }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value && !isValidEmail(emailField.value)) {
        showFieldError(emailField, 'Formato de email inválido');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        showFieldError(field, 'Campo requerido');
    } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
        showFieldError(field, 'Formato de email inválido');
    }
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorElement = document.createElement('span');
    errorElement.classList.add('field-error');
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: var(--status-error, #ef4444);
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: block;
    `;
    
    field.style.borderColor = 'var(--status-error, #ef4444)';
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.style.borderColor = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ====================
// NOTIFICATIONS
// ====================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.classList.add('notification', `notification-${type}`);
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem',
        zIndex: '10000',
        maxWidth: '400px',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        backdropFilter: 'blur(10px)'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => closeNotification(notification));
    
    // Auto close after 5 seconds
    setTimeout(() => closeNotification(notification), 5000);
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
}

// ====================
// UTILITY FUNCTIONS
// ====================

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ====================
// KEYBOARD SUPPORT
// ====================

document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu and notifications
    if (e.key === 'Escape') {
        closeMobileMenu();
        
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => closeNotification(notification));
    }
    
    // Arrow keys for carousel navigation
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// ====================
// INITIALIZATION
// ====================

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Update carousel on resize
    updateCarousel();
}, 250));

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    // If DOM is already loaded, initialize immediately
    initializePage();
}

// Immediate check to hide loading screen if page is already loaded
if (document.readyState === 'complete') {
    hideLoadingScreen();
}

// Fallback: Force hide loading screen after 1 second regardless
setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        hideLoadingScreen();
    }
}, 1000);