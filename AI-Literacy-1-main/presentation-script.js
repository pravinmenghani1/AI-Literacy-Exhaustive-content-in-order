// Enhanced AI Literacy Presentation JavaScript

class AIPresentation {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        this.isAutoPlay = false;
        this.autoPlayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showSlide(0);
        this.createSlideIndicators();
        this.setupAutoPlay();
        this.setupFullscreen();
        this.setupThemeToggle();
        this.animateElements();
    }

    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Touch/swipe navigation
        document.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        document.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        
        // Mouse wheel navigation
        document.addEventListener('wheel', (e) => this.handleWheel(e));
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Prevent context menu on right click
        document.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    handleKeyPress(e) {
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
            case 'f':
            case 'F11':
                e.preventDefault();
                this.toggleFullscreen();
                break;
            case 'p':
                e.preventDefault();
                this.toggleAutoPlay();
                break;
            case 'r':
                e.preventDefault();
                this.resetPresentation();
                break;
            case 'Escape':
                this.exitFullscreen();
                break;
        }
    }

    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }

    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    handleWheel(e) {
        e.preventDefault();
        const delta = e.deltaY;
        
        if (delta > 0) {
            this.nextSlide();
        } else {
            this.previousSlide();
        }
    }

    handleResize() {
        // Adjust layout for different screen sizes
        this.adjustLayout();
    }

    showSlide(n) {
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        
        // Calculate new slide index
        this.currentSlide = (n + this.totalSlides) % this.totalSlides;
        
        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');
        
        // Update UI elements
        this.updateProgressBar();
        this.updateSlideCounter();
        this.updateSlideIndicators();
        
        // Animate slide elements
        this.animateSlideElements();
        
        // Update URL hash
        window.location.hash = `slide-${this.currentSlide + 1}`;
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    previousSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    goToSlide(n) {
        if (n >= 0 && n < this.totalSlides) {
            this.showSlide(n);
        }
    }

    updateProgressBar() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }

    updateSlideCounter() {
        const counter = document.getElementById('slideCounter');
        if (counter) {
            counter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
        }
    }

    createSlideIndicators() {
        const indicatorContainer = document.createElement('div');
        indicatorContainer.className = 'slide-indicators';
        indicatorContainer.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 1000;
        `;

        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'slide-indicator';
            indicator.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            
            indicator.addEventListener('click', () => this.goToSlide(i));
            indicatorContainer.appendChild(indicator);
        }

        document.body.appendChild(indicatorContainer);
        this.indicators = document.querySelectorAll('.slide-indicator');
    }

    updateSlideIndicators() {
        if (this.indicators) {
            this.indicators.forEach((indicator, index) => {
                if (index === this.currentSlide) {
                    indicator.style.background = '#ffd93d';
                    indicator.style.transform = 'scale(1.2)';
                } else {
                    indicator.style.background = 'rgba(255, 255, 255, 0.3)';
                    indicator.style.transform = 'scale(1)';
                }
            });
        }
    }

    setupAutoPlay() {
        const autoPlayBtn = document.createElement('button');
        autoPlayBtn.className = 'nav-btn auto-play-btn';
        autoPlayBtn.textContent = '▶ Auto Play';
        autoPlayBtn.addEventListener('click', () => this.toggleAutoPlay());
        
        const navigation = document.querySelector('.navigation');
        if (navigation) {
            navigation.appendChild(autoPlayBtn);
        }
    }

    toggleAutoPlay() {
        const btn = document.querySelector('.auto-play-btn');
        
        if (this.isAutoPlay) {
            clearInterval(this.autoPlayInterval);
            this.isAutoPlay = false;
            if (btn) btn.textContent = '▶ Auto Play';
        } else {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
            this.isAutoPlay = true;
            if (btn) btn.textContent = '⏸ Pause';
        }
    }

    setupFullscreen() {
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'nav-btn fullscreen-btn';
        fullscreenBtn.textContent = '⛶ Fullscreen';
        fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        
        const navigation = document.querySelector('.navigation');
        if (navigation) {
            navigation.appendChild(fullscreenBtn);
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    exitFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }

    setupThemeToggle() {
        const themeBtn = document.createElement('button');
        themeBtn.className = 'nav-btn theme-btn';
        themeBtn.textContent = '🌙 Dark';
        themeBtn.addEventListener('click', () => this.toggleTheme());
        
        const navigation = document.querySelector('.navigation');
        if (navigation) {
            navigation.appendChild(themeBtn);
        }
    }

    toggleTheme() {
        const body = document.body;
        const btn = document.querySelector('.theme-btn');
        
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            if (btn) btn.textContent = '🌙 Dark';
        } else {
            body.classList.add('light-theme');
            if (btn) btn.textContent = '☀️ Light';
        }
    }

    animateElements() {
        // Animate interactive elements
        document.querySelectorAll('.interactive-element').forEach(element => {
            element.addEventListener('click', function() {
                this.style.transform = 'scale(1.1) rotate(5deg)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            });
        });

        // Animate cards on hover
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });

        // Animate neurons
        this.animateNeurons();
    }

    animateSlideElements() {
        const currentSlideElement = this.slides[this.currentSlide];
        
        // Animate cards with stagger effect
        const cards = currentSlideElement.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = `cardSlideIn 0.6s ease-out ${index * 0.1}s both`;
            }, 10);
        });

        // Animate stats with counting effect
        const statNumbers = currentSlideElement.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            this.animateCounter(stat);
        });
    }

    animateCounter(element) {
        const target = element.textContent;
        const isNumber = /^\d+/.test(target);
        
        if (isNumber) {
            const finalNumber = parseInt(target.replace(/\D/g, ''));
            const suffix = target.replace(/\d/g, '');
            let current = 0;
            const increment = finalNumber / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalNumber) {
                    element.textContent = finalNumber + suffix;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        }
    }

    animateNeurons() {
        const neurons = document.querySelectorAll('.neuron');
        neurons.forEach((neuron, index) => {
            setTimeout(() => {
                neuron.style.animation = `neuronPulse 2s ease-in-out infinite`;
                neuron.style.animationDelay = `${index * 0.2}s`;
            }, index * 200);
        });
    }

    adjustLayout() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Adjust font sizes for very small screens
        if (width < 480) {
            document.documentElement.style.fontSize = '14px';
        } else if (width < 768) {
            document.documentElement.style.fontSize = '16px';
        } else {
            document.documentElement.style.fontSize = '18px';
        }
    }

    resetPresentation() {
        this.goToSlide(0);
        if (this.isAutoPlay) {
            this.toggleAutoPlay();
        }
    }

    // Utility methods
    addCustomCSS() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes cardSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .light-theme {
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                color: #333;
            }
            
            .light-theme .card {
                background: rgba(255, 255, 255, 0.8);
                color: #333;
            }
            
            .light-theme .highlight {
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize presentation from URL hash
    initFromHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#slide-')) {
            const slideNumber = parseInt(hash.replace('#slide-', '')) - 1;
            if (slideNumber >= 0 && slideNumber < this.totalSlides) {
                this.goToSlide(slideNumber);
            }
        }
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new AIPresentation();
    presentation.addCustomCSS();
    presentation.initFromHash();
    
    // Add keyboard shortcuts help
    const helpBtn = document.createElement('button');
    helpBtn.className = 'nav-btn help-btn';
    helpBtn.textContent = '? Help';
    helpBtn.addEventListener('click', showKeyboardShortcuts);
    
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        navigation.appendChild(helpBtn);
    }
});

function showKeyboardShortcuts() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            padding: 40px;
            border-radius: 15px;
            color: white;
            max-width: 500px;
            text-align: left;
        ">
            <h2 style="margin-bottom: 20px; text-align: center;">Keyboard Shortcuts</h2>
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 10px; font-family: monospace;">
                <strong>→ / Space</strong><span>Next slide</span>
                <strong>← / PageUp</strong><span>Previous slide</span>
                <strong>Home</strong><span>First slide</span>
                <strong>End</strong><span>Last slide</span>
                <strong>F / F11</strong><span>Toggle fullscreen</span>
                <strong>P</strong><span>Toggle auto-play</span>
                <strong>R</strong><span>Reset presentation</span>
                <strong>Esc</strong><span>Exit fullscreen</span>
                <strong>?</strong><span>Show this help</span>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                margin-top: 20px;
                padding: 10px 20px;
                background: #ff6b6b;
                border: none;
                border-radius: 5px;
                color: white;
                cursor: pointer;
                width: 100%;
            ">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Navigation functions for HTML buttons
function nextSlide() {
    if (window.presentation) {
        window.presentation.nextSlide();
    }
}

function previousSlide() {
    if (window.presentation) {
        window.presentation.previousSlide();
    }
}

// Make presentation globally accessible
window.addEventListener('load', () => {
    window.presentation = new AIPresentation();
});
