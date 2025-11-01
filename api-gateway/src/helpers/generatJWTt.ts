import * as jwt from 'jsonwebtoken';
import Env from '../config/env';


export const generarJWT = (id: any, rol: string) => {
  return new Promise((resolve, reject) => {
    const payload = { id, rol };
    jwt.sign(payload, Env.JWT_SECRET as string, { expiresIn: "1h" }, (err, token) => {
      if (err) {
        console.error("Error generating JWT:", err);
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};