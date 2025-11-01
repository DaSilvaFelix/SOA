import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';



declare module 'express-session' {
    interface SessionData {
        user?: { id: string; rol: string };
    }
}

const JWT_SECRET = "clave_secreta"; // Asegúrate de que sea la misma en generarJWT y validateJWT

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; rol: string };
        req.user = { id: decoded.id, rol: decoded.rol };
        if (req.session) {
            req.session.user = { id: decoded.id, rol: decoded.rol };
        }
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};