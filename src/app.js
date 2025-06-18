import express from 'express'
import path from "path";
import url from "url";

import productosRouter from "./routes/producto.route.js";
import { pedidosRouter, detallePedidoRouter } from "./routes/pedidos.route.js";
//setting
const app= express()
app.set("PORT",5000)

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)


//middlewares
//tengo que configurar que mi app acepte json
app.use(express.json())  // Envia recibe json manejarlos
app.use(express.static(path.join(__dirname, "../frontend"))); //da acceso a todos los archivos 
app.use('/img', express.static(path.join(__dirname, '/public/img')));





// routes
app.get("/", (req, res) => {
  //   res.status(200).send("pagina principal");
   res.sendFile(path.join(__dirname, "../frontend/vistas/login.html"));
});

app.get("/productos", (req, res) => {
  //   res.status(200).send("pagina principal");
   res.sendFile(path.join(__dirname, "../frontend/vistas/listadoProductos.html"));
});

app.get("/carrito", (req, res) => {
  //   res.status(200).send("pagina principal");
   res.sendFile(path.join(__dirname, "../frontend/vistas/carrito.html"));
});


app.get("/ticket", (req, res) => {
  //   res.status(200).send("pagina principal");
   res.sendFile(path.join(__dirname, "../frontend/vistas/ticket.html"));
});






app.use("/api/productos", productosRouter);
app.use("/api/pedido", pedidosRouter);
app.use("/api/detalle-pedido", detallePedidoRouter); 


//listener
app.listen(app.get("PORT"), ()=>{
    console.log(`Servidor corriendo en http://localhost:${app.get("PORT")}`)
})