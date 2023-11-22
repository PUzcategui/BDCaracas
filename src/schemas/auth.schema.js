import { z } from "zod";

export const registerSchema = z.object({
  cedula: z.string({
    required_error: "Cedula is required",
  }),
  nombre: z.string({
    required_error: "Nombre is required",
  }),
  apellido: z.string({
    required_error: "Apellido is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
    telefono: z
    .string({
      required_error: "Telefono is required",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});