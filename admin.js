const db = firebase.firestore();

function loadOrders(){
  db.collection("orders").onSnapshot(snapshot => {

    let box = document.getElementById("orders");
    box.innerHTML = "";

    snapshot.forEach(doc => {
      let o = doc.data();

      box.innerHTML += `
        <div>
          <h3>Order</h3>
          <p>Total: ₦${o.total}</p>
          <p>Ref: ${o.ref}</p>
        </div>
      `;
    });

  });
}

loadOrders();
