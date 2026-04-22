let count = 0;

// Example function to call when adding to bag
function updateCartCount(newCount) {
    count = newCount;
    document.getElementById('cart-count').innerText = count;
}

// Open menu toggle
document.getElementById('menu-trigger').onclick = () => {
    console.log("Menu Opened");
    // Link your mobile drawer here
};
