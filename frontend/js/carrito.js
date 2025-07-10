console.log('conectado al carrito');
const ahora = new Date();
const fechaHora = ahora.toLocaleString(); // Ej: "17/6/2025, 14:45:12"
console.log(fechaHora);

let carrito = JSON.parse(localStorage.getItem("cart")); // obtiene el array de productos
let nombreLS = localStorage.getItem("nombre");

console.log(`datos del carrito por ls ${nombreLS} `);
console.log(`datos del carrito por ls ${JSON.stringify(carrito)} `);

function renderCarrito() {

  const contenedor = document.getElementById('cart-items');
  contenedor.innerHTML = "";

  const total = document.querySelector('#total-price');
  let acum = 0; // inicializamos

  carrito.forEach((p) => {
    acum += p.precio_normal * p.cantidad;
    
    const lista = document.createElement('div');
    lista.className = "contenedorItems item-block d-flex flex-wrap align-items-center justify-content-between";

    lista.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="img-carrito mb-2 mb-md-0" style="width: 100px; height: 100px; object-fit: fill;">
      <p class="item-name flex-grow-1 mb-2 mb-md-0 mx-3">${p.nombre}</p>
      <p class="mb-2 mb-md-0 mx-3">$${p.precio_normal}</p>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">-</button>
      <p class="mb-2 mb-md-0 mx-3">${p.cantidad}</p>
      <button type="button" class="btn btn-success">+</button>
    </div>
      
      <p class="mb-2 mb-md-0 mx-3">$${p.precio_normal * p.cantidad}</p>
      <button class="delete-button btn btn-danger btn-sm mb-2 mb-md-0">Eliminar</button>
    `;

    contenedor.appendChild(lista);

    const btnDelete = lista.querySelector(".delete-button");
    btnDelete.addEventListener("click", () => eliminar(p));

    const btnRestar = lista.querySelector(".btn-danger"); // Botón -
    const btnSumar = lista.querySelector(".btn-success"); // Botón +

    btnRestar.addEventListener("click", () => eliminar(p));

    btnSumar.addEventListener("click", () => {
      p.cantidad++;
      guardarCarritoLS();
      renderCarrito();
    });
  });

  total.textContent = acum;
  guardarCarritoLS();
}

function eliminar(producto) {
  producto.cantidad--;
  if (producto.cantidad <= 0) {
    const indice = carrito.indexOf(producto);
    if (indice !== -1) {
      carrito.splice(indice, 1);
      const confirmar = confirm("¿Querés eliminar este producto del carrito?");
        if (confirmar) {
          const indice = carrito.indexOf(producto);
          if (indice !== -1) carrito.splice(indice, 1);
        }
    }
  }
  guardarCarritoLS();
  renderCarrito();
}

function guardarCarritoLS() {
  localStorage.setItem("cart", JSON.stringify(carrito));
}

function vaciarCarrito() {
  const btnVaciar = document.querySelector(".vaciar");
  btnVaciar.addEventListener("click", () => {
    localStorage.clear();
    carrito = [];
    guardarCarritoLS();
    renderCarrito();
  });
}

function ordenar() {
  const ordenarBtn = document.querySelector(".finalizar");

  ordenarBtn.addEventListener("click", () => {
    confirmarPedido = confirm("Desea finalizar el pedido?");

    if (confirmarPedido) {
      const nombre = localStorage.getItem("nombre");
      const carrito = JSON.parse(localStorage.getItem("cart")) || [];

      if (!carrito.length) return alert("El carrito está vacío");
      
      if (!nombre || nombre.trim().length < 2) {
        alert("Nombre inválido o no cargado. Por favor, ingresalo de nuevo.");
        localStorage.removeItem("nombre");
        window.location.href = "../vistas/login.html";
        return;
      }

      const total = carrito.reduce((acc, item) => acc + item.precio_normal * item.cantidad, 0);

      console.log("➡️ Enviando pedido con:", {cliente: nombre, total});

      fetch("http://localhost:5000/api/pedidos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({cliente: nombre, total}),
      })
        .then(async res => {
          const data = await res.json();
          if (!res.ok) {
            console.error("❌ Error desde backend:", data);
            throw new Error(data.message || "Error al crear pedido");
          }
          return data;
      })
        .then(async data => {
          console.log("Respuesta del backend al crear pedido:", data);
          const pedidoId = data.payload.id;
          const detalles = carrito.map(item => ({
            pedido_id: pedidoId,
            producto_id: item.id,
            nombre_producto: item.nombre,
            imagen_producto: item.imagen,
            precio_unitario: item.precio_normal,
            cantidad: item.cantidad,
            subtotal: item.precio_normal * item.cantidad
          }));

          const resDetalles = await fetch("http://localhost:5000/api/detalle_pedido", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(detalles),
          });

          if (!resDetalles.ok) throw new Error("Error al guardar detalles");

          localStorage.setItem("pedido_id", pedidoId);
          window.location.href = "../vistas/ticket.html";
        })
        .catch(err => {
          console.error("Error al registrar el pedido:", err);
          alert("Ocurrió un error al guardar el pedido.");
        });
      }
    });
}

renderCarrito();
ordenar();
vaciarCarrito();