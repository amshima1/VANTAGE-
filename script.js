const arrivalsGrid = document.getElementById('arrivals-grid');

function renderArrivals() {
    let content = '';
    // Loop through your 11 newly named GitHub files
    for (let i = 1; i <= 11; i++) {
        content += `
            <div class="product-item" onclick="showProductLikes(${i})">
                <img src="Flux${i}-front.jpg" alt="Flux Product ${i}">
                <button class="add-btn">ADD TO CART</button>
                <div class="details" style="padding: 10px; text-align: center;">
                    <p style="font-size: 14px;">Hertunba Flux ${i}</p>
                    <p><strong>€387.95</strong></p>
                </div>
            </div>
        `;
    }
    arrivalsGrid.innerHTML = content;
}

// Function to handle showing more "likes" when a product is clicked
function showProductLikes(id) {
    console.log("Viewing more likes for Flux " + id);
    // You can add logic here to highlight the selected product
}

document.addEventListener('DOMContentLoaded', renderArrivals);
