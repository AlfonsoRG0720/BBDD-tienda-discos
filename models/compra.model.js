import mongoose from "mongoose";

const compraSchema = new mongoose.Schema(
  {
    nombreDisco: {
      type: String,
      required: true,
    },
    totalCompra: {
      type: Number,
      required: true,
    },
    fechaCompra: {
      type: String,
      required: true,
    }
  },
);

const CompraModel = mongoose.model("Compra", compraSchema);

export default CompraModel;
