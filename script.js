// NAVIGATION & OVERLAY
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    const overlay = document.getElementById('ui-overlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
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

// CART & CHECKOUT
let cart = [];
let total = 0;
function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-items-list').innerHTML += `
        <div style="display:flex; justify-content:space-between; padding:12px; border-bottom:1px solid #eee">
            <span>${name}</span><strong>$${price}</strong>
        </div>`;
    openCart();
}

function openPayment() {
    if(cart.length === 0) return alert("Cart is empty!");
    closeCart();
    const summary = document.getElementById('order-summary');
    summary.innerHTML = cart.map(i => `<div>• ${i.name} ($${i.price})</div>`).join('');
    document.getElementById('modal-total').innerText = total;
    document.getElementById('payment-modal').style.display = 'flex';
}

function closePayment() { document.getElementById('payment-modal').style.display = 'none'; }

function processPayment() {
    if(document.getElementById('card-num').value.length < 16) return alert("Invalid Card");
    const btn = document.getElementById('pay-button');
    btn.innerText = "Processing...";
    btn.disabled = true;
    setTimeout(() => {
        document.getElementById('payment-success').style.display = 'block';
        setTimeout(() => location.reload(), 2000);
    }, 2000);
}

// RECENT HISTORY
let viewed = [];
function addToRecent(name, img) {
    if(viewed.includes(name)) return;
    viewed.unshift(name);
    const grid = document.getElementById('recent-grid');
    if(viewed.length === 1) grid.innerHTML = '';
    grid.innerHTML = `<div style="text-align:center; min-width:85px">
        <img src="${img}" style="width:65px; height:65px; border-radius:50%; object-fit:cover; border:2px solid #00d4ff">
        <h6 style="font-size:10px">${name}</h6>
    </div>` + grid.innerHTML;
}

// AI BOT
function toggleBot() {
    const bot = document.getElementById('ai-bot');
    bot.style.display = (bot.style.display === 'flex') ? 'none' : 'flex';
}

function askBot() {
    const query = document.getElementById('bot-query').value.toLowerCase();
    const msgs = document.getElementById('bot-messages');
    if(!query) return;
    msgs.innerHTML += `<p><b>You:</b> ${query}</p>`;
    let res = "I'm Flux AI. Ask about 'shipping' or 'sale'.";
    if(query.includes("sale")) res = "20% off all tech right now!";
    if(query.includes("shipping")) res = "Free shipping on orders over $150.";
    setTimeout(() => {
        msgs.innerHTML += `<p style="color:#00d4ff"><b>Flux:</b> ${res}</p>`;
        msgs.scrollTop = msgs.scrollHeight;
    }, 600);
    document.getElementById('bot-query').value = "";
}

function sendFeedback() {
    alert("Thank you! Feedback sent.");
    document.getElementById('user-feedback').value = "";
}
