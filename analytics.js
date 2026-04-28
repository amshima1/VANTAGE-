const db = firebase.firestore();

db.collection("orders").onSnapshot(snapshot => {

  let total = 0;

  snapshot.forEach(doc => {
    total += doc.data().total;
  });

  document.getElementById("orders").innerText =
    "Orders: " + snapshot.size;

  document.getElementById("revenue").innerText =
    "Revenue: ₦" + total;

});
