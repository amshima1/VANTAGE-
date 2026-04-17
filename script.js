const electronicImages = [
    'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400',
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400'
];

const clothesImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', 'https://images.unsplash.com/photo-1539109132314-34759616b308?w=400'
];

function populateStore() {
    const tech = document.getElementById('tech-grid');
    const apparel = document.getElementById('apparel-grid');
    const recs = document.getElementById('recommendation-grid');

    for (let i = 1; i <= 20; i++) {
        tech.innerHTML += createCard(`Hardware Module ${i}`, 199 + (i*10), electronicImages[i % 5]);
        apparel.innerHTML += createCard(`Aesthetic Asset ${i}`, 40 + (i*2), clothesImages[i % 4]);
    }
    
    // Vertical System Picks
    for (let i = 1; i <= 6; i++) {
        recs.innerHTML += `
            <div class="side-card-item">
                <img src="${electronicImages[i % 5]}">
                <div>
                    <h5 style="font-size:12px">Suggested v.${i}</h5>
                    <button class="add-btn" style="padding:2px 8px; font-size:10px" onclick="addToCart('Sugg-${i}', 99)">+ Add</button>
                </div>
            </div>
        `;
    }
}

function createCard(name, price, img) {
    return `
        <div class="product-card" onclick="addToRecent('${name}', '${img}')">
            <img src="${img}" class="product-img" loading="lazy">
            <div class="product-info">
                <h4>${name}</h4>
                <p class="price" style="color:#00d4ff; font-weight:700">$${price}</p>
                <button class="add-btn" onclick="event.stopPropagation(); addToCart('${name}', ${price})">Stage Item</button>
            </div>
        </div>
    `;
}

// UI HANDLERS
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

// CART & HISTORY
let cart = [];
let total = 0;
let viewed = [];

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

function addToRecent(name, img) {
    if(viewed.some(v => v.name === name)) return;
    viewed.unshift({name, img});
    const grid = document.getElementById('recent-grid');
    if(viewed.length === 1) grid.innerHTML = '';
    
    grid.innerHTML = viewed.slice(0, 8).map(v => `
        <div class="side-card-item">
            <img src="${v.img}">
            <p style="font-size:12px">${v.name}</p>
        </div>
    `).join('');
}

// PAYMENT & BOT
function openPayment() {
    if(!cart.length) return alert("Select items first.");
    closeCart();
    document.getElementById('modal-total').innerText = total;
    document.getElementById('payment-modal').style.display = 'flex';
}
function closePayment() { document.getElementById('payment-modal').style.display = 'none'; }
function processPayment() {
    alert("Authorization Successful.");
    location.reload();
}

function toggleBot() {
    const b = document.getElementById('ai-bot');
    b.style.display = (b.style.display === 'flex') ? 'none' : 'flex';
}
function askBot() {
    const m = document.getElementById('bot-messages');
    m.innerHTML += `<p><b>User:</b> ${document.getElementById('bot-query').value}</p>`;
    setTimeout(() => { m.innerHTML += `<p style="color:#00d4ff"><b>Flux:</b> Query acknowledged. System is processing.</p>`; }, 600);
    document.getElementById('bot-query').value = '';
}

window.onload = populateStore;
