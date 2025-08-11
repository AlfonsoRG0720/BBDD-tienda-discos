import express from "express";
import {
    revisarCookieJWT,
    revisarCookieJWTAdmin
} from "../middlewares/validacionTokenUsuario.js"
import {
    paginaIndex,
    paginaLogin,
    paginaLogout,
    paginaDashboard,
    paginaSesiones
} from "../controllers/paginas.controller.js"

const enrutadorPaginas = express.Router();

enrutadorPaginas.get("/index", paginaIndex)
enrutadorPaginas.get("/inicioSesion", paginaLogin)
enrutadorPaginas.get("/cerrarSesion", revisarCookieJWT ,paginaLogout)
enrutadorPaginas.get("/panelControl", revisarCookieJWTAdmin, paginaDashboard);
enrutadorPaginas.get("/sesiones", revisarCookieJWTAdmin, paginaSesiones);


export default enrutadorPaginas