function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
    document.getElementById('ui-overlay').classList.toggle('active');
}

function openCart() {
    document.getElementById('side-cart').classList.add('active');
    document.getElementById('ui-overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('side-cart').classList.remove('active');
    document.getElementById('ui-overlay').classList.remove('active');
}

function closeAllPanels() {
    document.getElementById('nav-links').classList.remove('active');
    closeCart();
}

let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-items-list').innerHTML += `
        <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #eee">
            <span>${name}</span><strong>$${price}</strong>
        </div>`;
    openCart();
}

function openPayment() {
    if(cart.length === 0) return alert("Your cart is empty!");
    closeCart();
    document.getElementById('order-summary').innerHTML = cart.map(i => `<div>• ${i.name} ($${i.price})</div>`).join('');
    document.getElementById('modal-total').innerText = total;
    document.getElementById('payment-modal').style.display = 'flex';
}

function processPayment() {
    document.getElementById('pay-button').innerText = "Processing...";
    setTimeout(() => {
        alert("Payment Successful!");
        location.reload();
    }, 2000);
}

function closePayment() { document.getElementById('payment-modal').style.display = 'none'; }
