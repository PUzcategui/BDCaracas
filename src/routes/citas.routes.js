import { Router } from "express";
import {
  createCita,
  deleteCita,
  getCita,
  getCitas,
  getCitasEspecialista,
  updateCita,
} from "../controllers/citas.controllers.js";

const router = Router();

router.get("/citas/:id", getCitas);
router.get("/citasEspecialista", getCitasEspecialista);
router.post("/citas", createCita);

router.get("/citas/:id", getCita);

router.put("/citas/:id", updateCita);

router.delete("/citas/:id", deleteCita);

export default router;