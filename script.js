// MENU & SCROLL LOCK
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
}

// SLIDER
let slideIdx = 0;
const slides = document.querySelectorAll('.slide');
function changeSlide(n) {
    slides[slideIdx].classList.remove('active');
    slideIdx = (slideIdx + n + slides.length) % slides.length;
    slides[slideIdx].classList.add('active');
}
setInterval(() => changeSlide(1), 5000);

// CART LOGIC
let cart = [];
let total = 0;
function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-items-list').innerHTML += `
        <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee">
            <span>${name}</span><strong>$${price}</strong>
        </div>`;
    openCart();
}
function openCart() { document.getElementById('side-cart').classList.add('active'); }
function closeCart() { document.getElementById('side-cart').classList.remove('active'); }

// CHATBOT
function toggleBot() {
    const bot = document.getElementById('ai-bot');
    bot.style.display = (bot.style.display === 'flex') ? 'none' : 'flex';
}
function askBot() {
    const query = document.getElementById('bot-query').value.toLowerCase();
    const msgs = document.getElementById('bot-messages');
    if(!query) return;
    msgs.innerHTML += `<p><b>You:</b> ${query}</p>`;
    let res = "I'm Flux AI. Ask about 'sale' or 'shipping'.";
    if(query.includes("sale")) res = "20% off all tech right now!";
    if(query.includes("shipping")) res = "Free shipping on orders over $150.";
    setTimeout(() => {
        msgs.innerHTML += `<p style="color:#00d4ff"><b>Bot:</b> ${res}</p>`;
        msgs.scrollTop = msgs.scrollHeight;
    }, 600);
    document.getElementById('bot-query').value = "";
}

// RECENTLY VIEWED
let viewed = [];
function addToRecent(name, img) {
    if(viewed.includes(name)) return;
    viewed.unshift(name);
    const grid = document.getElementById('recent-grid');
    if(viewed.length === 1) grid.innerHTML = '';
    const item = document.createElement('div');
    item.innerHTML = `<div style="text-align:center; min-width:80px">
        <img src="${img}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid #00d4ff">
        <h6 style="font-size:10px">${name}</h6>
    </div>`;
    grid.prepend(item);
}

// PAYMENT
function openPayment() { closeCart(); document.getElementById('payment-modal').style.display = 'flex'; }
function closePayment() { document.getElementById('payment-modal').style.display = 'none'; }
function processPayment() {
    const btn = document.getElementById('pay-button');
    btn.innerText = "Processing...";
    setTimeout(() => {
        document.getElementById('payment-success').style.display = 'block';
        setTimeout(() => location.reload(), 2000);
    }, 2000);
}

// FEEDBACK
function sendFeedback() {
    alert("Feedback received! Thank you.");
    document.getElementById('user-feedback').value = "";
}
