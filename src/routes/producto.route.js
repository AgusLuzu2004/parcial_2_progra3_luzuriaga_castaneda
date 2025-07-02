//router
import {Router} from "express";
import {getAllProductos, createProducto, updateProducto, deleteProducto} from "../controllers/producto.controller.js";

const productoRouter = Router();

productoRouter.get("/", getAllProductos);
productoRouter.post("/", createProducto);
productoRouter.put("/:id", updateProducto);
productoRouter.put("/desactivar/:id", deleteProducto);

export default productoRouter;