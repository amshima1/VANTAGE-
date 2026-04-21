// Assets Configuration
const electronicImages = [
    'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500', 
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
];

const apparelImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500'
];

// Initialize System
function populateDashboard() {
    const techGrid = document.getElementById('tech-grid');
    const apparelGrid = document.getElementById('apparel-grid');
    const recGrid = document.getElementById('recommendation-grid');

    // Populate Tech Assets (20 Items)
    for (let i = 1; i <= 20; i++) {
        const name = `Hardware X-${i}`;
        const price = 150 + (i * 15);
        const img = electronicImages[i % 4];
        techGrid.innerHTML += createProductCard(name, price, img);
    }

    // Populate Apparel Assets (20 Items)
    for (let i = 1; i <= 20; i++) {
        const name = `Apparel v.${i}`;
        const price = 35 + (i * 4);
        const img = apparelImages[i % 3];
        apparelGrid.innerHTML += createProductCard(name, price, img);
    }

    // Static Picks for Vertical Sidebar
    for (let i = 1; i <= 6; i++) {
        recGrid.innerHTML += `
            <div class="side-item">
                <img src="${electronicImages[i % 4]}">
                <div>
                    <p style="font-size:12px; font-weight:600">Pick #${i}</p>
                    <p style="font-size:10px; color:#00d4ff">$99.00</p>
                </div>
            </div>`;
    }
}

function createProductCard(name, price, img) {
    return `
        <div class="product-card" onclick="viewProduct('${name}', ${price}, '${img}')">
            <div class="img-container">
                <img src="${img}" loading="lazy" alt="${name}">
            </div>
            <div class="product-info">
                <h4>${name}</h4>
                <p class="price">$${price}</p>
            </div>
        </div>
    `;
}

// Navigation Logic
function viewProduct(name, price, img) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('product-page').style.display = 'block';
    
    document.getElementById('detail-title').innerText = name;
    document.getElementById('detail-price').innerText = `$${price}`;
    document.getElementById('detail-img').src = img;
    
    document.getElementById('detail-add-btn').onclick = () => addToCart(name, price);
    
    addToRecent(name, img);
    window.scrollTo(0,0);
}

function showHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('product-page').style.display = 'none';
    window.scrollTo(0,0);
}

// Cart & History Management
let cart = [];
let total = 0;
let recentViews = [];

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCartUI();
    openCart();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-items-list').innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; padding:12px; border-bottom:1px solid #f0f0f0; font-size:13px">
            <span>${item.name}</span><strong>$${item.price}</strong>
        </div>
    `).join('');
}

function addToRecent(name, img) {
    if(recentViews.some(v => v.name === name)) return;
    recentViews.unshift({name, img});
    const grid = document.getElementById('recent-grid');
    grid.innerHTML = recentViews.slice(0, 10).map(v => `
        <div class="side-item">
            <img src="${v.img}">
            <p style="font-size:12px">${v.name}</p>
        </div>
    `).join('');
}

// UI Toggles
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
function toggleBot() { 
    const b = document.getElementById('ai-bot'); 
    b.style.display = (b.style.display === 'flex') ? 'none' : 'flex'; 
}

window.onload = populateDashboard;
