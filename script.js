const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');
const overlay = document.querySelector('#overlay');

// Function to open/close menu
function toggleMenu() {
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Event Listeners
menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu if a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});
