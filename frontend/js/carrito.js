let carrito = JSON.parse(localStorage.getItem("cart"));

renderCarrito();

function renderCarrito(){

  const contenedor = document.getElementById('cart-items');
  contenedor.innerHTML = "";

  const total = document.querySelector('#total-price');
  const contaritem = document.querySelector('#cart-count');
  let acum = 0; // inicializamos
  //let cont = 0; // inicializamos

  

  carrito.forEach((p)=>{
    acum += p.precio * p.cantidad;
    //cont +=1;
    

    const lista = document.createElement('div');
lista.className = "contenedorItems item-block d-flex flex-wrap align-items-center justify-content-between";

lista.innerHTML = `
  <img src="${p.img}" alt="${p.nombre}" class="img-carrito mb-2 mb-md-0" style="width: 100px; height: 100px; object-fit: fill;">
  <p class="item-name flex-grow-1 mb-2 mb-md-0 mx-3">${p.nombre}</p>
  <p class="mb-2 mb-md-0 mx-3">$${p.precio}</p>
  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">-</button>
  <p class="mb-2 mb-md-0 mx-3">${p.cantidad}</p>
  <button type="button" class="btn btn-success">+</button>
</div>
  
  <p class="mb-2 mb-md-0 mx-3">$${p.precio * p.cantidad}</p>
  <button class="delete-button btn btn-danger btn-sm mb-2 mb-md-0">Eliminar</button>
`;

    contenedor.appendChild(lista);

    const btnDelete = lista.querySelector(".delete-button");
    btnDelete.addEventListener("click",()=> eliminar(p));
  });



  const btnVaciar = document.createElement('button');
  btnVaciar.textContent = "Vaciar carrito"
  btnVaciar.className = "delete-button"
  contenedor.appendChild(btnVaciar);
  btnVaciar.addEventListener("click", ()=> vaciarCarrito());


  const btnFinalizarCompra = document.createElement('button');
  btnFinalizarCompra.textContent = "Finalizar compra";
  btnFinalizarCompra.className = "btn btn-success";
  contenedor.appendChild(btnFinalizarCompra);
  btnFinalizarCompra.addEventListener("click", ()=> finalizarCompra());
  


  total.textContent = acum;
  contaritem.textContent = carrito.length;
  guardarCarritoLS();
}


function eliminar(producto){
  producto.cantidad--;
  if (producto.cantidad <= 0) {
    const indice = carrito.indexOf(producto);
    if (indice !== -1) {
      carrito.splice(indice, 1);
    }
  }
  
  guardarCarritoLS();
  renderCarrito();
}

/*  
    Punto 6 _________________________

    Guarda los productos del carrito en `localStorage`.
    - Asegúrate de que al recargar la página el carrito se recupere automáticamente desde `localStorage`.
*/
// Guarda el carrito 
function guardarCarritoLS() {
  localStorage.setItem("cart", JSON.stringify(carrito));
}

/* Punto 7 _________________________

    Gestión de Cantidades en el Carrito:

    Hasta ahora, cada vez que un usuario agrega un producto al carrito, este aparece como un nuevo elemento, incluso si ya está en la lista. Para optimizar la gestión del carrito, se requiere una mejora fundamental:

    * **Si un producto ya se encuentra en el carrito**, su **cantidad debe incrementarse** en lugar de duplicarlo.
    * La **visualización de los productos en el carrito** debe reflejar esta cantidad (por ejemplo, "Nombre Producto - $Precio x Cantidad").
    * La funcionalidad para **eliminar productos del carrito** debe adaptarse para gestionar estas cantidades: si la cantidad es mayor a uno, debe decrementarse; solo debe eliminarse completamente si su cantidad es uno.
    * **Considerá si es necesario modificar la estructura de tus datos (por ejemplo, en el `db.json`) para facilitar esta funcionalidad.**
*/



/* Punto 8 _________________________

    Cálculo y Visualización del Total del Carrito:

    Para proporcionar una visión clara del costo total de la compra, se necesita implementar un **cálculo dinámico del total del carrito**.

    * Este total debe **actualizarse en tiempo real** cada vez que se agreguen, eliminen o modifiquen cantidades de productos en el carrito.
    * El valor total debe **mostrar el total calculado** en el elemento HTML destinado para ello (por ejemplo, el `div` que ya poseen).
*/

/* Punto 9 _________________________

    Funcionalidad "Vaciar Carrito":

    Ofrece al usuario la comodidad de poder **vaciar todo el carrito** con una sola acción.

    * Implementa un **botón** que, al ser presionado, elimine todos los productos del carrito y reinicie el total.
*/

function vaciarCarrito(){
  carrito =[];
  guardarCarritoLS();
  renderCarrito();
}

/* Punto 10 _________________________

    Persistencia Avanzada del Carrito:

    Es crucial que el estado completo del carrito se mantenga incluso después de que el usuario recargue la página.

    * Asegurate de que la **cantidad de cada producto y el total del carrito** se **guarden y recuperen correctamente** desde `localStorage` al cargar la página. La información debe ser persistente en su totalidad.
*/




/* Punto 11 _________________________

    Botón "Finalizar Compra":

    Agrega un botón en la interfaz del carrito que permita al usuario finalizar su compra.

    * Al hacer clic en este botón, debe mostrarse una **alerta** con el mensaje "Tu pedido está siendo procesado".
    * Inmediatamente después de mostrar la alerta, el **carrito debe vaciarse** por completo (tanto visualmente como en `localStorage`).
*/

function finalizarCompra(){
  if(carrito.length ===0){
      alert("No tienes productos en el carrito");
    }else{
      alert("Tu pedido esta siendo procesado")
      vaciarCarrito();
    }
}
