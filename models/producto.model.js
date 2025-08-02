import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    anio: {
      type: Number,
      required: true,
      min: 1900,
    },
    precio: {
      type: Number,
      required: true,
      min: 1,
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    },
  },
);

const ProductoModel = mongoose.model("Producto", productoSchema);

export default ProductoModel;
