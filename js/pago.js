document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;

  const order = {
    name: name,
    address: address,
    email: email,
    product: product,
    quantity: quantity
  };

  saveOrder(order);
  clearForm();
});

function saveOrder(order) {
  const url = "guardar_pedido.php";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert("Pedido realizado correctamente");
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error al realizar el pedido");
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
}

function mostrarAlerta() {
  alert('¡Pedido exitoso! Gracias por tu compra.');
  window.location.href = 'index.html'; // Redireccionar a index.html
}