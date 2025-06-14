import express from 'express'
import path from "path";
import url from "url";


//setting
const app= express()
app.set("PORT",5000)

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)


//middlewares
//tengo que configurar que mi app acepte json
app.use(express.json())  // Envia recibe json manejarlos


//routes rutas importadas de otros archivos
//app.use('/api/users',userRoutes);


// middlewares
app.use(express.static(path.join(__dirname, "../frontend/vistas")));//revision

// routes
app.get("/", (req, res) => {
  //   res.status(200).send("pagina principal");
   res.sendFile(path.join(__dirname, "../frontend/vistas/login.html"));
});

app.use("/api/productos", productosRouter);

app.get("/productos", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../frontend/vistas/listadoProductos.html"));

});


//listener
app.listen(app.get("PORT"), ()=>{
    console.log(`Servidor corriendo en http://localhost:${app.get("PORT")}`)
})