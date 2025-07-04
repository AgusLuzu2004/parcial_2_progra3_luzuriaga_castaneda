import express from "express";
import path from "path";
import {__dirname} from "./utils/index.js";
import pedidosRouter from "./routes/pedidos.route.js";
import productosRouter from "./routes/producto.route.js";
import detallePedidoRouter from "./routes/detalle_pedido.route.js";
import sequelize from "./config/db-sequelize.js";
import envs from "./config/envs.js";
import cors from "cors";
import adminRoutes from './routes/user_admin.route.js';

//settings
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "public/views"));
console.log(__dirname);

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
  origin: "*"
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
app.use('/api/admin', adminRoutes);

app.get('/admin/dashboard', async (req, res) => {
  try {
    const response = await fetch("http://localhost:5000/api/productos");
    const data = await response.json();
    const productos = data.payload || [];
    res.render('dashboard_admin', {
      usuario: 'admin123',
      productos
    });
  } catch (error) {
    console.error("Error al cargar productos:", error);
    res.status(500).send("Error al cargar el dashboard");
  }
});

<<<<<<< HEAD

app.get('/admin/productos/:id/editar', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`http://localhost:5000/api/productos/${id}`);
    const result = await response.json();

    const producto = result.payload;

    res.render('modificar_producto', { producto });
  } catch (error) {
    console.error("❌ Error al obtener producto:", error.message);
    res.status(500).send("Error al obtener el producto");
  }
});




=======
>>>>>>> f3b66a0f85dafdee3be3c1a80e2751e1afde4e60
//listeners
initializeConnection();
app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
});