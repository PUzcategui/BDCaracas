import { Router } from "express";
import {
  createCita,
  deleteCita,
  getCita,
  getCitas,
  updateCita,
} from "../controllers/citas.controllers.js";
import { authRequired } from "../middlewares/validateToken.middleware.js";

const router = Router();

router.get("/citas", authRequired, getCitas);

router.post("/citas", authRequired, createCita);

router.get("/citas/:id", authRequired, getCita);

router.put("/citas/:id", authRequired, updateCita);

router.delete("/citas/:id", authRequired, deleteCita);

export default router;