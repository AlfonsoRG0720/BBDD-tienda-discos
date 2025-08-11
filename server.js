import express from "express";
import morgan from "morgan";
import { join, dirname, } from "path";
import path from 'path';
import { fileURLToPath } from "url";
import { conectarBBDD } from "./src/config/db.config.js";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://localhost:4000'
];

const corsOptions = {
  origin(origin, callback) {

    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Origen no permitido por CORS'));
  },
  credentials: true,
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  maxAge: 600
};


// Importa rutas
import indexRouter from "./routes/index.routes.js";



const __dirname = dirname(fileURLToPath(import.meta.url));


// Inicializa Express
const app = express();
console.log(__dirname)




//prueba CORS:::
app.use((req, _res, next) => {
  console.log('CORS Origin recibido:', req.headers.origin);
  next();
});




// Aplica CORS
app.use(cors(corsOptions));


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