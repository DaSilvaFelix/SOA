import z from "zod";



export const userZodSchema = z.object({
    email: z.string().email("Email no válido"),
    password: z.string().min(8, "La contraseña debe tener al menos 6 caracteres"),
})