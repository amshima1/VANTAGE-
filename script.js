// Sidebar Navigation Logic
const menuToggle = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

// Open the menu
menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

// Close the menu using the 'X' button
closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

// Simple Cart Counter Logic
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');

document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartDisplay.innerText = cartCount;
        // Optional feedback
        button.innerText = "ADDED";
        setTimeout(() => button.innerText = "ADD TO CART", 1000);
    });
});
