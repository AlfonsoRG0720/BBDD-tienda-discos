import express from 'express';

import usuarioRoutes from "./usuario.routes.js";
import productoRoutes from "./producto.routes.js";
import enrutadorPaginas from "./paginas.routes.js"
import enrutadorCompras from "./compras.routes.js";

//import middAutenticacionUsuario from "./middlewares/validacionAutenticacionUsuario.js"

const indexRouter = express.Router();

indexRouter.use("/", enrutadorPaginas)
indexRouter.use("/api/usuarios", usuarioRoutes);
indexRouter.use("/api/productos", productoRoutes);
indexRouter.use("/api/compras", enrutadorCompras);


export default indexRouter