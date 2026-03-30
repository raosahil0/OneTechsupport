// S'K One Tech Support - Main JavaScript Application

class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormHandlers();
        this.setupNavigation();
        this.setupAnimations();
    }

    // Form Handling Module
    setupFormHandlers() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }
    }

    async handleContactForm(e) {
        e.preventDefault();

        const formData = this.getFormData();
        if (!this.validateForm(formData)) return;

        this.showLoadingState();

        try {
            await this.saveContactData(formData);
            this.showSuccessMessage();
            this.resetForm();
        } catch (error) {
            this.showErrorMessage('Failed to send message. Please try again.');
        } finally {
            this.hideLoadingState();
        }
    }

    getFormData() {
        return {
            name: document.getElementById('name')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            inquiryType: document.getElementById('inquiryType')?.value || '',
            message: document.getElementById('message')?.value || '',
            timestamp: new Date().toISOString()
        };
    }

    validateForm(data) {
        if (!data.name.trim()) {
            this.showErrorMessage('Please enter your name.');
            return false;
        }
        if (!data.email.trim() || !this.isValidEmail(data.email)) {
            this.showErrorMessage('Please enter a valid email address.');
            return false;
        }
        if (!data.message.trim()) {
            this.showErrorMessage('Please enter your message.');
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async saveContactData(data) {
        // Phase 1: Local Storage (will be replaced with SQLite in Phase 2)
        return new Promise((resolve) => {
            setTimeout(() => {
                let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
                contacts.push({ id: Date.now(), ...data });
                localStorage.setItem('contacts', JSON.stringify(contacts));
                resolve();
            }, 500); // Simulate async operation
        });
    }

    showLoadingState() {
        const submitBtn = document.querySelector('#contactForm button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
        }
    }

    hideLoadingState() {
        const submitBtn = document.querySelector('#contactForm button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
    }

    showSuccessMessage() {
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.innerHTML = '<p class="text-green-400 font-semibold">✓ Thank you! Your message has been sent successfully.</p>';
            setTimeout(() => {
                messageDiv.innerHTML = '';
            }, 5000);
        }
    }

    showErrorMessage(message) {
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.innerHTML = `<p class="text-red-400 font-semibold">✗ ${message}</p>`;
            setTimeout(() => {
                messageDiv.innerHTML = '';
            }, 5000);
        }
    }

    resetForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.reset();
        }
    }

    // Navigation Module
    setupNavigation() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.smoothScrollTo(target);
                }
            });
        });

        // Mobile menu toggle (placeholder for future implementation)
        this.setupMobileMenu();
    }

    smoothScrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    setupMobileMenu() {
        // Placeholder for mobile hamburger menu
        // Will be implemented when mobile menu is added
    }

    // Animation Module
    setupAnimations() {
        // Intersection Observer for fade-in animations
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// Utility functions
const utils = {
    // Add any utility functions here
    debounce: (func, wait) => {
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
};