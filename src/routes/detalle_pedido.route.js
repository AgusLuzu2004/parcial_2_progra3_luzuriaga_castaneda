import { Router } from "express";
<<<<<<< HEAD
import {listarDetallesPorPedido, crearDetalle} from "../controllers/detalle_pedido.controller.js";

const detallePedidoRouter = Router();

detallePedidoRouter.get("/:pedidoId", listarDetallesPorPedido);
detallePedidoRouter.post("/", crearDetalle);

export default detallePedidoRouter;
=======
import {listarDetallesPorPedido, crearDetalle } from "../controllers/detalle_pedido.controller.js";

const router = Router();

router.get("/:pedidoId", listarDetallesPorPedido);
router.post("/", crearDetalle);

export default router;
>>>>>>> Retomando
