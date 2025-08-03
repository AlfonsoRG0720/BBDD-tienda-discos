import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 12
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Formato de email inválido"]
    },
    contrasenia: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 10
    },
    rol:{
      type: String,
      required: true,
      enum: ["administrador", "cliente"]
    }
  },
);

const UsuarioModel = mongoose.model("Usuario", usuarioSchema);

export default UsuarioModel;
