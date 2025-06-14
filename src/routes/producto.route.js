import { Router } from "express";
import productosController from "../controllers/producto.controller.js";
const router = Router();

router.get("/", productosController.getAll);


export default router;