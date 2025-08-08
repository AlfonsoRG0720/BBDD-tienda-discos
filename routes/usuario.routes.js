import express from 'express';
import {
            recuperarUsuarios,
            recuperarUsuarioID,
            crearUsuario,
            borrarUsuarioID,
            editarUsuario,
            login,
            logout
        }    from "../controllers/usuario.controller.js"


const enrutadorUsuarios = express.Router();

enrutadorUsuarios.get("/", recuperarUsuarios)
enrutadorUsuarios.get("/:identificacion", recuperarUsuarioID)
enrutadorUsuarios.post("/", crearUsuario)
enrutadorUsuarios.delete("/:identificador", borrarUsuarioID)
enrutadorUsuarios.put("/:identificador", editarUsuario)
enrutadorUsuarios.post("/login", login)
enrutadorUsuarios.post("/logout", logout)

export default enrutadorUsuarios;
