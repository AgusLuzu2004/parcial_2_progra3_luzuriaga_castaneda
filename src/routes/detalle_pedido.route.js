import { Router } from "express";
import {listarDetallesPorPedido, crearDetalle } from "../controllers/detalle_pedido.controller.js";

const router = Router();

router.get("/:pedidoId", listarDetallesPorPedido);
router.post("/", crearDetalle);

export default router;