import express from "express";
import morgan from "morgan";
import { join, dirname, } from "path";
import path from 'path';
import { fileURLToPath } from "url";
import { conectarBBDD } from "./src/config/db.config.js";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';





dotenv.config();



// Importa rutas
import indexRouter from "./routes/index.routes.js";



const __dirname = dirname(fileURLToPath(import.meta.url));


// Inicializa Express
const app = express();
console.log(__dirname)
// Views
app.set("views", path.join(__dirname, "/public"));
app.set("view engine", "ejs");
app.use(express.static( path.join(__dirname, "/public")));

app.use(cookieParser());
// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Conectar a MongoDB
conectarBBDD();

// Rutas
app.use("/", indexRouter)


// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});