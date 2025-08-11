import express from "express";
import SesionesModel from "../models/sesiones.model.js"

const enrutadorSesiones = express.Router();

enrutadorSesiones.get("/", async (req, res) => {
    try {
        const resultado = await SesionesModel.find()
        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorSesiones.post("/", async (req, res) => {
    try {
        const { nombre, email, fecha } = req.body;

        const sesionNueva = new SesionesModel({
            nombreUsuario: nombre,
            email: email,
            fechaIngreso: fecha,
        })

        const resultado = await sesionNueva.save()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar la sesión",
            error: error.message,
        });
    }
})

export default enrutadorSesiones