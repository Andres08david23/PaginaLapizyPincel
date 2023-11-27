// Datos de ejemplo para verificar el inicio de sesión
const username = "admin";
const password = "123";

// Escuchar el evento submit del formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  
  // Obtener los valores del usuario y la contraseña ingresados
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;
  
  // Verificar si el usuario y la contraseña son correctos
  if (enteredUsername === username && enteredPassword === password) {
    // Mostrar la sección de pedidos
    document.getElementById("orders").style.display = "block";
    
    // Simular la carga de pedidos
    const orders = [
      { id: 1, cliente: "Cliente 1", producto: "Producto 1", cantidad: 2 },
      { id: 2, cliente: "Cliente 2", producto: "Producto 2", cantidad: 3 },
      { id: 3, cliente: "Cliente 3", producto: "Producto 3", cantidad: 1 }
    ];
    
    const ordersBody = document.getElementById("orders-body");
    
    // Limpiar cualquier contenido anterior
    ordersBody.innerHTML = "";
    
    // Generar filas para cada pedido
    orders.forEach(function(order) {
      const row = document.createElement("tr");
      
      const idCell = document.createElement("td");
      idCell.textContent = order.id;
      row.appendChild(idCell);
      
      const clienteCell = document.createElement("td");
      clienteCell.textContent = order.cliente;
      row.appendChild(clienteCell);
      
      const productoCell = document.createElement("td");
      productoCell.textContent = order.producto;
      row.appendChild(productoCell);
      
      const cantidadCell = document.createElement("td");
      cantidadCell.textContent = order.cantidad;
      row.appendChild(cantidadCell);
      
      ordersBody.appendChild(row);
    });
    
  } else {
    // Mostrar mensaje de error
    alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
  }
});
