import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import mascotasRoutes from "./routes/mascotas.routes.js";
import citasRoutes from "./routes/citas.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api",mascotasRoutes);
app.use("/api",citasRoutes);

export default app;
