import UsuarioModel  from "../models/usuario.model.js";
import SesionesModel from "../models/sesiones.model.js";



async function registrarSesion(email) {

        const usuarioActual = UsuarioModel.find({email});
        const fecha = new Date();
        const horaCompra = `${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()}/${fecha.getHours()}/${fecha.getMinutes()}/${fecha.getSeconds()}`;
        const nombreUsuarioActual = usuarioActual.nombre;
        const emailUsuarioActual = usuarioActual.email;
        const fechaActual = horaCompra;

     
        // fetch('http://localhost:4000/api/sesiones', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     'Accept': 'application/json'
        //                 },
        //                 body: JSON.stringify({
        //                     nombreUsuario: nombreUsuarioActual,
        //                     email: emailUsuarioActual,
        //                     fechaIngreso: fechaActual,
        //                 })
        //             })
        //                 .then(resp => {
        //                     if (!resp.ok) return resp.text().then(t => { throw new Error(`HTTP ${resp.status}: ${t}`); });
        //                     return resp.json();
        //             })
        //                 .catch(error => {
        //                     console.error('Error al guardar la sesión:', error);
        //                 });   
                        
                        
        
    try {

        const sesionNueva = new SesionesModel({
            nombreUsuario: nombreUsuarioActual,
            email: emailUsuarioActual,
            fechaIngreso: fechaActual,
        })

        const resultado = await sesionNueva.save()

        res.status(201).json(resultado)
    } catch (error) {
        // res.status(500).json({
        //     mensaje: "Error al guardar la sesión: ", error,
        // });
    }
                }

export default
    registrarSesion