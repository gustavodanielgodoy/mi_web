const productos = [
  { imagen: "img/miel1k.jpeg", nombre: "Miel 1kg", precio: 8000 },
  { imagen: "img/miel500.jpeg", nombre: "Miel 500g", precio: 5000 },
  { imagen: "img/miel250.jpeg", nombre: "Miel 250g", precio: 3500 }
];

let carrito = [];

function mostrarProductos() {
  const contenedor = document.getElementById("productos");

  productos.forEach((prod, index) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${prod.imagen}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <p><strong>$${prod.precio}</strong></p>
      <button onclick="agregarAlCarrito(${index})">Agregar</button>
    `;

    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(index) {
  carrito.push(productos[index]);
  renderCarrito();
}

function renderCarrito() {
  const lista = document.getElementById("carrito");
  const totalEl = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach(prod => {
    const li = document.createElement("li");
    li.textContent = `${prod.nombre} - $${prod.precio}`;
    lista.appendChild(li);
    total += prod.precio;
  });

  totalEl.textContent = "Total: $" + total;
}

function comprar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola! Quiero hacer el siguiente pedido:%0A%0A";
  let total = 0;

  carrito.forEach(prod => {
    mensaje += `- ${prod.nombre} ($${prod.precio})%0A`;
    total += prod.precio;
  });

  mensaje += `%0ATotal: $${total}%0A`;
  mensaje += `%0A📌 Datos:%0ANombre:%0ADirección:%0AForma de pago:%0A`;

  let telefono = "5493624711203";

  let url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}

mostrarProductos();
