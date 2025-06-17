import { Router } from "express";
import { pedidosController, pedidoDetalleController } from "../controllers/pedidos.controller.js";

const pedidosRouter = Router();
pedidosRouter.post("/", pedidosController.guardar);

const detallePedidoRouter = Router();
detallePedidoRouter.post("/", pedidoDetalleController.guardarDetalle);

export { pedidosRouter, detallePedidoRouter };
