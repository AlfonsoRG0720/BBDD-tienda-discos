import mongoose from "mongoose";

export const conectarBBDD = async () => {
    try {
        console.log("Iniciando conexión a la Base de Datos");
        await mongoose.connect("mongodb+srv://alfonsor814:51288-900720@cluster0.twdbugc.mongodb.net/misProductos?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error al conectar a Mongo DB");
        console.log(error.message);
    }
}