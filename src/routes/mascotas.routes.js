import { Router } from "express";
import {
  createMascota,
  deleteMascota,
  getMascota,
  getMascotas,
  updateMascota,
} from "../controllers/mascotas.controllers.js";
import { authRequired } from "../middlewares/validateToken.middleware.js";

const router = Router();

router.get("/mascotas", authRequired, getMascotas);

router.post("/mascotas", authRequired, createMascota);

router.get("/mascotas/:id", authRequired, getMascota);

router.put("/mascotas/:id", authRequired, updateMascota);

router.delete("/mascotas/:id", authRequired, deleteMascota);

export default router;