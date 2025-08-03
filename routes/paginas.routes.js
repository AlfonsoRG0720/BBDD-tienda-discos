import express from "express";

const enrutadorPaginas = express.Router();

enrutadorPaginas.get("/index", (req, res) => {
    res.render('index.ejs', {
        titulo: "Página de inicio",
        nombre: "Ana",
        rol: "administrador",
        productos: [
            { nombre: "Guitarra", precio: 120 },
            { nombre: "Batería", precio: 300 }
        ]
    });
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

enrutadorPaginas.get("/panelControl", (req, res) => {
    res.render('panelControl.ejs', {
        titulo: "Página de Dashboard"
    });
})

export default enrutadorPaginas