// Mapping your specific files to an interactive list
const fluxProducts = [
    { id: 1, name: "Flux 1", img: "Flux1-front.jpg", likes: ["Flux1-back.jpg", "Flux1-vedio.jpg"] },
    { id: 2, name: "Flux 2", img: "Flux2-front.jpg", likes: ["Flux2-front2.jpg", "Flux2-twice1.jpg"] },
    { id: 3, name: "Flux 3", img: "Flux3-front.jpg", likes: ["Flux3-hang.jpg", "Flux3-side.jpg"] },
    { id: 4, name: "Flux 4", img: "Flux4-front.jpg", likes: ["Flux4-back.jpg"] },
    { id: 11, name: "Flux 11", img: "Flux11-front.jpg", likes: ["Flux11-red.jpg", "Flux11-twice.jpg"] }
    // (Add IDs 5-10 similarly)
];

const container = document.getElementById('flux-container');
const likesView = document.getElementById('likes-view');

function initGallery() {
    container.innerHTML = fluxProducts.map(p => `
        <div class="product-card" onclick="showLikes(${p.id})">
            <img src="${p.img}">
            <p style="margin-top:5px; font-size:14px;">${p.name}</p>
            <p><strong>€387.95</strong></p>
        </div>
    `).join('');
}

function showLikes(id) {
    const p = fluxProducts.find(item => item.id === id);
    likesView.innerHTML = `
        <hr style="margin:20px 0; border:0; border-top:1px solid #eee;">
        <h4>Alternate views for ${p.name}</h4>
        <div style="display:flex; justify-content:center; gap:10px; margin-top:15px;">
            ${p.likes.map(l => `<img src="${l}" style="width:100px; border:1px solid #ddd;">`).join('')}
        </div>
    `;
    likesView.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', initGallery);
