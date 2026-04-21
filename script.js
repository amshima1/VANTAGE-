const electronicImages = [
    'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
];
const apparelImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400'
];

let recentViews = [];

function initStore() {
    const tech = document.getElementById('tech-grid');
    const apparel = document.getElementById('apparel-grid');
    const suggestions = document.getElementById('suggestions-grid');

    tech.innerHTML = ''; apparel.innerHTML = ''; suggestions.innerHTML = '';

    for (let i = 1; i <= 20; i++) {
        tech.innerHTML += createCard(`Hardware X-${i}`, 199 + i, electronicImages[i % 3]);
        apparel.innerHTML += createCard(`Aesthetic v.${i}`, 45 + i, apparelImages[i % 3]);
    }

    for (let i = 0; i < 6; i++) {
        suggestions.innerHTML += `
            <div class="side-item" onclick="viewProduct('Pick ${i}', 89, '${electronicImages[i%3]}')">
                <img src="${electronicImages[i%3]}" width="40" height="40" style="border-radius:4px; object-fit:cover; margin-right:10px;">
                <div style="cursor:pointer"><h5>Pick ${i}</h5><p style="font-size:10px; color:#00d4ff">$89.00</p></div>
            </div>`;
    }
}

function createCard(name, price, img) {
    return `
        <div class="product-card" onclick="viewProduct('${name}', ${price}, '${img}')">
            <div class="img-wrap"><img src="${img}"></div>
            <div style="padding:15px;"><h4>${name}</h4><p style="color:#00d4ff; font-weight:700">$${price}</p></div>
        </div>`;
}

function viewProduct(name, price, img) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('product-page').style.display = 'block';
    document.getElementById('detail-title').innerText = name;
    document.getElementById('detail-price').innerText = `$${price}`;
    document.getElementById('detail-img').src = img;
    
    addToRecent(name, img);
    window.scrollTo(0,0);
}

function showHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('product-page').style.display = 'none';
}

function addToRecent(name, img) {
    if (recentViews.find(item => item.name === name)) return;
    recentViews.unshift({name, img});
    const container = document.getElementById('recent-grid');
    container.innerHTML = recentViews.slice(0, 8).map(v => `
        <div class="side-item" style="display:flex; align-items:center; margin-bottom:10px; gap:10px;">
            <img src="${v.img}" width="40" height="40" style="border-radius:4px; object-fit:cover;">
            <h5 style="font-size:12px;">${v.name}</h5>
        </div>
    `).join('');
}

function askBot() {
    const input = document.getElementById('bot-query');
    const msgBox = document.getElementById('bot-messages');
    if(!input.value) return;

    msgBox.innerHTML += `<div class="user-msg">${input.value}</div>`;
    const q = input.value.toLowerCase();
    input.value = '';

    setTimeout(() => {
        let r = "System acknowledged. A FLUX agent will merge with this session shortly.";
        if(q.includes("shipping")) r = "Global deployment takes 3-5 operational cycles.";
        msgBox.innerHTML += `<div class="bot-msg"><b>Flux AI:</b> ${r}</div>`;
        msgBox.scrollTop = msgBox.scrollHeight;
    }, 700);
}

function toggleMenu() { document.getElementById('nav-links').classList.toggle('active'); }
function toggleBot() { 
    const b = document.getElementById('ai-bot');
    b.style.display = (b.style.display === 'flex') ? 'none' : 'flex';
}
function openCart() { alert("Reviewing Staged Selection..."); }

window.onload = initStore;
