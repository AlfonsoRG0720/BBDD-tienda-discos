import UsuarioModel  from "../models/usuario.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import registrarSesion from "../middlewares/RegistroSesiones.js";


    
async function recuperarUsuarios (req, res) {

    try {
        const resultado = await UsuarioModel.find()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
}


    
async function recuperarUsuarioID (req, res) {

    try {
        console.log(req.params.identificacion)
        const resultado = await UsuarioModel.findById(req.params.identificacion)

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
}


    
async function crearUsuario (req, res) {

    try {
        console.log("entrando a crear usuario")
        const encripPasword = await bcrypt.hash(req.body.contrasenia,10);

        const usuarioNuevo = new UsuarioModel({
            ...req.body,
            contraseniaEncrip: encripPasword,
        });

        const resultado = await usuarioNuevo.save()

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
}


    
async function borrarUsuarioID (req, res) {

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
}


    
async function editarUsuario (req, res) {

    try {
        console.log(req.params.identificador)

        const { nombre, email, contrasenia, rol } = req.body;

        const productoEncontrado = await UsuarioModel.findById(req.params.identificador);

        if (!productoEncontrado) {
            res.status(404).send("producto no encontrado")
        }

        const resultado = await UsuarioModel.findByIdAndUpdate(
            req.params.identificador,
            {
                nombre: nombre,
                email: email,
                contrasenia: contrasenia,
                rol: rol
            }
        );

        res.status(201).json(resultado)
    } catch (error) {
        res.status(500).send("error")
    }
}


    
async function login (req, res) {

    try {
        const { email, contrasenia } = req.body;
        const user = await UsuarioModel.findOne({ email });
        console.log(user)
        if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });
        
        const validPassword = await bcrypt.compare(contrasenia, user.contraseniaEncrip);
        if (!validPassword) return res.status(401).send('Contraseña incorrecta');
    
        const token = jwt.sign(
            { userId: user._id },
            process.env.CLAVE_JWT_SECRET,
            { expiresIn: '10m' }
        );

        res.cookie('tokenJWT', token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 10*60*1000
        });

        registrarSesion(email);

        res.json({ mensaje: "Sesión iniciada con JWT"})

    } catch (error) {
        console.error(error);
        res.status(500).sen("Error interno: Error al iniciar sesión", error)
    }

}

async function logout (req, res) {
    if (req.cookies.tokenJWT) {
    res.clearCookie('tokenJWT', {
        httpOnly: true,
    });
    res.status(200).json({ success: true, message: 'Sesión cerrada' });
} else {
    res.status(400).json({ success: false, message: 'No hay sesión activa' });
}
}

export {
    recuperarUsuarios,
    recuperarUsuarioID,
    crearUsuario,
    borrarUsuarioID,
    editarUsuario,
    login,
    logout
}


