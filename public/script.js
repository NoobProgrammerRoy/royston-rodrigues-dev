const navButton = document.getElementById('nav-button');
const navLinks = document.getElementById('nav-links');

// When page loads for the first time.
window.addEventListener('load', () => {
    if (window.innerWidth < 768)
        navLinks.classList.add('hidden');
});

// When page is resized
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768)
        navLinks.classList.remove('hidden');
});

// Toggle Navbar
navButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});