import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    tarifa: {
      type: Number,
      required: true,
    },
  }
);

export default mongoose.model("Servicio", servicioSchema);