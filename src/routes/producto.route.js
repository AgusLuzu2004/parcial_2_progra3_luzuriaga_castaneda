// import {Router} from "express";
// import productosController from "../controllers/producto.controller.js";
// const router = Router();

// router.get("/", productosController.getAll);

// export default router;

//router
import {Router} from "express";
import {
    getAllProducto,
    createProducto,
    findProductoById,
} from "../controllers/producto.controller.js";

const productoRouter = Router();

productoRouter.get("/", getAllProducto);
productoRouter.get("/:id", findProductoById);
productoRouter.post("/", createProducto);

export default productoRouter;