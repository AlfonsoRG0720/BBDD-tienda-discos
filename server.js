import express from "express";
import morgan from "morgan";
import { conectarBBDD } from "./src/config/db.config.js";
import dotenv from 'dotenv';
dotenv.config();



// Importa rutas
import usuarioRoutes from "./routes/usuario.routes.js";
import productoRoutes from "./routes/producto.routes.js";

// Inicializa Express
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Conectar a MongoDB
conectarBBDD();

// Rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/productos", productoRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});