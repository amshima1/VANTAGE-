const productList = document.getElementById('product-list');

// Array of your Flux images from GitHub
const fluxImages = [
    { name: "Hertunba Flux 1", img: "Flux1-front.jpg" },
    { name: "Hertunba Flux 2", img: "Flux2-front.jpg" },
    { name: "Hertunba Flux 3", img: "Flux3-front.jpg" },
    { name: "Hertunba Flux 11", img: "Flux11-front.jpg" }
];

function renderProducts() {
    productList.innerHTML = fluxImages.map(item => `
        <div class="product-card" style="flex: 0 0 200px; text-align: center;">
            <img src="${item.img}" style="width: 100%; border: 1px solid #eee;">
            <button style="width: 100%; padding: 10px; background: #fff; border: 1px solid #000; font-weight: bold;">ADD TO CART</button>
            <p style="margin-top: 10px; font-size: 14px;">${item.name}</p>
            <p><strong>€387.95</strong></p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProducts);
