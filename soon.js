// EcoMarket Coming Soon Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('EcoMarket Coming Soon - Initializing...');
    initializeTheme();
    setupThemeToggle();
    initializeComingSoon();
});

// ================== THEME MANAGEMENT ==================
let currentTheme = localStorage.getItem('theme') || 'dark';

function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggle();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeToggle();
}

function updateThemeToggle() {
    const themeToggle = document.getElementById('themeToggle') || document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle') || document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// ================== PAGE INITIALIZATION ==================
function initializeComingSoon() {
    startCountdownTimer();
    initializeAnimations();
    setupNewsletterForm();
    addInteractiveEffects();
    console.log('Coming Soon page loaded successfully!');
}

// ================== COUNTDOWN TIMER ==================
function startCountdownTimer() {
    // Target date: October 18th, 2025 at 1:00 PM IST
    const targetDate = new Date('2025-10-18T13:00:00+05:30');

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = targetDate.getTime() - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            updateTimeDisplay('days', days);
            updateTimeDisplay('hours', hours);
            updateTimeDisplay('minutes', minutes);
            updateTimeDisplay('seconds', seconds);
        } else {
            document.querySelector('.timer').innerHTML = 
                '<div class="launch-message"><h3>🚀 We\'re Live!</h3></div>';
        }
    }

    function updateTimeDisplay(id, value) {
        const element = document.getElementById(id);
        if (element) {
            const formattedValue = value.toString().padStart(2, '0');
            if (element.textContent !== formattedValue) {
                element.style.transform = 'scale(1.1)';
                element.style.color = '#34d399';
                setTimeout(() => {
                    element.textContent = formattedValue;
                    element.style.transform = 'scale(1)';
                    element.style.color = '';
                }, 150);
            }
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// ================== ANIMATIONS ==================
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .countdown, .newsletter');
    animatedElements.forEach(el => observer.observe(el));

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    const floatingElements = document.querySelectorAll('.float-item');
    floatingElements.forEach((element) => {
        const randomDuration = 6 + Math.random() * 4;
        const randomDelay = Math.random() * 2;
        element.style.animationDuration = `${randomDuration}s`;
        element.style.animationDelay = `${randomDelay}s`;

        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            element.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 5000);
    });
}

// ================== NEWSLETTER FORM ==================
function setupNewsletterForm() {
    const form = document.getElementById('emailForm');
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = input.value.trim();

        if (!email || !isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            input.focus();
            return;
        }

        const originalButtonContent = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Subscribing...</span>';
        button.disabled = true;

        setTimeout(() => {
            showNotification('🎉 Thank you! You\'ll be notified when we launch!', 'success');
            input.value = '';
            button.innerHTML = originalButtonContent;
            button.disabled = false;
            createCelebration();
        }, 2000);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// ================== INTERACTIVE EFFECTS ==================
function addInteractiveEffects() {
    const logos = document.querySelectorAll('.logo, .hero-logo');
    logos.forEach(logo => {
        logo.addEventListener('click', function () {
            this.style.transform = 'scale(1.2) rotate(360deg)';
            this.style.transition = 'transform 0.8s ease';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 800);
        });
    });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(52, 211, 153, 0.6);
                width: 10px;
                height: 10px;
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 5) + 'px';
            ripple.style.top = (e.clientY - rect.top - 5) + 'px';
            this.style.position = 'relative';
            this.appendChild(ripple);
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });

    let ticking = false;
    function updateFloatingElements() {
        const scrolled = window.pageYOffset;
        const floatingElements = document.querySelectorAll('.float-item');
        floatingElements.forEach((element, index) => {
            const speed = (index % 3 + 1) * 0.1;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateFloatingElements);
            ticking = true;
        }
    });
}

// ================== UTILITIES ==================
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : '#ef4444'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function createCelebration() {
    const colors = ['#22c55e', '#34d399', '#86efac', '#16a34a'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: -10px;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            animation: confetti-fall ${Math.random() * 2 + 3}s linear forwards;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// ================== DYNAMIC STYLES ==================
const dynamicStyles = `
    @keyframes ripple {
        0% { width: 10px; height: 10px; opacity: 1; }
        100% { width: 50px; height: 50px; opacity: 0; }
    }
    @keyframes confetti-fall {
        0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    .launch-message { text-align: center; padding: 2rem; }
    .launch-message h3 {
        font-size: 3rem;
        background: linear-gradient(135deg, #22c55e, #34d399);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: pulse 2s infinite;
    }
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

console.log('🌱 Thrift & Thrive Coming Soon page loaded successfully!');
