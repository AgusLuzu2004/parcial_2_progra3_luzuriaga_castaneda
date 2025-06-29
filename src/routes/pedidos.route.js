import { Router } from "express";
// import { pedidosController, pedidoDetalleController } from "../controllers/pedidos.controller.js";

import {getAllPedidos} from "../controllers/pedidos.controller.js"


const router = Router();
router.get('/',getAllPedidos);

export default router;

// const pedidosRouter = Router();
// pedidosRouter.post("/", pedidosController.guardar);

// const detallePedidoRouter = Router();
// detallePedidoRouter.post("/", pedidoDetalleController.guardarDetalle);

// export { pedidosRouter, detallePedidoRouter };
