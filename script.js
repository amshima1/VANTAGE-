// --- Menu Controls ---
const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('hamburger-trigger');
const closeBtn = document.getElementById('close-menu');

openBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

// --- Simple Product Render ---
const products = [
    { id: 1, name: "FLUX Meena Structured Wrap", price: 653, img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800" },
    { id: 2, name: "FLUX Lola Kaftan Dress", price: 416, img: "https://images.unsplash.com/photo-1594633313214-29115f035e74?w=800" }
];

function render() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card" style="text-align:center;">
            <img src="${p.img}" style="width:100%;">
            <div style="padding:10px;">
                <h4 style="font-size:13px; font-weight:400;">${p.name}</h4>
                <p style="font-weight:700;">$${p.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

render();
