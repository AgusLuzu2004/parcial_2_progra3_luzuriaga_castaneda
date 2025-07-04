console.log("conectado");

let productosGlobal = [];
let paginaActual = 1;
const productosPorPagina = 6;

function cargaInicial(productos) {
  const listaProductos = document.querySelector('.product-grid');
  const cartCant = document.querySelector('.cart-badge');
  const subtotalAcum = document.querySelector('.carritoAcum');

  listaProductos.innerHTML = "";

  const productosActivos = productos.filter(p => p.activo === true || p.activo === 1);

  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productosActivos.slice(inicio, fin);

  productosPagina.forEach((p) => {
    const div = document.createElement('div');
    div.className = "product-card";

    // Buscamos si este producto ya está en el carrito
    const itemEnCarrito = carrito.find(prod => prod.id === p.id);
    const cantidad = itemEnCarrito ? itemEnCarrito.cantidad: 0;

  //    {
  //   "id": 1,
  //   "sku": "RLPRP22062",
  //   "nombre": "Reloj De Pared River Plate (28Cm)  Rjpar-Rp01",
  //   "activo": 1,
  //   "precio_normal": 10100,
  //   "categoria": "River plate",
  //   "imagen": "/img/producto_9532_1.jpg"
  // },

    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre} - ${p.categoria}</h3>
      <p>$${p.precio_normal}</p>
      <button class="add-to-cart">Agregar a carrito <span class="cantidades bg-dark fs-5">${cantidad}</span></button>
    `;

    listaProductos.appendChild(div);

    const agregar = div.querySelector('.add-to-cart');
    const spanCantidad = div.querySelector('.cantidades');

    agregar.addEventListener('click', () => {
      agregarCarrito(p);
      const actualizado = carrito.find(prod => prod.id === p.id);
      spanCantidad.textContent = actualizado ? actualizado.cantidad: 0;
      cartCant.textContent = carrito.reduce((acc, va) => acc + va.cantidad, 0);
      const subtotal = carrito.reduce((acc, va) => acc + (va.precio_normal * va.cantidad), 0);
      subtotalAcum.textContent = subtotal;
      localStorage.setItem('subtotal', subtotal);
    });
  });

  // Al final de cargar productos, actualizá el badge del carrito
  cartCant.textContent = carrito.reduce((acc, va) => acc + va.cantidad, 0);
  const subtotalGuardado = localStorage.getItem('subtotal');
  if (subtotalGuardado && subtotalAcum) {
    subtotalAcum.textContent = subtotalGuardado;
  }

  renderPaginador(productos);

}

function agregarCarrito(producto) {
  const itemEnCarrito = carrito.find(p => p.id === producto.id);
  if (itemEnCarrito) {

    itemEnCarrito.cantidad += 1;
  } else {
    carrito.push({...producto, cantidad: 1,img: producto.imagen});
  }

  guardarCarritoLS();
  //renderCarrito();
}

function renderPaginador(productos) {
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  let paginador = document.querySelector('.paginador');

  if (!paginador) {
    paginador = document.createElement('div');
    paginador.className = "paginador d-flex justify-content-center mt-4 gap-2";
    document.querySelector('main').appendChild(paginador);
  }

  paginador.innerHTML = "";

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement('button');
    btn.className = "btn btn-outline-primary";
    btn.textContent = i;
    if (i === paginaActual) btn.classList.add('active');
    btn.addEventListener('click', () => {
      paginaActual = i;
      cargaInicial(productosGlobal, i);
    });
    paginador.appendChild(btn);
  }
}

/*  
    Punto 4 _________________________

    Crea la función `filtro()` para filtrar los productos por nombre.
    - Asocia esta función al evento `keyup` de un campo `<input>`.
    - Cada vez que se escriba una letra, deben mostrarse solo los productos que coincidan con el texto ingresado.
*/

function filtro(productos) {
  const categoriaRiver = document.querySelector(".river");
  const categoriaBoca = document.querySelector(".boca");
  const sinFiltro = document.querySelector(".allProducts")

  categoriaRiver.addEventListener("click", () => {
    const filtrados = productos.filter(p => p.categoria.toLowerCase() === "river plate");
    cargaInicial(filtrados);
  });

  categoriaBoca.addEventListener("click", () => {
    const filtrados = productos.filter(p => p.categoria.toLowerCase() === "boca juniors");
    cargaInicial(filtrados);
  });

  sinFiltro.addEventListener("click", () => {
    cargaInicial(productos)
  });
  
}

function vaciarCarrito(){
  localStorage.clear();
  carrito = [];
  guardarCarritoLS();
}

function salir(){
  const btnSalir = document.querySelector('.salir');

  btnSalir.addEventListener('click', () => {
    const confirmacion = confirm('Seguro que deseas salir tu orden se perdera');
    if (confirmacion) {
      vaciarCarrito();
      window.location.href = "/";
    }
  });
}

// Guarda el carrito 
function guardarCarritoLS() {
  localStorage.setItem("cart", JSON.stringify(carrito));
}

function bienvenida() {
  const spanBienvenida = document.querySelector('.bienvenida');
  spanBienvenida.textContent = `Bienvenido ${localStorage.getItem('nombre')}`;
}

// Función inicializadora
function init() {
  carrito = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(carrito);
  fetch("http://localhost:5000/api/productos")
    .then(res => res.json())
    .then(productos => {
      filtro(productos.payload)
      bienvenida();
      productosGlobal = productos.payload;
      cargaInicial(productosGlobal, 1);
      salir();
      // filtro(productos);
      //renderCarrito();
    });
}

init();