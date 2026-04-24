// Mobile Menu Toggle
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-list');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animation for hamburger to X (optional)
    menu.classList.toggle('is-active'); 
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navLinks.classList.remove('active');
}));

// Shopping Cart Feedback
let count = 0;
const cartCount = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
        
        // Visual feedback
        button.style.background = '#2ed573';
        button.style.color = 'white';
        button.innerText = 'Added!';
        
        setTimeout(() => {
            button.style.background = 'none';
            button.style.color = 'black';
            button.innerText = 'Add to Cart';
        }, 1000);
    });
});
