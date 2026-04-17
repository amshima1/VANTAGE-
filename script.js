// CART UI ELEMENTS
const sideCart = document.getElementById('side-cart');
const cartBtn = document.getElementById('cart-icon-btn');
const closeBtn = document.getElementById('close-cart');
const cartCountElement = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items-list');

// CART LOGIC
let count = 0;
cartBtn.onclick = () => sideCart.classList.add('active');
closeBtn.onclick = () => sideCart.classList.remove('active');

function addToCart(name, price) {
    count++;
    cartCountElement.innerText = count;
    if(count === 1) cartItemsList.innerHTML = ''; 

    const item = document.createElement('div');
    item.style.padding = "10px 0";
    item.style.borderBottom = "1px solid #eee";
    item.innerHTML = `<strong>${name}</strong> - $${price}`;
    cartItemsList.appendChild(item);
    sideCart.classList.add('active');
}

// RECENTLY VIEWED LOGIC
let recentItems = [];

function addToRecent(name, imgUrl) {
    const recentGrid = document.getElementById('recent-grid');
    
    // Check if already in list to avoid duplicates
    if (recentItems.includes(name)) return;
    
    if (recentItems.length === 0) recentGrid.innerHTML = ''; // Clear "empty" message

    recentItems.unshift(name); // Add to start of array
    if (recentItems.length > 5) recentItems.pop(); // Keep only last 5

    const recentDiv = document.createElement('div');
    recentDiv.className = 'recent-item';
    recentDiv.innerHTML = `
        <img src="${imgUrl}">
        <h5>${name}</h5>
    `;
    
    // Add to the front of the grid
    recentGrid.prepend(recentDiv);
}

// INIT
console.log("Flux Core Loaded: Ready for Fiverr Portfolio.");
