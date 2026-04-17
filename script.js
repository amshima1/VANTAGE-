// IMAGE ASSETS
const electronicImages = [
    'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500'
];
const clothesImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
];

// DATA INITIALIZATION
function populateStore() {
    const tech = document.getElementById('tech-grid');
    const apparel = document.getElementById('apparel-grid');
    const recs = document.getElementById('recommendation-grid');

    for (let i = 1; i <= 20; i++) {
        const name = `Module X-${i}`;
        const price = 199 + (i*10);
        const img = electronicImages[i % 4];
        tech.innerHTML += `<div class="product-card" onclick="viewProduct('${name}', ${price}, '${img}')">
            <img src="${img}" style="width:100%;height:150px;object-fit:cover;">
            <div style="padding:10px;"><h4>${name}</h4><p>$${price}</p></div>
        </div>`;

        const clName = `Asset Style-${i}`;
        const clPrice = 45 + (i*2);
        const clImg = clothesImages[i % 2];
        apparel.innerHTML += `<div class="product-card" onclick="viewProduct('${clName}', ${clPrice}, '${clImg}')">
            <img src="${clImg}" style="width:100%;height:150px;object-fit:cover;">
            <div style="padding:10px;"><h4>${clName}</h4><p>$${clPrice}</p></div>
        </div>`;
    }

    for (let i = 1; i <= 5; i++) {
        recs.innerHTML += `<div class="side-card-item">
            <img src="${electronicImages[i % 4]}">
            <p style="font-size:12px">Module ${i}</p>
        </div>`;
    }
}

// NAVIGATION BETWEEN HOME & PRODUCT PAGE
function viewProduct(name, price, img) {
    document.getElementById('home-page').style.display = 'none';
    const pp = document.getElementById('product-page');
    pp.style.display = 'block';
    
    document.getElementById('detail-title').innerText = name;
    document.getElementById('detail-price').innerText = `$${price}`;
    document.getElementById('detail-img').src = img;
    
    // Reset Add Button
    const btn = document.getElementById('detail-add-btn');
    btn.onclick = () => addToCart(name, price);
    
    addToRecent(name, img);
    window.scrollTo(0,0);
}

function showHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('product-page').style.display = 'none';
    window.scrollTo(0,0);
}

// CART & UTILS
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
    grid.innerHTML = viewed.slice(0, 10).map(v => `
        <div class="side-card-item">
            <img src="${v.img}">
            <p style="font-size:12px">${v.name}</p>
        </div>
    `).join('');
}

// UI HELPERS
function toggleMenu() { document.getElementById('nav-links').classList.toggle('active'); document.getElementById('ui-overlay').classList.toggle('active'); }
function openCart() { document.getElementById('side-cart').classList.add('active'); document.getElementById('ui-overlay').classList.add('active'); }
function closeCart() { document.getElementById('side-cart').classList.remove('active'); document.getElementById('ui-overlay').classList.remove('active'); }
function closeAllPanels() { document.getElementById('nav-links').classList.remove('active'); closeCart(); }
function toggleBot() { const b = document.getElementById('ai-bot'); b.style.display = (b.style.display === 'flex') ? 'none' : 'flex'; }

window.onload = populateStore;
