import { Router } from "express";
// import { pedidosController, pedidoDetalleController } from "../controllers/pedidos.controller.js";

import {getAllPedidos,createPedido,findPedido,updatePedido} from "../controllers/pedidos.controller.js"

const router = Router();
router.get('/',getAllPedidos);
router.post('/',createPedido);
router.get('/:id',findPedido)
router.put('/:id',updatePedido)

// la api en el app.js esta comentada
// router.post('/',createProducto)
// router.put('/:id',updateProducto)

export default router;

// const pedidosRouter = Router();
// pedidosRouter.post("/", pedidosController.guardar);

// const detallePedidoRouter = Router();
// detallePedidoRouter.post("/", pedidoDetalleController.guardarDetalle);

// export { pedidosRouter, detallePedidoRouter };
