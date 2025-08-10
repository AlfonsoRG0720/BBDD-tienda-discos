import ProductoModel from "../models/producto.model.js"

async function paginaIndex(req, res) {

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


export {
    paginaIndex,
    paginaLogin,
    paginaLogout,
    paginaDashboard
}