const container = document.getElementById('arrivals-container');

function loadProducts() {
    let productHTML = '';
    // Loops through your 11 Flux products in GitHub
    for (let i = 1; i <= 11; i++) {
        productHTML += `
            <div class="product-card" style="flex: 0 0 200px; text-align: center;">
                <img src="Flux${i}-front.jpg" style="width: 100%; border: 1px solid #eee;">
                <p style="margin-top: 10px; font-size: 14px;">Hertunba Flux ${i}</p>
                <p><strong>€387.95</strong></p>
                <button style="width: 100%; padding: 10px; margin-top: 5px; background: #fff; border: 1px solid #000;">ADD TO CART</button>
            </div>
        `;
    }
    container.innerHTML = productHTML;
}

document.addEventListener('DOMContentLoaded', loadProducts);
