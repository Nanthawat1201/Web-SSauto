// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                accent: '#06b6d4',
                dark: '#0f172a',
                light: '#f8fafc'
            },
            fontFamily: {
                'thai': ['Kanit', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-in': 'slide-in 0.8s ease-out',
                'fade-in': 'fade-in 1s ease-out',
                'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
                'rotate-slow': 'rotate-slow 20s linear infinite',
                'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow': {
                    '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
                    '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
                },
                'slide-in': {
                    '0%': { opacity: '0', transform: 'translateX(-100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'bounce-gentle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'rotate-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            }
        }
    }
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    initializeLoading();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeNavbarEffects();
    initializeScrollToTop();
    initializeScrollReveal();
    initializeParallaxEffects();
    initializeRippleEffects();
    initializeGreeting();
    initializeCardAnimations();
    initializeCounters();
    initializeKeyboardNavigation();
    initializeHoverEffects();
    initializePerformanceOptimizations();
    initializeServiceWorker();
    initializeAccessibilityFeatures();
}

// Loading Screen
function initializeLoading() {
    window.addEventListener('load', () => {
        const loading = document.getElementById('loading');
        if (loading) {
            setTimeout(() => {
                loading.style.opacity = '0';
                loading.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    loading.style.display = 'none';
                }, 300);
            }, 1000);
        }
    });
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Navbar Scroll Effects
function initializeNavbarEffects() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = 'none';
            }
        }, 16));
    }
}

// Scroll to Top Button
function initializeScrollToTop() {
    const scrollToTop = document.getElementById('scrollToTop');
    
    if (scrollToTop) {
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 100) {
                scrollToTop.classList.remove('opacity-0', 'invisible');
            } else {
                scrollToTop.classList.add('opacity-0', 'invisible');
            }
        }, 16));
        
        scrollToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll Reveal Animation
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Parallax Effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }, 16));
    }
}

// Ripple Effects
function initializeRippleEffects() {
    document.querySelectorAll('button, .card-hover').forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Dynamic Greeting
function initializeGreeting() {
    const updateGreeting = () => {
        const hour = new Date().getHours();
        let greeting = '';
        
        if (hour < 12) {
            greeting = 'สวัสดีตอนเช้า! 🌅';
        } else if (hour < 17) {
            greeting = 'สวัสดีตอนบ่าย! ☀️';
        } else {
            greeting = 'สวัสดีตอนเย็น! 🌆';
        }
        
        // Store greeting for potential use
        window.currentGreeting = greeting;
        console.log('Current greeting:', greeting);
    };

    updateGreeting();
    
    // Update greeting every hour
    setInterval(updateGreeting, 3600000);
}

// Card Animations
function initializeCardAnimations() {
    document.querySelectorAll('.card-hover').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (counters.length > 0) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.count);
                    const increment = target / 100;
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    countObserver.unobserve(counter);
                }
            });
        });

        counters.forEach(counter => {
            countObserver.observe(counter);
        });
    }
}

// Keyboard Navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const mobileMenu = document.getElementById('mobile-menu');
        
        switch(e.key) {
            case 'Escape':
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
                break;
            case 'Tab':
                // Enhance tab navigation
                document.body.classList.add('keyboard-navigation');
                break;
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Hover Effects
function initializeHoverEffects() {
    document.querySelectorAll('.neon-glow').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
        });
    });
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Preload critical resources
    const preloadLinks = [
        'styles.css',
        'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = href.includes('.css') ? 'style' : 'font';
        if (href.includes('fonts.googleapis.com')) {
            link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
    });
}

// Service Worker Registration
function initializeServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Accessibility Features
function initializeAccessibilityFeatures() {
    // Focus management
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
            }
        });
    }
    
    // Announce page changes to screen readers
    const announcePageChange = (message) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.classList.add('sr-only');
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };
    
    // Monitor route changes
    let currentSection = '';
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newSection = entry.target.id;
                if (newSection !== currentSection) {
                    currentSection = newSection;
                    announcePageChange(`เข้าสู่ส่วน ${newSection}`);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });
}

// Utility Functions
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

function getRandomColor() {
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const change = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        const currentValue = start + (change * easeProgress);
        
        element.textContent = Math.floor(currentValue);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Error Handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // You could send this to an error reporting service
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // You could send this to an error reporting service
});

// Performance Monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            console.log('DOM content loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
        });
    }
}

measurePerformance();

// Custom Events
const SSAutoEvents = {
    pageLoaded: new CustomEvent('ssauto:pageLoaded'),
    sectionChanged: new CustomEvent('ssauto:sectionChanged'),
    mobileMenuToggled: new CustomEvent('ssauto:mobileMenuToggled'),
    scrollToTopClicked: new CustomEvent('ssauto:scrollToTopClicked')
};

// Analytics Integration (Google Analytics example)
function initializeAnalytics() {
    // Track page view
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
    
    // Track custom events
    document.addEventListener('ssauto:pageLoaded', () => {
        trackEvent('page_interaction', 'page_loaded');
    });
    
    document.addEventListener('ssauto:sectionChanged', (e) => {
        trackEvent('navigation', 'section_changed', e.detail.section);
    });
    
    // Track button clicks
    document.querySelectorAll('a[href^="#contact"]').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('user_interaction', 'contact_button_clicked');
        });
    });
    
    // Track social media clicks
    document.querySelectorAll('a[href*="facebook.com"], a[href*="line.me"]').forEach(link => {
        link.addEventListener('click', () => {
            const platform = link.href.includes('facebook') ? 'facebook' : 'line';
            trackEvent('social_interaction', 'social_click', platform);
        });
    });
}

function trackEvent(category, action, label = null) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: 1
        });
    }
}

// Local Storage Management
const Storage = {
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    },
    
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.warn('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('Error removing from localStorage:', e);
        }
    }
};

// Theme Management
function initializeThemeManager() {
    const theme = Storage.get('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!Storage.get('theme')) {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Contact Form Handler (if you add a contact form)
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'กำลังส่ง...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                showNotification('ส่งข้อความสำเร็จ! เราจะติดต่อกลับเร็วที่สุด', 'success');
                contactForm.reset();
                
                // Track form submission
                trackEvent('form_interaction', 'contact_form_submitted');
                
            } catch (error) {
                console.error('Form submission error:', error);
                showNotification('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', 'error');
            } finally {
                // Reset button state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${getNotificationClasses(type)}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function getNotificationClasses(type) {
    const classes = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-black',
        info: 'bg-blue-500 text-white'
    };
    return classes[type] || classes.info;
}

// Search Functionality (if you add search)
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 300);
        });
    }
}

function performSearch(query) {
    if (!query.trim()) return;
    
    const searchableElements = document.querySelectorAll('[data-searchable]');
    const results = [];
    
    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            results.push(element);
        }
    });
    
    displaySearchResults(results);
    trackEvent('search', 'search_performed', query);
}

function displaySearchResults(results) {
    // Implementation for displaying search results
    console.log('Search results:', results);
}

// FAQ Management
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('open', !isOpen);
                
                // Track FAQ interaction
                trackEvent('user_interaction', 'faq_clicked', question.textContent);
            });
        }
    });
}

// Image Gallery
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(item);
        });
    });
}

function openLightbox(item) {
    const lightbox = document.createElement('div');
    lightbox.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50';
    lightbox.innerHTML = `
        <div class="relative max-w-4xl max-h-full p-4">
            <button class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors" onclick="closeLightbox()">×</button>
            <img src="${item.src}" alt="${item.alt}" class="max-w-full max-h-full object-contain">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Close on escape key
    document.addEventListener('keydown', handleLightboxKeydown);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.querySelector('.fixed.inset-0.bg-black');
    if (lightbox) {
        document.body.removeChild(lightbox);
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleLightboxKeydown);
    }
}

function handleLightboxKeydown(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
}

// Lazy Loading Implementation
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('lazy-loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('lazy-loaded');
        });
    }
}

// Cookie Consent (GDPR compliance)
function initializeCookieConsent() {
    const consent = Storage.get('cookieConsent');
    
    if (!consent) {
        showCookieConsent();
    }
}

function showCookieConsent() {
    const banner = document.createElement('div');
    banner.className = 'fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50';
    banner.innerHTML = `
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p class="mb-4 md:mb-0">เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ</p>
            <div class="flex space-x-4">
                <button onclick="acceptCookies()" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">ยอมรับ</button>
                <button onclick="declineCookies()" class="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-colors">ปฏิเสธ</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
}

function acceptCookies() {
    Storage.set('cookieConsent', 'accepted');
    removeCookieBanner();
    initializeAnalytics();
}

function declineCookies() {
    Storage.set('cookieConsent', 'declined');
    removeCookieBanner();
}

function removeCookieBanner() {
    const banner = document.querySelector('.fixed.bottom-0.bg-gray-900');
    if (banner) {
        document.body.removeChild(banner);
    }
}

// PWA Installation Prompt
function initializePWAInstall() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallPrompt();
    });
    
    function showInstallPrompt() {
        const installButton = document.createElement('button');
        installButton.textContent = 'ติดตั้งแอป';
        installButton.className = 'fixed bottom-20 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-40';
        
        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    trackEvent('pwa', 'installed');
                }
                
                deferredPrompt = null;
                document.body.removeChild(installButton);
            }
        });
        
        document.body.appendChild(installButton);
        
        // Remove button after 10 seconds if not clicked
        setTimeout(() => {
            if (document.body.contains(installButton)) {
                document.body.removeChild(installButton);
            }
        }, 10000);
    }
}

// Online/Offline Status
function initializeOfflineSupport() {
    function updateOnlineStatus() {
        const status = navigator.onLine ? 'online' : 'offline';
        document.body.setAttribute('data-connection', status);
        
        if (!navigator.onLine) {
            showNotification('คุณกำลังใช้งานแบบออฟไลน์', 'warning');
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

// Error Boundary
function initializeErrorBoundary() {
    window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error);
        
        // Show user-friendly error message
        showNotification('เกิดข้อผิดพลาดบางอย่าง กรุณาลองรีเฟรชหน้าเว็บ', 'error');
        
        // Track error
        trackEvent('error', 'javascript_error', event.error.message);
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        
        // Track promise rejection
        trackEvent('error', 'promise_rejection', event.reason);
    });
}

// Initialize all modules
function initializeAdvancedFeatures() {
    initializeAnalytics();
    initializeThemeManager();
    initializeContactForm();
    initializeSearch();
    initializeFAQ();
    initializeGallery();
    initializeLazyLoading();
    initializeCookieConsent();
    initializePWAInstall();
    initializeOfflineSupport();
    initializeErrorBoundary();
}

// Export functions for global use
window.SSAuto = {
    trackEvent,
    showNotification,
    Storage,
    closeLightbox,
    acceptCookies,
    declineCookies
};

// Initialize advanced features after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeAdvancedFeatures();
});

// Dispatch page loaded event
window.addEventListener('load', () => {
    document.dispatchEvent(SSAutoEvents.pageLoaded);
});

// Console welcome message
console.log(`
%c🚗 SS AUTO Website
%cReady to serve! 
%cDeveloped with ❤️ for premium car service
`, 
'color: #6366f1; font-size: 20px; font-weight: bold;',
'color: #8b5cf6; font-size: 14px;',
'color: #06b6d4; font-size: 12px;'
);