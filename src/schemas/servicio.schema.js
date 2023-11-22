import { z } from "zod";

export const createServicioSchema = z.object({
  nombre: z.string({
    required_error: "Nombre is required",
  }),
  descripcion: z.string({
    required_error: "Descripcion is required",
  }),
  tarifa: z.number({
    required_error: "Tarifa is required",

  })
});