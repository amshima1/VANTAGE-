let cart = JSON.parse(localStorage.getItem("cart")) || [];

// MENU
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// CART
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
}

// NAV
function showHome() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("cartPage").style.display = "none";
}

function showCart() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("cartPage").style.display = "block";

  let container = document.getElementById("cartItems");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ₦${item.price}</span>
        <button onclick="removeItem(${i})">X</button>
      </div>
    `;
  });

  document.getElementById("totalPrice").innerText = total;
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  showCart();
}

function checkout() {
  alert("Checkout successful (demo)");
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
  showHome();
}

// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// SCROLL
function scrollToShop() {
  document.getElementById("shop").scrollIntoView();
}

updateCart();
