let cart = JSON.parse(localStorage.getItem("cart")) || [];

function getTotal(){
  let total = 0;
  cart.forEach(i => total += i.price);
  return total;
}

function pay(){
  let handler = PaystackPop.setup({
    key: "YOUR_PAYSTACK_KEY",
    email: "test@email.com",
    amount: getTotal() * 100,

    callback: function(response){
      saveOrder(response.reference);
    }
  });

  handler.openIframe();
}

function saveOrder(ref){
  firebase.firestore().collection("orders").add({
    cart,
    total: getTotal(),
    ref,
    date: new Date()
  });

  alert("Order Successful");
  localStorage.removeItem("cart");
}
