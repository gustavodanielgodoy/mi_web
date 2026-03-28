const productos = [
  { nombre: "Miel 1kg", precio: 3000 },
  { nombre: "Miel 500g", precio: 1800 }
];

let carrito = [];

function mostrarProductos() {
  const contenedor = document.getElementById("productos");

  productos.forEach((prod, index) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>$${prod.precio}</p>
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
  lista.innerHTML = "";

  carrito.forEach(prod => {
    const li = document.createElement("li");
    li.textContent = prod.nombre;
    lista.appendChild(li);
  });
}

function comprar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola, quiero pedir:%0A";

  carrito.forEach(prod => {
    mensaje += `- ${prod.nombre}%0A`;
  });

  let telefono = "+5493624711203"; // ? CAMBIAR POR TU NÚMERO

  let url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}

mostrarProductos();
