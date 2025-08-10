import Router from "express";
import enrutadorProductos from "../controllers/producto.controller.js"

const router = Router();

router.use("/", enrutadorProductos);




export default router;
