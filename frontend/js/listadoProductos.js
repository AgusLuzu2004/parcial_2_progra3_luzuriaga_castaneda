


console.log("conectado")



function cargaInicial(productos) {
  const listaProductos = document.querySelector('.product-grid');
  const cartCant = document.querySelector('.cart-badge');
  const subtotalAcum = document.querySelector('.carritoAcum')

  listaProductos.innerHTML = "";

  productos.forEach((p) => {
    const div = document.createElement('div');
    div.className = "product-card";

    // Buscamos si este producto ya está en el carrito
    const itemEnCarrito = carrito.find(prod => prod.id === p.id);
    const cantidad = itemEnCarrito ? itemEnCarrito.cantidad : 0;

    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
      <button class="add-to-cart">Agregar a carrito <span class="cantidades bg-dark fs-5">${cantidad}</span></button>
    `;

    listaProductos.appendChild(div);

    const agregar = div.querySelector('.add-to-cart');
    const spanCantidad = div.querySelector('.cantidades');

    agregar.addEventListener('click', () => {
      agregarCarrito(p);
      const actualizado = carrito.find(prod => prod.id === p.id);
      spanCantidad.textContent = actualizado ? actualizado.cantidad : 0;
      cartCant.textContent = carrito.reduce((acc, va) => acc + va.cantidad, 0);
      subtotalAcum.textContent = carrito.reduce((acc,va) => acc + (va.precio * va.cantidad),0);
    });
  });

  // Al final de cargar productos, actualizá el badge del carrito
  cartCant.textContent = carrito.reduce((acc, va) => acc + va.cantidad, 0);
}


function agregarCarrito(producto) {
  const itemEnCarrito = carrito.find(p => p.id === producto.id);
  if (itemEnCarrito) {

    itemEnCarrito.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1,img: producto.img});
  }

  guardarCarritoLS();
  //renderCarrito();
}


/*  
    Punto 4 _________________________

    Crea la función `filtro()` para filtrar los productos por nombre.
    - Asocia esta función al evento `keyup` de un campo `<input>`.
    - Cada vez que se escriba una letra, deben mostrarse solo los productos que coincidan con el texto ingresado.
*/

function filtro(productos){
  const input = document.querySelector('input');
  input.addEventListener("keyup", (e)=>{
    const valorBuscado= e.target.value.toLowerCase().trim();

    if (valorBuscado.length >2){
      const filtrado = productos.filter(p => p.nombre.includes(valorBuscado));
      cargaInicial(filtrado);
    }else{
      cargaInicial(productos);
    }
  })
  
}


// Guarda el carrito 
function guardarCarritoLS() {
  localStorage.setItem("cart", JSON.stringify(carrito));
}


function bienvenida(){
  const spanBienvenida = document.querySelector('.bienvenida');
  spanBienvenida.textContent = `Bienvenido ${localStorage.getItem('nombre')}`;
}


// Función inicializadora
function init() {
  carrito = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(carrito);
  fetch("db.json")
    .then(res => res.json())
    .then(productos => {
      console.log(productos);
      bienvenida();
      cargaInicial(productos);
      filtro(productos);
      renderCarrito();

    });
}

init();