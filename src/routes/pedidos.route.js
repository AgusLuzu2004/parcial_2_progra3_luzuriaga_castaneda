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
    getAllPedidosWithQuery,
    createPedido,
    findPedidoById,
    updatePedido,
    getAllDetallePedido,
    getAllDetallePedidoWithQuery,
    createDetallePedidos,
    findDetallePedidoById,
    updateDetallePedidos
} from "../controllers/pedidos.controller.js";

const pedidosRouter = Router();
const detallePedidoRouter = Router();

pedidosRouter.get("/", getAllPedidos);
pedidosRouter.get("/search", getAllPedidosWithQuery);
pedidosRouter.get("/:id", findPedidoById);
pedidosRouter.post("/", createPedido);
pedidosRouter.put("/:id", updatePedido);
detallePedidoRouter.get("/", getAllDetallePedido);
detallePedidoRouter.get("/search", getAllDetallePedidoWithQuery);
detallePedidoRouter.get("/:id", findDetallePedidoById);
detallePedidoRouter.post("/", createDetallePedidos);
detallePedidoRouter.put("/:id", updateDetallePedidos);

export default pedidosRouter; detallePedidoRouter;