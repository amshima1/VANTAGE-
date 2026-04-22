// Data mapped exactly to your uploaded GitHub files
const fluxData = [
    { id: 1, name: "Flux 1", main: "Flux1-front.jpg", likes: ["Flux1-back.jpg", "Flux1-vedio.jpg"] },
    { id: 2, name: "Flux 2", main: "Flux2-front.jpg", likes: ["Flux2-front2.jpg", "Flux2-twice1.jpg"] },
    { id: 3, name: "Flux 3", main: "Flux3-front.jpg", likes: ["Flux3-hang.jpg", "Flux3-side.jpg"] },
    { id: 4, name: "Flux 4", main: "Flux4-front.jpg", likes: ["Flux4-back.jpg"] },
    { id: 11, name: "Flux 11", main: "Flux11-front.jpg", likes: ["Flux11-red.jpg", "Flux11-twice.jpg"] }
];

const grid = document.getElementById('flux-grid');
const likesSection = document.getElementById('likes-section');

function renderGallery() {
    grid.innerHTML = fluxData.map(item => `
        <div class="product-card" onclick="showRelated('${item.id}')">
            <img src="${item.main}">
            <p>${item.name}</p>
            <p><strong>€387.95</strong></p>
        </div>
    `).join('');
}

function showRelated(id) {
    const item = fluxData.find(p => p.id == id);
    // Logic to show alternate "likes" (back views, etc.)
    likesSection.innerHTML = `
        <h4>More views you might like for ${item.name}</h4>
        <div style="display:flex; justify-content:center; gap:10px; margin-top:15px;">
            ${item.likes.map(img => `<img src="${img}" style="width:120px;">`).join('')}
        </div>
    `;
    likesSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderGallery);
