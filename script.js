// Array matching your exact GitHub filenames (Flux1 to Flux11)
const fluxProducts = [];
for (let i = 1; i <= 11; i++) {
    fluxProducts.push({
        id: i,
        name: `Hertunba Collection ${i}`,
        price: 387.95 + i,
        imgFront: `Flux${i}-front.jpg`,
        imgBack: `Flux${i}-back.jpg` || `Flux${i}-side.jpg`
    });
}

function initScroller() {
    const grid = document.getElementById('arrivals-grid');
    if (!grid) return;

    grid.innerHTML = fluxProducts.map(product => `
        <div class="product-item" onclick="showProductDetails(${product.id})">
            <div class="img-container">
                <img src="${product.imgFront}" class="img-front">
                <img src="${product.imgBack}" class="img-back">
                <button class="add-btn">ADD TO CART</button>
            </div>
            <div class="product-details">
                <p>${product.name}</p>
                <p><strong>€${product.price.toFixed(2)}</strong></p>
            </div>
        </div>
    `).join('');
}

function showProductDetails(id) {
    const product = fluxProducts.find(p => p.id === id);
    // This logic replaces the scroller with the "rest of their likes"
    const grid = document.getElementById('arrivals-grid');
    grid.parentElement.style.overflowX = 'hidden'; // Stop scroll
    
    grid.innerHTML = `
        <div class="single-view" style="width: 100%; padding: 20px;">
            <img src="${product.imgFront}" style="width: 100%;">
            <h2>${product.name}</h2>
            <p>Full product detail view...</p>
            <button onclick="initScroller()">Back to Gallery</button>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', initScroller);
