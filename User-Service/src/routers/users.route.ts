import { Router } from "express";
import type { Request, Response } from "express";

export const userRouter = Router()

userRouter.post("/register", (req: Request, res: Response) => {
     console.log(req.body);
     console.log(req.headers);


     res.status(200).json({
          message: "Usuario registrado correctamente",
          data: req.body
     });
});