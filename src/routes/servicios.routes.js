import { Router } from "express";
import {
  createServicio,
  getServicios,
  getServicio,
  updateServicio,
  deleteServicio,
} from "../controllers/servicios.controllers.js";
import { authRequired } from "../middlewares/validateToken.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createServicioSchema } from "../schemas/servicio.schema.js";

const router = Router();

router.get("/servicios", authRequired, getServicios);

router.post("/servicios", authRequired, validateSchema(createServicioSchema), createServicio);

router.get("/servicios/:id", authRequired, getServicio);

router.put("/servicios/:id", authRequired, updateServicio);

router.delete("/servicios/:id", authRequired, deleteServicio);

export default router;