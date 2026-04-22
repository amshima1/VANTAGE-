const productGrid = document.getElementById('product-grid');

// List of products based on your GitHub files
const products = [
    { name: "Hertunba Flux 1", img: "Flux1-front.jpg", price: "€387.95" },
    { name: "Hertunba Flux 2", img: "Flux2-front.jpg", price: "€387.95" },
    { name: "Hertunba Flux 3", img: "Flux3-front.jpg", price: "€387.95" },
    { name: "Hertunba Flux 11", img: "Flux11-front.jpg", price: "€387.95" }
];

function loadGallery() {
    productGrid.innerHTML = products.map(p => `
        <div class="prod-card" style="flex: 0 0 200px; text-align: center;">
            <img src="${p.img}" style="width: 100%; border: 1px solid #eee;">
            <button style="width: 100%; padding: 12px; background: #fff; border: 1px solid #000; font-weight: bold; margin-top: -1px;">ADD TO CART</button>
            <div style="padding-top: 10px;">
                <p style="font-size: 14px;">${p.name}</p>
                <p><strong>${p.price}</strong></p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadGallery);
