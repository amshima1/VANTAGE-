// NAVIGATION LOGIC
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

// CART LOGIC
let cart = [];
function addToCart(name, price) {
    cart.push({name, price});
    document.getElementById('cart-count').innerText = cart.length;
    alert(name + " added to cart!");
    
    // Optional: open cart automatically
    document.getElementById('side-cart').classList.add('active');
}

function closeCart() {
    document.getElementById('side-cart').classList.remove('active');
}

// Ensure cart button opens the cart
document.getElementById('cart-icon-btn').addEventListener('click', () => {
    document.getElementById('side-cart').classList.add('active');
});

console.log("Flux UI: Hamburger Left | Logo Center | Footer Added");
