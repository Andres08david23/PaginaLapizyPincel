const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en comprass.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevacompras = document.createElement("div");
    nuevacompras.classList = "tarjeta-producto"
    nuevacompras.innerHTML = `
    <img src="./img/productos/${producto.id}.png" alt="compras 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevacompras);
    nuevacompras.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(productos);