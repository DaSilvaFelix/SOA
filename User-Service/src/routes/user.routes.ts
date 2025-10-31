import { Router } from "express";
import type { Request, Response } from "express";

const userRoutes = Router();

userRoutes.post("/register", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

export default userRoutes;
