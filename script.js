const arrivals = document.getElementById('flux-arrivals');

const fluxList = [
    { name: "Flux 1", main: "Flux1-front.jpg" },
    { name: "Flux 2", main: "Flux2-front.jpg" },
    { name: "Flux 3", main: "Flux3-front.jpg" },
    { name: "Flux 11", main: "Flux11-front.jpg" }
];

function loadArrivals() {
    arrivals.innerHTML = fluxList.map(p => `
        <div class="p-card" style="flex: 0 0 190px; text-align: center;">
            <img src="${p.main}" style="width: 100%; border: 1px solid #eee;">
            <button style="width: 100%; padding: 12px; background: #fff; border: 1px solid #000; font-weight: bold;">ADD TO CART</button>
            <p style="margin-top: 10px; font-size: 14px;">${p.name}</p>
            <p><strong>€387.95</strong></p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadArrivals);
