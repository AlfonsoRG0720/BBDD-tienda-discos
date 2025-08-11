import express from 'express';
import {
    recuperarProductos,
    RecuperarProductoID,
    crearProducto,
    borrarProductoID,
    editarproducto
} from "../controllers/producto.controller.js"


const enrutadorProductos = express.Router();

enrutadorProductos.get("/", recuperarProductos)
enrutadorProductos.get("/:identificacion", RecuperarProductoID)
enrutadorProductos.post("/", crearProducto)
enrutadorProductos.delete("/:identificador", borrarProductoID)
enrutadorProductos.put("/:identificador", editarproducto)




export default enrutadorProductos;
