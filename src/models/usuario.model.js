import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    cedula: {
      type: String,
      required: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    roles: {
      usuario: {
        type: Number,
        default: 2001,
      },
      especialista: Number,
      admin: Number,
    },
    password: {
      type: String,
      required: true,
    }
  }
);

export default mongoose.model("Usuario", userSchema);
