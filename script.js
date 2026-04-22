const arrivalsGrid = document.getElementById('arrivals-grid');

function renderArrivals() {
    let content = '';
    // Generates Flux1-front.jpg to Flux11-front.jpg based on your GitHub files
    for (let i = 1; i <= 11; i++) {
        content += `
            <div class="product-item">
                <img src="Flux${i}-front.jpg" style="width:100%; border:1px solid #eee;">
                <button style="width:100%; padding:10px; background:#fff; border:1px solid #000;">ADD TO CART</button>
                <div style="padding:10px; text-align:center;">
                    <p>Hertunba Flux ${i}</p>
                    <p><strong>€387.95</strong></p>
                </div>
            </div>
        `;
    }
    arrivalsGrid.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', renderArrivals);
