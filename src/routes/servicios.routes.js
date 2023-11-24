import { Router } from "express";
import {
  createServicio,
  getServicios,
  getServicio,
  updateServicio,
  deleteServicio,
  getEspecialistas,
} from "../controllers/servicios.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createServicioSchema } from "../schemas/servicio.schema.js";

const router = Router();

router.get("/servicios", getServicios);

router.post("/servicios", validateSchema(createServicioSchema), createServicio);

router.get("/servicios/:id", getServicio);

router.put("/servicios/:id", updateServicio);

router.delete("/servicios/:id", deleteServicio);

router.get("/especialistas", getEspecialistas);

export default router;