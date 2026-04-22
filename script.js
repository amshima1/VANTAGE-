const products = [
    { id: 1, name: "Hertunba Meena Wrap", price: 653.00, img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800" },
    { id: 2, name: "Hertunba The Lola Kaftan", price: 416.00, img: "https://images.unsplash.com/photo-1594633313214-29115f035e74?w=800" }
];

const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');

document.getElementById('menu-trigger').onclick = () => { menu.classList.add('active'); overlay.style.display = 'block'; };
document.getElementById('close-menu').onclick = () => { menu.classList.remove('active'); overlay.style.display = 'none'; };
overlay.onclick = () => { menu.classList.remove('active'); overlay.style.display = 'none'; };

function render() {
    document.getElementById('product-grid').innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" style="width:100%;">
            <button class="add-btn">ADD TO CART</button>
            <div class="product-details">
                <p style="font-size:13px;">${p.name}</p>
                <p class="p-price">$${p.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}
render();
