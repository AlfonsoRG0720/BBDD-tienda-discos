import express from "express";
import ProductoModel from "../models/producto.model.js";


const enrutadorProductos = express.Router();

enrutadorProductos.get("/", async (req, res) => {
    try {
        const resultado = await ProductoModel.find()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorProductos.get("/:identificacion", async (req, res) => {
    try {
        console.log(req.params.identificacion)
        const resultado = await ProductoModel.findById(req.params.identificacion)

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorProductos.post("/", async (req, res) => {
    try {
        const { nombre, anio, precio, stock } = req.body;

        const productoNuevo = new ProductoModel({
            nombre: nombre,
            anio: anio,
            precio: precio,
            stock: stock
        })

        const resultado = await productoNuevo.save()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear producto",
            error: error.message,
        });
    }
})

enrutadorProductos.delete("/:identificador", async (req, res) => {
    try {
        console.log(req.params.identificador)

        const productoEncontrado = await ProductoModel.findById(req.params.identificador);
        

        if (!productoEncontrado) {
            res.status(404).send("producto no encontrado")
        }

        const resultado = await ProductoModel.findByIdAndDelete(req.params.identificador);

        console.log(resultado)

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})


enrutadorProductos.put("/:identificador", async (req, res) => {
    try {
        console.log(req.params.identificador)

        const { nombre, anio, precio, stock } = req.body;

        const productoEncontrado = await ProductoModel.findById(req.params.identificador);

        if (!productoEncontrado) {
            res.status(404).send("producto no encontrado")
        }

        const resultado = await ProductoModel.findByIdAndUpdate(
            req.params.identificador,
            {
                nombre: nombre,
                anio: anio,
                precio: precio,
                stock: stock
            }
        );

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

export default enrutadorProductos