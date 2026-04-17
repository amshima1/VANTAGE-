// ELEMENTS
const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');
const sideCart = document.getElementById('side-cart');
const paymentModal = document.getElementById('payment-modal');

// HAMBURGER TOGGLE
hamburger.onclick = () => {
    navLinks.classList.toggle('active');
};

// Close menu when a link is clicked
function toggleMenu() {
    navLinks.classList.remove('active');
}

// CART LOGIC
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
    sideCart.classList.add('active');
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-items-list').innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee">
            <span>${item.name}</span><strong>$${item.price}</strong>
        </div>
    `).join('');
}

// MODAL CONTROLS
document.getElementById('cart-icon-btn').onclick = () => {
    sideCart.classList.add('active');
    toggleMenu(); // Ensure nav closes when cart opens
};

document.getElementById('close-cart').onclick = () => sideCart.classList.remove('active');

function openPayment() {
    if (cart.length === 0) return alert("Cart is empty!");
    sideCart.classList.remove('active');
    paymentModal.style.display = 'flex';
}

function closePayment() { paymentModal.style.display = 'none'; }

function processPayment() {
    const btn = document.getElementById('pay-button');
    btn.innerText = "Processing...";
    setTimeout(() => {
        document.getElementById('payment-success').style.display = 'block';
        setTimeout(() => location.reload(), 2000);
    }, 2000);
}
