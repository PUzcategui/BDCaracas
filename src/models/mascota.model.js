import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {
    iddueño: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
      required:true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    raza: {
      type: String,
      required: true,
      trim: true,
    },
    genero: {
      type: String,
      required: true,
    },
  }
);

export default mongoose.model("Mascota", mascotaSchema);
