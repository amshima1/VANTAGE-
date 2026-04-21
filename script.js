const electronicImages = [
    'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600'
];

let recentViews = [];

function initStore() {
    const tech = document.getElementById('tech-grid');
    const apparel = document.getElementById('apparel-grid');
    const suggestions = document.getElementById('suggestions-grid');

    // Prevent Duplication
    tech.innerHTML = ''; 
    apparel.innerHTML = ''; 
    suggestions.innerHTML = '';

    // Main Grids
    for (let i = 1; i <= 20; i++) {
        tech.innerHTML += createCard(`Hardware X-${i}`, 199 + i, electronicImages[i % 4]);
        apparel.innerHTML += createCard(`Style Asset ${i}`, 45 + i, electronicImages[(i+2) % 4]);
    }

    // "You May Also Like" (System Picks)
    for (let i = 0; i < 6; i++) {
        const name = `System Pick #${i+1}`;
        const price = 85 + i;
        const img = electronicImages[i % 4];
        suggestions.innerHTML += `
            <div class="side-item" onclick="viewProduct('${name}', ${price}, '${img}')">
                <img src="${img}">
                <div class="side-info">
                    <h5>${name}</h5>
                    <p>$${price}.00</p>
                </div>
            </div>`;
    }
}

function createCard(name, price, img) {
    return `
        <div class="product-card" onclick="viewProduct('${name}', ${price}, '${img}')">
            <div class="img-wrap"><img src="${img}" loading="lazy"></div>
            <div style="padding:15px; border-top:1px solid #f9f9f9;">
                <h4 style="font-size:14px; margin-bottom:5px;">${name}</h4>
                <p style="color:#00d4ff; font-weight:800; font-size:16px;">$${price}</p>
            </div>
        </div>`;
}

function viewProduct(name, price, img) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('product-page').style.display = 'block';
    document.getElementById('detail-title').innerText = name;
    document.getElementById('detail-price').innerText = `$${price}`;
    document.getElementById('detail-img').src = img;
    
    addToRecent(name, img, price);
    window.scrollTo(0,0);
}

function showHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('product-page').style.display = 'none';
    const menu = document.getElementById('nav-links');
    if(menu.classList.contains('active')) toggleMenu();
}

function addToRecent(name, img, price) {
    // Check for duplicates in history
    if (recentViews.find(item => item.name === name)) return;
    
    recentViews.unshift({name, img, price});
    const container = document.getElementById('recent-grid');
    
    container.innerHTML = recentViews.slice(0, 8).map(v => `
        <div class="side-item" onclick="viewProduct('${v.name}', ${v.price}, '${v.img}')">
            <img src="${v.img}">
            <div class="side-info">
                <h5>${v.name}</h5>
                <p>$${v.price}.00</p>
            </div>
        </div>
    `).join('');
}

function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
    document.getElementById('ui-overlay').classList.toggle('active');
}

function toggleBot() { 
    const b = document.getElementById('ai-bot');
    b.style.display = (b.style.display === 'flex') ? 'none' : 'flex';
}

function askBot() {
    const input = document.getElementById('bot-query');
    const msgBox = document.getElementById('bot-messages');
    if(!input.value) return;
    msgBox.innerHTML += `<div class="user-msg">${input.value}</div>`;
    input.value = '';
    setTimeout(() => {
        msgBox.innerHTML += `<div class="bot-msg"><b>AI:</b> Synchronizing deployment logs... complete.</div>`;
        msgBox.scrollTop = msgBox.scrollHeight;
    }, 600);
}

window.onload = initStore;
