import express from "express";
import  ProductoModel  from "../models/producto.model.js";

const enrutadorPaginas = express.Router();

enrutadorPaginas.get("/index", async (req, res) => {

    try {
        const resultado = await ProductoModel.find()
        res.render('index.ejs', {
            titulo: "Página de inicio",
            nombre: "Prueba",
            rol: "administrador",
            productos: [
                { nombre: "Guitarra", precio: 120 },
                { nombre: "Batería", precio: 300 }
            ],
            productosBD:resultado
        });
        
    } catch (error) {
        res.render('index.ejs', {
            titulo: "Página de inicio",
            nombre: "Ana",
            rol: "administrador",
            productos: [
                { nombre: "Guitarra", precio: 120 },
                { nombre: "Batería", precio: 300 }
            ],
            productosBD:[]
        });
    }
})

enrutadorPaginas.get("/inicioSesion", (req, res) => {
    res.render('inicioSesion.ejs', {
        titulo: "Página de login"
    });
})

enrutadorPaginas.get("/cerrarSesion", (req, res) => {
    res.render('cerrarSesion.ejs', {
        titulo: "Página de logout"
    });
})

enrutadorPaginas.get("/panelControl", async (req, res) => {

        try {
        const resultado = await ProductoModel.find()
        res.render('panelControl.ejs', {
            titulo: "Página de Dashboard",
            discosBBDD:resultado
        });
        console.log(resultado);
        
    } catch (error) {
        res.render('panelControl.ejs', {
            titulo: "ERROR Página de Dashboard",
            discosBBDD:[]
        });
    }



    });


export default enrutadorPaginas