<<<<<<< HEAD
import express from "express";
import path from "path";
import {__dirname} from "./utils/index.js";
import pedidosRouter from "./routes/pedidos.route.js";
import productosRouter from "./routes/producto.route.js";
import detallePedidoRouter from "./routes/detalle_pedido.route.js";
import sequelize from "./config/db-sequelize.js";
import envs from "./config/envs.js";
import cors from "cors";

//settings
const app = express();
app.set("PORT", envs.port || 5000);

const initializeConnection = async () => {
    try {
        await sequelize.sync();
        console.log("Database sincronizada");
        
    } catch (error) {
        console.error(error);
    }
};

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend"))); //da acceso a todos los archivos 
app.use("/img", express.static(path.join(__dirname, "/public/img")));
app.use(express.urlencoded({extended: true}));

app.use(cors({
  origin: "http://127.0.0.1:5500"
}));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/vistas/login.html"));
});

app.get("/productos", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/vistas/listadoProductos.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/vistas/carrito.html"));
});

app.get("/ticket", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/vistas/ticket.html"));
});

app.use("/api/pedidos", pedidosRouter);
app.use("/api/productos", productosRouter);
app.use("/api/detalle_pedido", detallePedidoRouter);

//listeners
initializeConnection();
app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
=======
import express from 'express'
import path from "path";
import url from "url";
import productosRouter from "./routes/producto.route.js";
//import DetallePedido from './models/detalle_pedido.model.js';
// import { pedidosRouter, detallePedidoRouter } from "./routes/pedidos.route.js";
import DetallePedido from './routes/detalle_pedido.route.js';
import pedidosRoute from "./routes/pedidos.route.js";
import envs from './config/envs.js'
import sequelize from './config/db-sequelize.js';

//setting
const app= express()


app.set("PORT", envs.port || 5000)
const initializeConnection =  async ()=>{
  try {
    await sequelize.sync()
    console.log("Database sincronizada")
  } catch (error) {
    console.log(error);
  }
}
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



//middlewares
//tengo que configurar que mi app acepte json
app.use(express.json())  // Envia recibe json manejarlos
app.use(express.static(path.join(__dirname, "../frontend"))); //da acceso a todos los archivos
app.use('/img', express.static(path.join(__dirname, '/public/img')));
app.use(express.urlencoded({extended: true})); // me permite obtener la informacion de formularios thunderclient postman




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





app.use("/api/detalle_pedido",DetallePedido)
app.use("/api/productos", productosRouter);
app.use("/api/pedidos", pedidosRoute); // desde esta api hace get , put, update, post
// app.use("/api/detalle-pedido", detallePedidoRouter); 



initializeConnection()
//listener
app.listen(app.get("PORT"), ()=>{
    console.log(`Servidor corriendo en http://localhost:${app.get("PORT")}`)
})
>>>>>>> Retomando
