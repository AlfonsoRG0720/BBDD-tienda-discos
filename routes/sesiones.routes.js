import Router from "express";
import enrutadorSesiones from "../controllers/sesiones.controller.js"

const router = Router();

router.use("/", enrutadorSesiones);




export default router;
