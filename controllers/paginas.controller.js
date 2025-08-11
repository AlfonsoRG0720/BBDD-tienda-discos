import ProductoModel from "../models/producto.model.js"
import SesionesModel from "../models/sesiones.model.js";

async function paginaIndex(req, res) {

    try {
        const resultado = await ProductoModel.find()
        res.render('index.ejs', {
            titulo: "Página de index",
            // nombre: "Prueba",
            // rol: "administrador",
            // productosBD:resultado
        });
        
    } catch (error) {
        res.render('index.ejs', {
            titulo: "Página de inicio",
            // nombre: "Ana",
            // rol: "administrador",
            // productosBD:[]
        });
    }
}

function paginaLogin(req, res) {
    res.render('inicioSesion.ejs', {
        titulo: "Página de login"
    });
}

function paginaLogout (req, res) {
    res.render('cerrarSesion.ejs', {
        titulo: "Página de logout"
    });
}

async function paginaDashboard (req, res) {

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
}

async function paginaSesiones (req, res) {

        try {
        const resultado = await SesionesModel.find()
        res.render('sesiones.ejs', {
            titulo: "Página de sesiones de usuarios",
            listaSesiones:resultado
        });
        console.log(resultado);
        
    } catch (error) {
        res.render('sesiones.ejs', {
            titulo: "Página de sesiones de usuarios",
            listaSesiones:[]
        });
    }
}


export {
    paginaIndex,
    paginaLogin,
    paginaLogout,
    paginaDashboard,
    paginaSesiones
}