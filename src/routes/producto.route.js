<<<<<<< HEAD
//router
import {Router} from "express";
import {getAllProductos, createProducto, updateProducto, deleteProducto} from "../controllers/producto.controller.js";

const productoRouter = Router();

productoRouter.get("/", getAllProductos);
productoRouter.post("/", createProducto);
productoRouter.put("/:id", updateProducto);
productoRouter.put("/desactivar/:id", deleteProducto);

export default productoRouter;
=======
import { Router } from "express";
import {getAllProductos,createProducto,deleteLogical,updateProducto} from "../controllers/producto.controller.js";


const router = Router();
router.get("/", getAllProductos);
router.post('/',createProducto);
router.put('/desactivar/:id',deleteLogical);
router.put('/:id',updateProducto)


export default router;
>>>>>>> Retomando
