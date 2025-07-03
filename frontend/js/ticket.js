<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", async () => {
    const pedidoId = localStorage.getItem("pedido_id");
    if (!pedidoId) {
        alert("No se encontró el ID del pedido");
        return;
    }

=======

  document.addEventListener("DOMContentLoaded", async () => {
    const pedidoId = localStorage.getItem("pedido_id");
    if (!pedidoId) {
      alert("No se encontró el ID del pedido");
      return;
    }

   


>>>>>>> Retomando
    // Mostrar el ID del pedido
    document.getElementById("pedido-id").textContent = "#" + pedidoId;

    try {
<<<<<<< HEAD
        // 1️⃣ Obtener datos generales del pedido
        const resPedido = await fetch(`http://localhost:5000/api/pedidos/${pedidoId}`);
        if (!resPedido.ok) throw new Error("No se pudo cargar el pedido");

        const dataPedido = await resPedido.json();
        const pedido = dataPedido.payload;
        console.log(pedido);

        // Mostrar cliente
        document.getElementById("pedido-nombre").textContent = pedido.cliente;

        // Formatear fecha a dd/mm/aaaa
        const fecha = new Date(pedido.fecha);
        const fechaFormateada = fecha.toLocaleDateString("es-ES");
        // Si querés solo fecha, sin hora, usa arriba. Si necesitas hora también, usa toLocaleString()

        // Mostrar fecha (podés crear un span en el HTML para mostrar fecha si querés)
        // Ejemplo: <strong>Fecha:</strong> <span id="pedido-fecha"></span>
        // Aquí lo agregamos al mismo div si querés:
        const divDatos = document.querySelector(".card-body > div.mb-3");
        if (!document.getElementById("pedido-fecha")) {
            const spanFecha = document.createElement("div");
            spanFecha.innerHTML = `<strong>Fecha:</strong> <span id="pedido-fecha">${fechaFormateada}</span>`;
            divDatos.appendChild(spanFecha);
        } else {
            document.getElementById("pedido-fecha").textContent = fechaFormateada;
        }

        // Mostrar total (igual que abajo, lo ponemos aquí para no pisar luego)
        document.getElementById("total-general").textContent = "$" + pedido.total.toLocaleString();

        // 2️⃣ Obtener detalles del pedido para la tabla
        const resDetalles = await fetch(`http://localhost:5000/api/detalle_pedido/${pedidoId}`);
        if (!resDetalles.ok) throw new Error("No se pudieron cargar los detalles");

        const dataDetalles = await resDetalles.json();
        const detalles = dataDetalles.payload;

        const tbody = document.getElementById("detalle-productos");
        tbody.innerHTML = "";

        let totalCalc = 0;
        detalles.forEach(item => {
            const subtotal = item.precio_unitario * item.cantidad;
            totalCalc += subtotal;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><img src="${item.imagen_producto}" alt="${item.nombre_producto}" class="img-prod"></td>
                <td>${item.nombre_producto}</td>
                <td>${item.cantidad}</td>
                <td>$${item.precio_unitario.toLocaleString()}</td>
                <td>$${subtotal.toLocaleString()}</td>
            `;
            tbody.appendChild(tr);
        });

        // Solo si querés recalcular total basado en detalles (opcional)
        // document.getElementById("total-general").textContent = "$" + totalCalc.toLocaleString();

    } catch (error) {
        console.error("Error cargando el pedido o sus detalles:", error);
        alert("Error al cargar el pedido.");
    }
});

const btnsalir = document.querySelector(".reiniciar");
btnsalir.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "http://localhost:5000/";
});

function borrarLS() {
    localStorage.clear();
}

function reiniciar() {
    setTimeout(() => {
        borrarLS();
        window.location.href = "http://localhost:5000/";
    }, 60000); // 60000 milisegundos = 1 minuto
}

reiniciar();
=======
      // 1️⃣ Obtener datos generales del pedido
      const resPedido = await fetch(`http://localhost:5000/api/pedidos/${pedidoId}`);
      if (!resPedido.ok) throw new Error("No se pudo cargar el pedido");

      const dataPedido = await resPedido.json();
      const pedido = dataPedido.payload;
      console.log(pedido);

      // Mostrar cliente
      document.getElementById("pedido-nombre").textContent = pedido.cliente;

      // Formatear fecha a dd/mm/aaaa
      const fecha = new Date(pedido.fecha);
      const fechaFormateada = fecha.toLocaleDateString("es-ES");
      // Si querés solo fecha, sin hora, usa arriba. Si necesitas hora también, usa toLocaleString()

      // Mostrar fecha (podés crear un span en el HTML para mostrar fecha si querés)
      // Ejemplo: <strong>Fecha:</strong> <span id="pedido-fecha"></span>
      // Aquí lo agregamos al mismo div si querés:
      const divDatos = document.querySelector(".card-body > div.mb-3");
      if (!document.getElementById("pedido-fecha")) {
        const spanFecha = document.createElement("div");
        spanFecha.innerHTML = `<strong>Fecha:</strong> <span id="pedido-fecha">${fechaFormateada}</span>`;
        divDatos.appendChild(spanFecha);
      } else {
        document.getElementById("pedido-fecha").textContent = fechaFormateada;
      }

      // Mostrar total (igual que abajo, lo ponemos aquí para no pisar luego)
      document.getElementById("total-general").textContent = "$" + pedido.total.toLocaleString();

      // 2️⃣ Obtener detalles del pedido para la tabla
      const resDetalles = await fetch(`http://localhost:5000/api/detalle_pedido/${pedidoId}`);
      if (!resDetalles.ok) throw new Error("No se pudieron cargar los detalles");

      const dataDetalles = await resDetalles.json();
      const detalles = dataDetalles.payload;

      const tbody = document.getElementById("detalle-productos");
      tbody.innerHTML = "";

      let totalCalc = 0;
      detalles.forEach(item => {
        const subtotal = item.precio_unitario * item.cantidad;
        totalCalc += subtotal;

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><img src="${item.imagen_producto}" alt="${item.nombre_producto}" class="img-prod"></td>
          <td>${item.nombre_producto}</td>
          <td>${item.cantidad}</td>
          <td>$${item.precio_unitario.toLocaleString()}</td>
          <td>$${subtotal.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
      });

      // Solo si querés recalcular total basado en detalles (opcional)
      // document.getElementById("total-general").textContent = "$" + totalCalc.toLocaleString();

    } catch (error) {
      console.error("Error cargando el pedido o sus detalles:", error);
      alert("Error al cargar el pedido.");
    }
  });


   const btnsalir = document.querySelector(".reiniciar");
    btnsalir.addEventListener("click",()=>{
        localStorage.clear();
        window.location.href = "http://localhost:5000/";
    })

function borrarLS(){
    localStorage.clear();
}


function reiniciar(){
    setTimeout(() => {
    borrarLS();
    window.location.href = "http://localhost:5000/";
}, 60000); // 60000 milisegundos = 1 minuto
}
>>>>>>> Retomando
