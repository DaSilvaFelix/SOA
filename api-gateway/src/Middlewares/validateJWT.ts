import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Env from "../config/env";

declare module "express-session" {
  interface SessionData {
    user?: { id: string; rol: string };
  }
}

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. No hay token." });
  }

  try {
    const decoded = jwt.verify(token, Env.JWT_SECRET!) as { id: string; rol: string };
    req.user = { id: decoded.id, rol: decoded.rol };
    if (req.session) {
      req.session.user = { id: decoded.id, rol: decoded.rol };
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
};
