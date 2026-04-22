const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');
const openBtn = document.getElementById('menu-trigger');
const closeBtn = document.getElementById('close-menu');

openBtn.onclick = () => {
    menu.classList.add('active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const hideMenu = () => {
    menu.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
};

closeBtn.onclick = hideMenu;
overlay.onclick = hideMenu;
