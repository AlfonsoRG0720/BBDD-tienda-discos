import jwt from 'jsonwebtoken';

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

        if (!token) {
            return res.status(401).send('Token no proporcionado');
        }

        const datosUsuario = jwt.verify(token, process.env.CLAVE_JWT_SECRET);
        const id = datosUsuario.userId;

        try {
            const response = await fetch(`http://localhost:4000/api/usuarios/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
                    }
                }
                )
            
            const usuario = await response.json();
            perfil = usuario.rol

            console.log("usuario: "+usuario)
            console.log("perfil: "+perfil)
            
        } catch (error) {
            console.error('Error:', error);
            alert('Error al encontrar el usuario para validar token Admin');
        }

        if (perfil==="administrador") {
            next();
        } else {
            return res.status(401).send('Necesitar un perfil de administrador para entrar en esta página');
        }
        
    } catch (error) {
        res.status(403).send('Token inválido o expirado2');
    }
}

export {
    revisarCookieJWT,
    revisarCookieJWTAdmin
}