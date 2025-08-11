import express from "express";
import CompraModel from "../models/compra.model.js"

const enrutadorCompras = express.Router();

enrutadorCompras.get("/", async (req, res) => {
    try {
        const resultado = await CompraModel.find()
        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorCompras.post("/", async (req, res) => {
    try {
        const { nombre, total, fecha } = req.body;

        const compraNueva = new CompraModel({
            nombreDisco: nombre,
            totalCompra: total,
            fechaCompra: fecha,
        })

        const resultado = await compraNueva.save()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar la compra",
            error: error.message,
        });
    }
})

export default enrutadorCompras