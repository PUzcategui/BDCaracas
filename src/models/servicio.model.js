import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema(
  {
    idservicio: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
    },
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