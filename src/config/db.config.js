import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


export const conectarBBDD = async () => {
    try {
        console.log("Iniciando conexión a la Base de Datos");
        await mongoose.connect(process.env.URL);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error al conectar a Mongo DB");
        console.log(error.message);
    }
}