// ================= FIREBASE INIT =================
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ================= CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, vendorId){
  cart.push({name, price, vendorId});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added");
}

// ================= LOAD PRODUCTS =================
function loadProducts(){
  const box = document.getElementById("products");
  if(!box) return;

  db.collection("products").onSnapshot(snapshot => {
    box.innerHTML = "";

    snapshot.forEach(doc => {
      let p = doc.data();

      box.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>₦${p.price}</p>
          <small>Vendor: ${p.vendorId}</small>
          <button onclick="addToCart('${p.name}',${p.price},'${p.vendorId}')">
            Add to Cart
          </button>
        </div>
      `;
    });
  });
}

loadProducts();
