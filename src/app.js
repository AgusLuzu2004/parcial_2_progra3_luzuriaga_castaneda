// import express from "express";
// import path from "path";
// import url from "url";

// import productosRouter from "./routes/producto.route.js";
// import {pedidosRouter, detallePedidoRouter} from "./routes/pedidos.route.js";
// //setting
// const app = express();
// app.set("PORT", process.env.PORT);

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(__dirname)

// //middlewares
// //tengo que configurar que mi app acepte json
// app.use(express.json())  // Envia recibe json manejarlos
// app.use(express.static(path.join(__dirname, "../frontend"))); //da acceso a todos los archivos 
// app.use('/img', express.static(path.join(__dirname, '/public/img')));

// // routes
// app.get("/", (req, res) => {
//   //   res.status(200).send("pagina principal");
//   res.sendFile(path.join(__dirname, "../frontend/vistas/login.html"));
// });

// app.get("/productos", (req, res) => {
//   //   res.status(200).send("pagina principal");
//   res.sendFile(path.join(__dirname, "../frontend/vistas/listadoProductos.html"));
// });

// app.get("/carrito", (req, res) => {
//   //   res.status(200).send("pagina principal");
//   res.sendFile(path.join(__dirname, "../frontend/vistas/carrito.html"));
// });

// app.get("/ticket", (req, res) => {
//   //   res.status(200).send("pagina principal");
//   res.sendFile(path.join(__dirname, "../frontend/vistas/ticket.html"));
// });

// app.use("/api/productos", productosRouter);
// app.use("/api/pedido", pedidosRouter);
// app.use("/api/detalle-pedido", detallePedidoRouter); 

// //listener
// app.listen(app.get("PORT"), () => {
//     console.log(`Servidor corriendo en http://localhost:${app.get("PORT")}`);
// });

import express from "express";
import path from "path";
import url from "url";
import {join, __dirname} from "./utils/index.js";
import pedidosRouter from "./routes/pedidos.route.js";
import detallePedidoRouter from "./routes/pedidos.route.js";
import productoRouter from "./routes/producto.route.js";
import sequelize from "./config/db-sequelize.js";
import envs from "./config/envs.js";
//settings
const app = express();
app.set("PORT", envs.port || 5000);

const initializeConnection = async () => {
    try {
        await sequelize.sync()
        console.log("Database sincronizada");
        
    } catch (error) {
        console.error(error)
    }
}

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend"))); //da acceso a todos los archivos 
app.use("/img", express.static(path.join(__dirname, "/public/img")));
app.use(express.urlencoded({extended: true}));

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

app.use("/api/productos", productoRouter);
app.use("/api/pedido", pedidosRouter);
app.use("/api/detalle-pedido", detallePedidoRouter); 

//listeners
initializeConnection();
app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
});