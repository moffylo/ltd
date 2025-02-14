const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Get the header element
const header = document.querySelector('header');

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    // Check if the scroll position is greater than 100px
    if (window.scrollY > 100) {
        // If so, change the background color of the header
        header.style.backgroundColor = '#333'; // Change to your preferred color
    } else {
        // If not, revert to the original background color
        header.style.backgroundColor = 'transparent'; // Change to your original color
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal window functionality
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Dropdown menu functionality
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-toggle')) {
        dropdown.classList.remove('show');
    }
});

// Image slider controls
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('#slider figure img');
    slideIndex = (n + slides.length) % slides.length; // Handle wrapping around

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

showSlide(slideIndex);


// Toggle class on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

