import { Router } from "express";
import {listarDetallesPorPedido, crearDetalle} from "../controllers/detalle_pedido.controller.js";

const detallePedidoRouter = Router();

detallePedidoRouter.get("/:pedidoId", listarDetallesPorPedido);
detallePedidoRouter.post("/", crearDetalle);

export default detallePedidoRouter;