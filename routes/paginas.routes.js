import express from "express";
import {
    revisarCookieJWT,
    revisarCookieJWTAdmin
} from "../middlewares/validacionTokenUsuario.js"
import {
    paginaIndex,
    paginaLogin,
    paginaLogout,
    paginaDashboard
} from "../controllers/paginas.controller.js"

const enrutadorPaginas = express.Router();

enrutadorPaginas.get("/index", paginaIndex)
enrutadorPaginas.get("/inicioSesion", paginaLogin)
enrutadorPaginas.get("/cerrarSesion", revisarCookieJWT ,paginaLogout)
enrutadorPaginas.get("/panelControl", revisarCookieJWTAdmin, paginaDashboard);


export default enrutadorPaginas