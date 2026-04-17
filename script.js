// --- NAVIGATION & MENU ---
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}

// --- HOME SLIDER ---
let slideIdx = 0;
const slides = document.querySelectorAll('.slide');
function changeSlide(n) {
    slides[slideIdx].classList.remove('active');
    slideIdx = (slideIdx + n + slides.length) % slides.length;
    slides[slideIdx].classList.add('active');
}
setInterval(() => changeSlide(1), 5000);

// --- CORE CART LOGIC ---
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total;
    document.getElementById('modal-total').innerText = total;
    
    const list = document.getElementById('cart-items-list');
    list.innerHTML += `
        <div style="display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid #eee">
            <span>${name}</span><strong>$${price}</strong>
        </div>`;
    
    document.getElementById('side-cart').classList.add('active');
}

function closeCart() {
    document.getElementById('side-cart').classList.remove('active');
}

document.getElementById('cart-icon-btn').onclick = () => {
    document.getElementById('side-cart').classList.add('active');
};

// --- CHATBOT (AI Assistant) ---
function toggleBot() {
    const bot = document.getElementById('ai-bot');
    bot.style.display = (bot.style.display === 'flex') ? 'none' : 'flex';
}

function askBot() {
    const inputField = document.getElementById('bot-query');
    const query = inputField.value.toLowerCase();
    const msgs = document.getElementById('bot-messages');
    
    if(!query) return;
    
    msgs.innerHTML += `<div style="margin-bottom:10px"><b>You:</b> ${inputField.value}</div>`;
    let response = "I'm Flux AI. Ask about 'sale', 'shipping', or 'help'.";
    
    if(query.includes("sale") || query.includes("discount")) response = "Current promotion: 20% off all tech products!";
    if(query.includes("shipping")) response = "Standard shipping takes 3-5 days. Free over $150!";
    if(query.includes("help") || query.includes("contact")) response = "You can reach us at support@flux.com.";
    
    setTimeout(() => {
        msgs.innerHTML += `<div style="color:#00d4ff; margin-bottom:10px"><b>Flux:</b> ${response}</div>`;
        msgs.scrollTop = msgs.scrollHeight;
    }, 600);
    
    inputField.value = "";
}

// --- RECENTLY VIEWED (History Tracking) ---
let viewed = [];
function addToRecent(name, img) {
    if(viewed.includes(name)) return;
    viewed.unshift(name);
    
    const grid = document.getElementById('recent-grid');
    if(viewed.length === 1) grid.innerHTML = '';
    
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
        <div style="text-align:center; min-width:90px; cursor:pointer">
            <img src="${img}" style="width:70px; height:70px; border-radius:50%; object-fit:cover; border:2px solid #00d4ff; margin-bottom:5px">
            <h6 style="font-size:11px; color:#555">${name}</h6>
        </div>`;
    grid.prepend(itemDiv);
}

// --- CHECKOUT & PAYMENT ---
function openPayment() {
    if(cart.length === 0) return alert("Please add items to your cart first.");
    closeCart();
    document.getElementById('payment-modal').style.display = 'flex';
}

function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
}

function processPayment() {
    const card = document.getElementById('card-num').value;
    if(card.length < 16) return alert("Please enter a valid 16-digit card number.");
    
    const payBtn = document.getElementById('pay-button');
    payBtn.innerText = "Processing Transaction...";
    payBtn.disabled = true;
    
    setTimeout(() => {
        document.getElementById('payment-success').style.display = 'block';
        setTimeout(() => location.reload(), 2500);
    }, 2000);
}

// --- FEEDBACK SYSTEM ---
function sendFeedback() {
    const msg = document.getElementById('user-feedback').value;
    if(!msg) return alert("Please write a message first.");
    alert("Thank you! Your feedback has been sent to our quality team.");
    document.getElementById('user-feedback').value = "";
}
