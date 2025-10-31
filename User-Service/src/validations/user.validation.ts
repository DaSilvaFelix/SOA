import { userZodSchema } from "./schemas/userZoodSchema";

export function validarUsuario(data: any) {
    const parsed = userZodSchema.safeParse(data);

    if (!parsed.success) {
        console.log(parsed.error)

        throw parsed.error;
    }

    return parsed.data;
}

