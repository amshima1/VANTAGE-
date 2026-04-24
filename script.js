const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');
const overlay = document.querySelector('#overlay');

function toggleMenu() {
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
