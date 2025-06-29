import { Router } from "express";
import {getAllProductos,createProducto,deleteLogical,updateProducto} from "../controllers/producto.controller.js";


const router = Router();
router.get("/", getAllProductos);
router.post('/',createProducto);
router.put('/desactivar/:id',deleteLogical);
router.put('/:id',updateProducto)


export default router;