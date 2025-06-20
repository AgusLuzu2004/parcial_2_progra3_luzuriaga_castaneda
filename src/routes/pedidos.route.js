// import {Router} from "express";
// import {pedidosController, pedidoDetalleController} from "../controllers/pedidos.controller.js";

// const pedidosRouter = Router();
// pedidosRouter.post("/", pedidosController.guardar);

// const detallePedidoRouter = Router();
// detallePedidoRouter.post("/", pedidoDetalleController.guardarDetalle);

// export {pedidosRouter, detallePedidoRouter};

//router
import {Router} from "express";
import {
    getAllPedidos,
    createPedido,
    findPedidoById,
    getAllDetallePedido,
    createDetallePedidos,
    findDetallePedidoById
} from "../controllers/pedidos.controller.js";

const pedidosRouter = Router();
const detallePedidoRouter = Router();

pedidosRouter.get("/", getAllPedidos);
pedidosRouter.get("/:id", findPedidoById);
pedidosRouter.post("/", createPedido);
detallePedidoRouter.get("/", getAllDetallePedido);
detallePedidoRouter.get("/:id", findDetallePedidoById);
detallePedidoRouter.post("/", createDetallePedidos);

export default pedidosRouter; detallePedidoRouter;