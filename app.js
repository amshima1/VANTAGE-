// FIREBASE INIT (REPLACE)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

// LOAD PRODUCTS
function loadProducts(){
  const box = document.getElementById("products");

  db.collection("products").onSnapshot(snapshot => {
    box.innerHTML = "";

    snapshot.forEach(doc => {
      let p = doc.data();

      box.innerHTML += `
        <div class="product">
          <h3>${p.name}</h3>
          <p>₦${p.price}</p>
          <button onclick="addToCart('${p.name}',${p.price})">
            Add to Cart
          </button>
        </div>
      `;
    });
  });
}

loadProducts();
