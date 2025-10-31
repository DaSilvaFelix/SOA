
import { Router } from "express";
import axios from "axios";
import type { Request, Response } from "express";
import Env from "../../config/env";

const usersRouter = Router();

usersRouter.post("/users/register", async (req: Request, res: Response) => {
     try {
          const response = await axios.post(`${Env.USER_SERVICE_URL}/users/register`, req.body,);
          res.status(response.status).json(response.data);

     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
     }
});

export default usersRouter;