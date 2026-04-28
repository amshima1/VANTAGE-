// ================= FIREBASE =================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ================= CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

function getTotal(){
  return cart.reduce((sum, i) => sum + i.price, 0);
}

// ================= LOAD PRODUCTS =================
function loadProducts(){
  const box = document.getElementById("products");

  db.collection("products").onSnapshot(snapshot => {
    box.innerHTML = "";

    snapshot.forEach(doc => {
      let p = doc.data();

      box.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>₦${p.price}</p>
          <button onclick="addToCart('${p.name}', ${p.price})">
            Add to Cart
          </button>
        </div>
      `;
    });
  });
}

loadProducts();

// ================= SAVE ORDER =================
function saveOrder(ref){
  db.collection("orders").add({
    cart,
    total: getTotal(),
    ref,
    createdAt: new Date()
  });

  localStorage.removeItem("cart");
  alert("Order placed successfully!");
}
