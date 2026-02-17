// Load configuration and initialize website
document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

function initializeWebsite() {
    // Load config values
    if (typeof CONFIG !== 'undefined') {
        updateBranding();
        generateLinks();
        generateAbout();
        generateCustomLinks();
        updateContact();
    }
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize smooth scroll
    initializeSmoothScroll();
}

// Update branding from config
function updateBranding() {
    if (CONFIG.brandName) {
        document.getElementById('brandName').textContent = CONFIG.brandName;
        document.getElementById('footerBrand').textContent = CONFIG.brandName;
    }
    
    if (CONFIG.tagline) {
        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) heroTitle.textContent = `Welcome to ${CONFIG.brandName}`;
    }
    
    if (CONFIG.description) {
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (heroSubtitle) heroSubtitle.textContent = CONFIG.description;
    }
}

// Generate links from config
function generateLinks() {
    const linksGrid = document.getElementById('linksGrid');
    if (!linksGrid) return;
    
    linksGrid.innerHTML = '';
    
    Object.values(CONFIG.links).forEach(link => {
        if (link.enabled && link.url !== '#') {
            const linkCard = document.createElement('a');
            linkCard.href = link.url;
            linkCard.target = '_blank';
            linkCard.rel = 'noopener noreferrer';
            linkCard.className = 'link-card';
            
            linkCard.innerHTML = `
                <span class="link-card-icon">${link.icon}</span>
                <h3>${link.name}</h3>
                <p>Click to visit our ${link.name} page</p>
                <span class="btn btn-primary">Visit ${link.name}</span>
            `;
            
            linksGrid.appendChild(linkCard);
        }
    });
}

// Generate about section from config
function generateAbout() {
    if (CONFIG.about) {
        const aboutTitle = document.getElementById('aboutTitle');
        const aboutIntro = document.getElementById('aboutIntro');
        const aboutGrid = document.getElementById('aboutGrid');
        
        if (aboutTitle && CONFIG.about.title) {
            aboutTitle.textContent = CONFIG.about.title;
        }
        
        // Create personal intro section
        if (aboutIntro && CONFIG.about.description) {
            aboutIntro.innerHTML = `<p>${CONFIG.about.description}</p>`;
        }
        
        if (aboutGrid && CONFIG.about.features) {
            aboutGrid.innerHTML = '';
            
            CONFIG.about.features.forEach(feature => {
                const card = document.createElement('div');
                card.className = 'about-card';
                
                card.innerHTML = `
                    <div class="card-icon">${feature.icon}</div>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                `;
                
                aboutGrid.appendChild(card);
            });
        }
    }
}

// Generate custom links from config
function generateCustomLinks() {
    const customLinksGrid = document.getElementById('customLinksGrid');
    if (!customLinksGrid || !CONFIG.customLinks) return;
    
    customLinksGrid.innerHTML = '';
    
    CONFIG.customLinks.forEach(link => {
        if (link.url && link.url !== '#') {
            const linkCard = document.createElement('a');
            linkCard.href = link.url;
            linkCard.target = '_blank';
            linkCard.rel = 'noopener noreferrer';
            linkCard.className = 'link-card';
            
            linkCard.innerHTML = `
                <span class="link-card-icon">${link.icon || '🔗'}</span>
                <h3>${link.name}</h3>
                <p>${link.description || 'Click to visit'}</p>
                <span class="btn btn-primary">Visit</span>
            `;
            
            customLinksGrid.appendChild(linkCard);
        }
    });
}

// Update contact section from config
function updateContact() {
    if (CONFIG.contact) {
        const contactTitle = document.getElementById('contactTitle');
        const contactDescription = document.getElementById('contactDescription');
        const contactButton = document.getElementById('contactButton');
        
        if (contactTitle && CONFIG.contact.title) {
            contactTitle.textContent = CONFIG.contact.title;
        }
        
        if (contactDescription && CONFIG.contact.description) {
            contactDescription.textContent = CONFIG.contact.description;
        }
        
        if (contactButton && CONFIG.contact.primaryAction) {
            contactButton.textContent = CONFIG.contact.primaryAction.text;
            contactButton.href = CONFIG.contact.primaryAction.url;
        }
    }
}

// Mobile Navigation Toggle
function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.6)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.4)';
        }
        
        lastScroll = currentScroll;
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.link-card, .about-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});
