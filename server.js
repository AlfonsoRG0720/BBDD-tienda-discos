import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { conectarBBDD } from "./src/config/db.config.js";
import dotenv from 'dotenv';
dotenv.config();



// Importa rutas
import usuarioRoutes from "./routes/usuario.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import enrutadorPaginas from "./routes/paginas.routes.js"


const __dirname = dirname(fileURLToPath(import.meta.url));


// Inicializa Express
const app = express();
// Views
app.set("views", join(__dirname, "/public"));
app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "/public")));

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Conectar a MongoDB
conectarBBDD();

// Rutas
app.use("/public/", enrutadorPaginas)
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/productos", productoRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});