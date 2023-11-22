import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Prueba:12345@cluster0.c9tu22s.mongodb.net/Caracas");
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
