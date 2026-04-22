document.getElementById('menu-trigger').onclick = () => {
    document.getElementById('mobile-menu').classList.add('active');
};

document.getElementById('close-menu').onclick = () => {
    document.getElementById('mobile-menu').classList.remove('active');
};
