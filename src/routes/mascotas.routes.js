import { Router } from "express";
import {
  createMascota,
  deleteMascota,
  getMascota,
  getMascotas,
  updateMascota,
} from "../controllers/mascotas.controllers.js";
import { authRequired } from "../middlewares/validateToken.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createMascotaSchema } from "../schemas/mascota.schema.js";

const router = Router();

router.get("/mascotas", authRequired, getMascotas);

router.post("/mascotas", authRequired, validateSchema(createMascotaSchema), createMascota);

router.get("/mascotas/:id", authRequired, getMascota);

router.put("/mascotas/:id", authRequired, updateMascota);

router.delete("/mascotas/:id", authRequired, deleteMascota);

export default router;