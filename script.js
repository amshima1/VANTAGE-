const products = [
    { id: 1, name: "Modular Shell Jacket", price: 320, img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800" },
    { id: 2, name: "Void Knit Sweater", price: 150, img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800" },
    { id: 3, name: "Linear Denim Pant", price: 210, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800" },
    { id: 4, name: "Tech Parka", price: 450, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800" },
];

let cart = JSON.parse(localStorage.getItem('FLUX_CART')) || [];

function init() {
    setTimeout(() => {
        document.getElementById('skeleton-grid').classList.add('hidden');
        document.getElementById('shop-section').classList.remove('hidden');
        renderShop();
    }, 1200);

    updateCartUI();
    setupThemeSelector();
    setupMobileMenu();
}

// --- Hamburger & Mobile Menu ---
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if(mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

// --- Theme Logic ---
function setupThemeSelector() {
    const buttons = document.querySelectorAll('.t-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.t-btn.active').classList.remove('active');
            e.target.classList.add('active');
            const theme = e.target.getAttribute('data-theme');
            if(theme === 'neon') {
                document.body.className = 'dark-theme neon';
            } else {
                document.body.className = 'light-theme vibrant';
            }
        });
    });
}

// --- Product Logic ---
function renderShop() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card" onclick="openDetail(${p.id})">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
        </div>
    `).join('');
}

function openDetail(id) {
    const product = products.find(p => p.id === id);
    document.getElementById('shop-section').classList.add('hidden');
    const detail = document.getElementById('detail-section');
    detail.classList.remove('hidden');
    detail.innerHTML = `
        <div style="padding:40px; text-align:center;">
            <img src="${product.img}" style="width:100%; max-width:500px; border-radius:12px;">
            <h1 style="margin-top:20px;">${product.name}</h1>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})" class="primary-btn" style="max-width:300px; margin-top:20px;">ADD TO BAG</button>
            <br><button onclick="location.reload()" style="margin-top:20px; background:none; border:none; text-decoration:underline; cursor:pointer; color:var(--text)">BACK</button>
        </div>
    `;
    window.scrollTo(0,0);
}

// --- Cart Logic ---
function addToCart(id) {
    const p = products.find(x => x.id === id);
    cart.push(p);
    localStorage.setItem('FLUX_CART', JSON.stringify(cart));
    updateCartUI();
    toggleCart(true);
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-subtotal').innerText = `$${total.toFixed(2)}`;
    document.getElementById('cart-items-container').innerHTML = cart.map(item => `
        <div style="margin-bottom:10px; font-size:14px; display:flex; justify-content:space-between">
            <span>${item.name}</span>
            <span>$${item.price}</span>
        </div>
    `).join('');
}

function toggleCart(open) {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('active', open);
    overlay.classList.toggle('active', open);
}

document.getElementById('cart-icon-trigger').onclick = () => toggleCart(true);
document.getElementById('close-cart').onclick = () => toggleCart(false);
document.getElementById('sidebar-overlay').onclick = () => toggleCart(false);

init();
