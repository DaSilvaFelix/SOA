import { Request, Response, NextFunction } from "express";

// Extiende la interfaz Request para incluir 'user'
declare global {
  namespace Express {
    interface Request {
      user?: {
        rol: string;
        [key: string]: any;
      };
      id: any;
    }
  }
}

export const validarRol = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    // Asumiendo que el usuario ya está autenticado y su rol está en req.user

    if (!user) {
      return res.status(401).json({ msg: "Usuario no autenticado" });
    }

    if (!allowedRoles.includes(user.rol)) {
      return res.status(403).json({
        msg: `Acceso denegado: requiere uno de estos roles: ${allowedRoles.join(", ")}`,
      });
    }

    next(); // Usuario tiene permiso
  };
};
