import express from "express";
import ProductoModel from "../models/producto.model.js";





    
async function recuperarProductos (req, res) {
    try {
        const resultado = await ProductoModel.find()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
}


    
async function RecuperarProductoID (req, res) {
    try {
        console.log(req.params.identificacion)
        const resultado = await ProductoModel.findById(req.params.identificacion)

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
}


    
async function crearProducto (req, res) {
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
}


    
async function borrarProductoID (req, res) {
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
}



    
async function editarproducto (req, res) {
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
}

export {
    recuperarProductos,
    RecuperarProductoID,
    crearProducto,
    borrarProductoID,
    editarproducto
}