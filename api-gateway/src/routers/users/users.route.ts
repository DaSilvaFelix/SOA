import { Router } from "express";
import axios from "axios";
import type { Request, Response } from "express";
import Env from "../../config/env";
import { validateJWT } from "../../Middlewares/helpers/validateJWT";
import { validarRol } from "../../Middlewares/helpers/validateRol";

const usersRouter = Router();

usersRouter.post("/users/register", async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const response = await axios.post(`${Env.USER_SERVICE_URL}/register`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
  }
});

usersRouter.post("/users/createUSer", validateJWT, validarRol("admin"), async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${Env.USER_SERVICE_URL}/users/createUSer`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
  }
});

usersRouter.put("/users/updateUser", validateJWT, validarRol("admin"), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.put(`${Env.USER_SERVICE_URL}/users/deleteUser/${id}`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
  }
});

usersRouter.delete("/users/deleteUser/:id", validateJWT, validarRol("admin"), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.put(`${Env.USER_SERVICE_URL}/users/deleteUser/${id}`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
  }
});

export default usersRouter;
