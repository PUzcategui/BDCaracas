import { Router } from "express";
import {
  createMascota,
  deleteMascota,
  getMascota,
  getMascotas,
  updateMascota,
} from "../controllers/mascotas.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createMascotaSchema } from "../schemas/mascota.schema.js";

const router = Router();

router.get("/mascotas/:id", getMascotas);

router.post(
  "/mascotas",
  validateSchema(createMascotaSchema),
  createMascota
);

router.get("/mascotas/:id", getMascota);

router.put("/mascotas/:id", updateMascota);

router.delete("/mascotas/:id", deleteMascota);

export default router;
