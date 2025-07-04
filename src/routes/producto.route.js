//router
import {Router} from "express";
import {getAllProductos, createProducto, updateProducto, deleteProducto,findProducto} from "../controllers/producto.controller.js";

const productoRouter = Router();

productoRouter.get("/", getAllProductos);
productoRouter.get('/:id', findProducto);
productoRouter.post("/", createProducto);
productoRouter.put("/:id", updateProducto);
productoRouter.put("/desactivar/:id", deleteProducto);

export default productoRouter;