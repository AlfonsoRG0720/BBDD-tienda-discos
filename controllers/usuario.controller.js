import express from "express";
import  UsuarioModel  from "../models/usuario.model.js";

const enrutadorUsuarios = express.Router();

enrutadorUsuarios.get("/", async (req, res) => {
    try {
        const resultado = await UsuarioModel.find()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorUsuarios.get("/:identificacion", async (req, res) => {
    try {
        console.log(req.params.identificacion)
        const resultado = await UsuarioModel.findById(req.params.identificacion)

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorUsuarios.post("/", async (req, res) => {
    try {
        const { nombre, email, contrasenia } = req.body;

        const usuarioNuevo = new UsuarioModel({
            nombre: nombre,
            email: email,
            contrasenia: contrasenia
        })

        const resultado = await usuarioNuevo.save()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorUsuarios.delete("/:identificador", async (req, res) => {
    try {
        console.log(req.params.identificador)

        const productoEncontrado = await UsuarioModel.findById(req.params.identificador);

        if (!productoEncontrado) {
            res.status(404).send("producto no encontrado")
        }

        const resultado = await UsuarioModel.findByIdAndDelete(req.params.identificador);

        console.log(resultado)

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

enrutadorUsuarios.put("/:identificador", async (req, res) => {
    try {
        console.log(req.params.identificador)

        const { nombre, email, contrasenia } = req.body;

        const productoEncontrado = await UsuarioModel.findById(req.params.identificador);

        if (!productoEncontrado) {
            res.status(404).send("producto no encontrado")
        }

        const resultado = await UsuarioModel.findByIdAndUpdate(
            req.params.identificador,
            {
                nombre: nombre,
                email: email,
                contrasenia: contrasenia
            }
        );

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
})

export default enrutadorUsuarios
