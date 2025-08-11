import mongoose from "mongoose";

const sesionesSchema = new mongoose.Schema(
  {
    nombreUsuario: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fechaIngreso: {
      type: String,
      required: true,
    }
  },
);

const SesionesModel = mongoose.model("Sesiones", sesionesSchema);

export default SesionesModel;
