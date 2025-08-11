import jwt from 'jsonwebtoken';
import  UsuarioModel  from "../models/usuario.model.js";

function revisarCookieJWT(req, res, next) {
    try {
        const token = req.cookies.tokenJWT;

        if (!token) {
            return res.status(401).send('Token no proporcionado');
        }

        const datosUsuario = jwt.verify(token, process.env.CLAVE_JWT_SECRET);

        req.usuario = datosUsuario;
        
        next();
    } catch (error) {
        res.status(403).send('Token inválido o expirado');
    }
}

async function revisarCookieJWTAdmin(req, res, next) {
    try {
        const token = req.cookies.tokenJWT;
        let perfil=undefined;
        console.log("token: "+token)

        if (!token) {
            return res.status(401).render('paginaError.ejs', {
                mensaje: "Sesión no iniciada"
            });
        }

        
        // const datosUsuario = jwt.verify(token, process.env.CLAVE_JWT_SECRET);
        // const id = datosUsuario.userId;

        // try {
        //     const puerto = process.env.PORT;
        //     const response = await fetch(`http://localhost:${puerto}/api/usuarios/${id}`, {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json'
        //             }
        //         }
        //         )
            
        //     const usuario = await response.json();
        //     perfil = usuario.rol

        //     console.log("usuario: "+usuario)
        //     console.log("perfil: "+perfil)
            
        // } catch (error) {
        //     console.error('Error:', error);
        //     res.send('Error al encontrar el usuario para validar token Admin');
        // }


        const { userId } = jwt.verify(token, process.env.CLAVE_JWT_SECRET);

        const usuario = await UsuarioModel.findById(userId).select('rol');

        perfil=usuario.rol;

        if (!usuario) {
            return res.status(404).render('paginaError.ejs', { mensaje: 'Usuario no encontrado' });
        }

        if (perfil==="administrador") {
            return next();
        } 
        
        return res.status(403).render('paginaError.ejs', {
                mensaje: "Necesitas un perfil de administrador para entrar en esta página"
            });
        
    } catch (error) {
        console.error(err);
        return res.status(403).render('paginaError.ejs', { mensaje: 'Token inválido o expirado' });
    }
}

export {
    revisarCookieJWT,
    revisarCookieJWTAdmin
}