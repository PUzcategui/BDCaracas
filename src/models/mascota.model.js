import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {
    iddueño: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
    },
    nombre: {
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
      type: Char,
      required: true,
      unique: true,
    },
  }
);

export default mongoose.model("Mascota", userSchema);
