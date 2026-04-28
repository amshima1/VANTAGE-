const db = firebase.firestore();

function addProduct(){
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  let vendorId = "vendor_" + Math.floor(Math.random()*1000);

  db.collection("products").add({
    name,
    price: Number(price),
    vendorId,
    sales: 0
  });

  alert("Product added");
}
