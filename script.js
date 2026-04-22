// 1. Data with Color Variants
const products = [
    { 
        id: 1, 
        name: "Aero Shell Parka", 
        price: 320, 
        colors: [
            { name: "Obsidian", code: "#1a1a1a", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800" },
            { name: "Ghost", code: "#e0e0e0", img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800" }
        ]
    },
    { 
        id: 2, 
        name: "Void Knit", 
        price: 150, 
        colors: [
            { name: "Black", code: "#000", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800" },
            { name: "Sand", code: "#d2b48c", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800" }
        ]
    }
];

let cart = JSON.parse(localStorage.getItem('FLUX_CART')) || [];

// --- Initialize ---
function init() {
    renderShop();
    updateCartUI();
}

function renderShop() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card" onclick="openDetail(${p.id})">
            <img src="${p.colors[0].img}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
        </div>
    `).join('');
}

// --- Color Switcher Logic ---
function openDetail(id) {
    const product = products.find(p => p.id === id);
    document.getElementById('shop-section').classList.add('hidden');
    const detail = document.getElementById('detail-section');
    detail.classList.remove('hidden');

    detail.innerHTML = `
        <div id="detail-content" style="display:grid; grid-template-columns:1fr 1fr; gap:50px; padding:60px;">
            <div class="detail-img"><img id="main-product-img" src="${product.colors[0].img}" style="width:100%"></div>
            <div class="detail-info">
                <h1>${product.name}</h1>
                <p>$${product.price}</p>
                <div class="swatch-container">
                    ${product.colors.map((c, index) => `
                        <div class="swatch ${index === 0 ? 'active' : ''}" 
                             style="background:${c.code}" 
                             onclick="switchColor(this, '${c.img}')"></div>
                    `).join('')}
                </div>
                <button onclick="addToCart(${product.id})" class="primary-btn">ADD TO BAG</button>
                <button onclick="location.reload()" style="margin-top:20px; background:none; border:none; cursor:pointer; text-decoration:underline;">BACK</button>
            </div>
        </div>
    `;
}

function switchColor(el, imgPath) {
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('main-product-img').src = imgPath;
}

// --- Payment Simulation ---
document.getElementById('checkout-btn').onclick = () => {
    document.getElementById('payment-overlay').classList.remove('hidden');
};

document.getElementById('confirm-payment-btn').onclick = () => {
    const btn = document.getElementById('confirm-payment-btn');
    const status = document.getElementById('payment-status');
    btn.innerText = "PROCESSING...";
    
    setTimeout(() => {
        btn.style.background = "#28a745";
        btn.innerText = "SUCCESS ✓";
        status.innerText = "Order #FLX-9902 confirmed. Redirecting...";
        localStorage.removeItem('FLUX_CART');
        setTimeout(() => location.reload(), 3000);
    }, 2000);
};

// --- AI Chatbot Automation ---
const chatResponses = {
    "shipping": "FLUX offers express shipping worldwide. 3-5 business days.",
    "size": "Our items are 'True to Size'. If you prefer an oversized fit, size up.",
    "hello": "Hello! I am the FLUX assistant. How can I help?",
    "payment": "We accept all major credit cards and digital wallets."
};

document.getElementById('send-chat').onclick = () => {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    if(!input.value) return;

    // User Message
    body.innerHTML += `<div class="msg user">${input.value}</div>`;
    
    // AI Response
    const query = input.value.toLowerCase();
    let reply = "I'm sorry, I don't understand that yet. Try 'shipping' or 'size'.";
    
    for(let key in chatResponses) {
        if(query.includes(key)) reply = chatResponses[key];
    }

    setTimeout(() => {
        body.innerHTML += `<div class="msg bot">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 600);

    input.value = "";
};

document.getElementById('chat-trigger').onclick = () => {
    document.getElementById('chat-widget').classList.toggle('chat-closed');
};

// --- Cart Helpers ---
function addToCart(id) {
    const p = products.find(x => x.id === id);
    cart.push(p);
    localStorage.setItem('FLUX_CART', JSON.stringify(cart));
    updateCartUI();
    document.getElementById('cart-sidebar').classList.add('active');
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-subtotal').innerText = `$${total.toFixed(2)}`;
    document.getElementById('cart-items-container').innerHTML = cart.map(i => `
        <div style="margin-bottom:10px; font-size:12px;">${i.name} - $${i.price}</div>
    `).join('');
}

document.getElementById('cart-icon-trigger').onclick = () => document.getElementById('cart-sidebar').classList.add('active');
document.getElementById('close-cart').onclick = () => document.getElementById('cart-sidebar').classList.remove('active');

init();
