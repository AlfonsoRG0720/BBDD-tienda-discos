import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    contrasenia: {
      type: Number,
      required: true,
    },
  },
);

const UsuarioModel = mongoose.model("Usuario", usuarioSchema);

export default UsuarioModel;
