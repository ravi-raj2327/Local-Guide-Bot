// Sample data for guides and tours
const guidesData = [
    {
        id: 1,
        name: "Sarah Johnson",
        specialty: "Historical Tours",
        location: "New York",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
        id: 2,
        name: "Michael Chen",
        specialty: "Food Tours",
        location: "San Francisco",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        specialty: "Art Walks",
        location: "Chicago",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4"
    },
    {
        id: 4,
        name: "David Kim",
        specialty: "Architecture Tours",
        location: "Boston",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
];

const toursData = [
    {
        id: 1,
        title: "Downtown Historic Walk",
        location: "New York",
        description: "Explore the rich history of downtown New York with our expert guides.",
        price: "$45",
        duration: "3 hours",
        groupSize: "12 people max",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee"
    },
    {
        id: 2,
        title: "Chinatown Food Adventure",
        location: "San Francisco",
        description: "Taste your way through San Francisco's famous Chinatown district.",
        price: "$65",
        duration: "2.5 hours",
        groupSize: "8 people max",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
        id: 3,
        title: "Modern Architecture Tour",
        location: "Chicago",
        description: "Discover Chicago's iconic architecture with a local expert.",
        price: "$55",
        duration: "4 hours",
        groupSize: "15 people max",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    }
];

// DOM Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const contactForm = document.getElementById('contact-form');
const chatbotToggle = document.getElementById('chatbot-toggle');
const guidesGrid = document.querySelector('.guides-grid');
const toursGrid = document.querySelector('.tours-grid');

// Populate guides
function populateGuides() {
    guidesGrid.innerHTML = '';
    guidesData.forEach(guide => {
        const guideCard = document.createElement('div');
        guideCard.className = 'guide-card';
        guideCard.innerHTML = `
            <div class="guide-image">
                <img src="${guide.image}" alt="${guide.name}">
            </div>
            <div class="guide-info">
                <h3>${guide.name}</h3>
                <p>${guide.specialty} • ${guide.location}</p>
                <div class="guide-rating">
                    ${'★'.repeat(Math.floor(guide.rating))}${'☆'.repeat(5 - Math.floor(guide.rating))} ${guide.rating}
                </div>
                <a href="#" class="guide-button">View Profile</a>
            </div>
        `;
        guidesGrid.appendChild(guideCard);
    });
}

// Populate tours
function populateTours() {
    toursGrid.innerHTML = '';
    toursData.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <div class="tour-image">
                <img src="${tour.image}" alt="${tour.title}">
                <span class="tour-price">${tour.price}</span>
            </div>
            <div class="tour-info">
                <h3>${tour.title}</h3>
                <p class="tour-location"><i class="fas fa-map-marker-alt"></i> ${tour.location}</p>
                <p class="tour-description">${tour.description}</p>
                <div class="tour-details">
                    <span class="tour-duration"><i class="fas fa-clock"></i> ${tour.duration}</span>
                    <span class="tour-group"><i class="fas fa-users"></i> ${tour.groupSize}</span>
                </div>
                <a href="#" class="tour-button">Book Now</a>
            </div>
        `;
        toursGrid.appendChild(tourCard);
    });
}

// Modal functions
function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Chatbot functions
function toggleChatbot() {
    const iframe = document.getElementById('chatbot-iframe');
    if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.style.display = 'block';
        // Reset the iframe src to ensure it loads when toggled
        iframe.src = iframe.src;
    } else {
        iframe.style.display = 'none';
    }
}

// Event Listeners
loginBtn.addEventListener('click', () => openModal(loginModal));
signupBtn.addEventListener('click', () => openModal(signupModal));

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
    });
});

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(loginModal);
    openModal(signupModal);
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(signupModal);
    openModal(loginModal);
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Here you would normally validate and send to server
    console.log('Login attempt with:', { email, password });
    
    // For demo, just close the modal
    closeModal(loginModal);
    alert('Login functionality would connect to your backend in a real application.');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    
    // Here you would normally validate and send to server
    console.log('Signup attempt with:', { name, email, password });
    
    // For demo, just close the modal
    closeModal(signupModal);
    alert('Signup functionality would connect to your backend in a real application.');
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send to server
    console.log('Contact form submitted:', { name, email, message });
    
    // For demo, just show a message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

chatbotToggle.addEventListener('click', toggleChatbot);

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModal(loginModal);
    }
    if (e.target === signupModal) {
        closeModal(signupModal);
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateGuides();
    populateTours();
    
    // Smooth scrolling for anchor links
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
            }
        });
    });
});