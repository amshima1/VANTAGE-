const grid = document.getElementById('product-grid');

function init() {
    let html = '';
    // Pulls Flux1-front.jpg to Flux11-front.jpg
    for (let i = 1; i <= 11; i++) {
        html += `
            <div class="prod-card">
                <img src="Flux${i}-front.jpg">
                <button style="width:100%; padding:10px; background:#fff; border:1px solid #000; font-weight:bold;">ADD TO CART</button>
                <div style="padding-top:10px;">
                    <p style="font-size:13px;">Hertunba Flux ${i}</p>
                    <p><strong>€387.95</strong></p>
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', init);
