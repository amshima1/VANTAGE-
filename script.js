// Example product data
const products = [
    { name: "Smartphone", category: "Electronics", price: "$799", image: "https://via.placeholder.com/200" },
    { name: "Laptop", category: "Electronics", price: "$1299", image: "https://via.placeholder.com/200" },
    { name: "T-shirt", category: "Clothing", price: "$19.99", image: "https://via.placeholder.com/200" },
    { name: "Jacket", category: "Clothing", price: "$49.99", image: "https://via.placeholder.com/200" }
];

// Load all products initially
function loadProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
                <button class="btn-add-to-cart">Add to Cart</button>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
}

// Search functionality
document.getElementById("search-btn").addEventListener("click", function () {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

    loadProducts(filteredProducts);
});

// Add to Cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
}

// Add Event Listeners for "Add to Cart" buttons
document.getElementById('product-grid').addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('btn-add-to-cart')) {
        const productName = e.target.previousElementSibling.previousElementSibling.innerText;
        const product = products.find(p => p.name === productName);
        addTo
