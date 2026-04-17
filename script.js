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
    if(cart.length === 0) return alert("Empty Cart");
    closeCart();
    document.getElementById('order-summary').innerHTML = cart.map(i => `<div>• ${i.name} ($${i.price})</div>`).join('');
    document.getElementById('modal-total').innerText = total;
    document.getElementById('payment-modal').style.display = 'flex';
}

function processPayment() {
    const btn = document.getElementById('pay-button');
    btn.innerText = "Processing...";
    setTimeout(() => {
        document.getElementById('payment-success').style.display = 'block';
        setTimeout(() => location.reload(), 2000);
    }, 2000);
}

function closePayment() { document.getElementById('payment-modal').style.display = 'none'; }

let viewed = [];
function addToRecent(name, img) {
    if(viewed.includes(name)) return;
    viewed.unshift(name);
    const grid = document.getElementById('recent-grid');
    if(viewed.length === 1) grid.innerHTML = '';
    grid.innerHTML = `<div style="text-align:center; min-width:80px">
        <img src="${img}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid #00d4ff">
        <h6 style="font-size:10px">${name}</h6>
    </div>` + grid.innerHTML;
}
