import Router from "express";
import enrutadorUsuarios from "../controllers/usuario.controller.js"

const router = Router();

router.use("/", enrutadorUsuarios);

export default router;
