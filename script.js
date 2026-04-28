let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cart-count").innerText = "🛒 " + cart;
}

function quickView(name, price) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("product-name").innerText = name;
  document.getElementById("product-price").innerText = price;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
