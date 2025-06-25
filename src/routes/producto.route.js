// import {Router} from "express";
// import productosController from "../controllers/producto.controller.js";
// const router = Router();

// router.get("/", productosController.getAll);

// export default router;

//router
import {Router} from "express";
import {
    getAllProducto,
    getAllProductoWithQuery,
    createProducto,
    findProductoById,
    updateProducto
} from "../controllers/producto.controller.js";

const productoRouter = Router();

productoRouter.get("/", getAllProducto);
productoRouter.get("/search", getAllProductoWithQuery);
productoRouter.get("/:id", findProductoById);
productoRouter.post("/", createProducto);
productoRouter.put("/:id", updateProducto);

export default productoRouter;