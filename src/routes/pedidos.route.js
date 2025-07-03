//router
import {Router} from "express";
import {getAllPedidos, createPedido, findPedido, updatePedido} from "../controllers/pedidos.controller.js";

const pedidosRouter = Router();

pedidosRouter.get("/", getAllPedidos);
pedidosRouter.get("/:id", findPedido);
pedidosRouter.post("/", createPedido);
pedidosRouter.put("/:id", updatePedido);

export default pedidosRouter;