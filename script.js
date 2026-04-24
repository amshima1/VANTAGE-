const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');
const overlay = document.querySelector('#overlay');

// Function to toggle menu
const toggleMenu = () => {
    navList.classList.toggle('active');
    menuBtn.classList.toggle('is-active');
    overlay.classList.toggle('active');
};

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu); // Close if user clicks outside

// Close menu if a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});
