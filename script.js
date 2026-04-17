// Data Generation for 20 Items Each
const techImages = [
    'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500',
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'
];

const apparelImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500', 'https://images.unsplash.com/photo-1539109132314-34759616b308?w=500',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'
];

function populateProducts() {
    const techGrid = document.getElementById('tech-grid');
    const apparelGrid = document.getElementById('apparel-grid');
    const recGrid = document.getElementById('recommendation-grid');

    for (let i = 1; i <= 20; i++) {
        // Tech
        techGrid.innerHTML += createProductCard(`Tech Item ${i}`, 199 + (i * 10), techImages[i % 6]);
        // Apparel
        apparelGrid.innerHTML += createProductCard(`Urban Style ${i}`, 25 + (i * 2), apparelImages[i % 6]);
    }
    
    // 4 Recommendations
    for (let i = 1; i <= 4; i++) {
        recGrid.innerHTML += createProductCard(`Match ${i}`, 99, techImages[(i+2)%6]);
    }
}

function createProductCard(name, price, img) {
    return `
        <div class="product-card" onclick="addToRecent('${name}', '${img}')">
            <img src="${img}" class="product-img" loading="lazy">
            <div class="product-info">
                <h3>${name}</h3>
                <p class="price">$${price}</p>
                <button class="add-btn" onclick="event.stopPropagation(); addToCart('${name}', ${price})">Add to Cart</button>
            </div>
        </div>
    `;
}

// UI State Logic
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

// Cart Management
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCartUI();
    openCart();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-items-list').innerHTML = cart.map((i, idx) => `
        <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #eee">
            <span>${i.name}</span><strong>$${i.price}</strong>
        </div>
    `).join('');
}

// Payment Flow
function openPayment() {
    if(!cart.length) return alert("Repository empty.");
    closeCart();
    document.getElementById('order-summary').innerHTML = cart.map(i => `<div>• ${i.name} ($${i.price})</div>`).join('');
    document.getElementById('modal-total').innerText = total;
    document.getElementById('payment-modal').style.display = 'flex';
}

function closePayment() { document.getElementById('payment-modal').style.display = 'none'; }

function processPayment() {
    if(document.getElementById('card-num').value.length < 16) return alert("Invalid Credentials.");
    const btn = document.getElementById('pay-button');
    btn.innerText = "Processing Push...";
    setTimeout(() => {
        document.getElementById('payment-success').style.display = 'block';
        setTimeout(() => location.reload(), 2000);
    }, 2000);
}

// History Tracking
let viewed = [];
function addToRecent(name, img) {
    if(viewed.some(v => v.name === name)) return;
    viewed.unshift({name, img});
    const grid = document.getElementById('recent-grid');
    if(viewed.length === 1) grid.innerHTML = '';
    grid.innerHTML = viewed.slice(0, 5).map(v => `
        <div style="text-align:center; min-width:80px">
            <img src="${v.img}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid #00d4ff">
            <h6 style="font-size:10px; margin-top:5px">${v.name}</h6>
        </div>
    `).join('') + grid.innerHTML;
}

// AI Bot
function toggleBot() {
    const bot = document.getElementById('ai-bot');
    bot.style.display = (bot.style.display === 'flex') ? 'none' : 'flex';
}

function askBot() {
    const q = document.getElementById('bot-query').value;
    const m = document.getElementById('bot-messages');
    m.innerHTML += `<p><b>User:</b> ${q}</p>`;
    setTimeout(() => {
        m.innerHTML += `<p style="color:#00d4ff"><b>Flux:</b> Documentation for "${q}" not found. Try "Sale".</p>`;
        m.scrollTop = m.scrollHeight;
    }, 500);
    document.getElementById('bot-query').value = '';
}

function sendFeedback() { alert("Feedback pushed to main branch."); }

// Init
window.onload = populateProducts;
