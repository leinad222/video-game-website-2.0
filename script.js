// Initialize Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu');
const navCollapse = document.querySelector('.nav-collapse');

if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navCollapse.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-collapse a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navCollapse.classList.remove('active');
    });
});

// Search Functionality
const searchInput = document.querySelector('.search input');
const searchIcon = document.querySelector('.search ion-icon');

if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            // Add search functionality here
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Searching for:', query);
                // Add search functionality here
            }
        }
    });
}

// Buy Button Click Handler
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const gameTitle = btn.closest('.banner').querySelector('h1')?.textContent || 'Game';
        const price = btn.closest('.right')?.querySelector('.price')?.textContent || 'Price not available';
        alert(`Added to cart: ${gameTitle} - ${price}`);
    });
});

// Add to Cart Button (Plus Icon)
const addToCartIcons = document.querySelectorAll('.right ion-icon[name="add-outline"]');
addToCartIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const gameTitle = icon.closest('.banner').querySelector('h1')?.textContent || 'Game';
        console.log(`${gameTitle} added to wishlist`);
        icon.style.color = '#FFD700';
        setTimeout(() => {
            icon.style.color = '';
        }, 500);
    });
});

// Responsive Layout Handler
function handleResponsive() {
    const width = window.innerWidth;
    const header = document.querySelector('header');

    if (width <= 768) {
        header.style.flexWrap = 'wrap';
    } else {
        header.style.flexWrap = 'nowrap';
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Active Link Highlighting
const currentLocation = location.pathname;
const navItems = document.querySelectorAll('.nav a, .nav-collapse a');

navItems.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    }
});

console.log('Gaming Website Initialized');