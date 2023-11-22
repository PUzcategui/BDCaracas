import { z } from "zod";

export const createMascotaSchema = z.object({
  nombre: z.string({
    required_error: "Nombre is required",
  }),
  raza: z.string({
    required_error: "Raza is required",
  }),
  genero: z.string({
    required_error: "Genero is required",

  })
  .max(1, {message: "Genero is letter M or F"})
});