//router
import {Router} from "express";
import {getAllProductos, createProducto, updateProducto, deleteProducto, findProducto} from "../controllers/producto.controller.js";
import upload from "../middlewares/uploadImg.js";

const productoRouter = Router();

productoRouter.get("/", getAllProductos);
productoRouter.get('/:id', findProducto);
productoRouter.post("/", upload.single("imagen"), createProducto);
productoRouter.put("/:id", upload.single("imagen"), updateProducto);
productoRouter.put("/desactivar/:id", deleteProducto);

export default productoRouter;