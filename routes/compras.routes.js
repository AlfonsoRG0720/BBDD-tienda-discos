import Router from "express";
import enrutadorCompras from "../controllers/compras.controller.js"

const router = Router();

router.use("/", enrutadorCompras);




export default router;
