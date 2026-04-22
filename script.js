// Mapping your specific files to product objects
const fluxProducts = [
    { id: 1, name: "Flux 1", main: "Flux1-front.jpg", likes: ["Flux1-back.jpg", "Flux1-vedio.jpg"] },
    { id: 2, name: "Flux 2", main: "Flux2-front.jpg", likes: ["Flux2-front2.jpg", "Flux2-twice1.jpg"] },
    { id: 3, name: "Flux 3", main: "Flux3-front.jpg", likes: ["Flux3-side.jpg", "Flux3-hang.jpg"] },
    { id: 4, name: "Flux 4", main: "Flux4-front.jpg", likes: ["Flux4-back.jpg"] },
    { id: 10, name: "Flux 10", main: "Flux10-front.jpg", likes: ["Flux10-back.jpg"] },
    { id: 11, name: "Flux 11", main: "Flux11-front.jpg", likes: ["Flux11-red.jpg", "Flux11-twice.jpg", "Flux11-twice2.jpg"] }
];

const gallery = document.getElementById('flux-gallery');
const detailView = document.getElementById('detail-view');

function renderGallery() {
    gallery.innerHTML = fluxProducts.map(p => `
        <div class="product-card" onclick="showLikes(${p.id})">
            <img src="${p.main}" alt="${p.name}">
            <p>${p.name}</p>
            <p><strong>€387.95</strong></p>
        </div>
    `).join('');
}

function showLikes(id) {
    const product = fluxProducts.find(p => p.id === id);
    detailView.style.display = 'block';
    detailView.innerHTML = `
        <h3>More views for ${product.name}</h3>
        <div class="likes-grid">
            ${product.likes.map(img => `<img src="${img}">`).join('')}
        </div>
        <button onclick="detailView.style.display='none'" style="margin-top:10px;">Close Details</button>
    `;
    detailView.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderGallery);
