import express from 'express';

import usuarioRoutes from "./usuario.routes.js";
import productoRoutes from "./producto.routes.js";
import enrutadorPaginas from "./paginas.routes.js"
//import middAutenticacionUsuario from "./middlewares/validacionAutenticacionUsuario.js"

const indexRouter = express.Router();

indexRouter.use("/", enrutadorPaginas)
indexRouter.use("/tienda", enrutadorPaginas)
indexRouter.use("/api/usuarios", usuarioRoutes);
indexRouter.use("/api/productos", productoRoutes);

export default indexRouter