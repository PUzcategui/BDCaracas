import mongoose from "mongoose";

const citaSchema = new mongoose.Schema(
  {
    iddueño: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
    },
    idmascota: {
      type: mongoose.Types.ObjectId,
      ref: "Mascota",
    },
    idespecialista: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
    },
    idservicio: {
      type: mongoose.Types.ObjectId,
      ref: "Servicio",
    },
    fecha: {
      type: Date,
      required: true,
    },
    costototal: {
      type: Number,
      required: true,
    },
  }
);
export default mongoose.model("Cita", citaSchema);
