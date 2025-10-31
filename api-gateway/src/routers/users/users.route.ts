
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
usersRouter.post("/users/createUSer", async (req: Request, res: Response) => {
     try {
          const response = await axios.post(`${Env.USER_SERVICE_URL}/users/createUSer`, req.body,);
          res.status(response.status).json(response.data);

     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
     }
});
usersRouter.put("/users/updateUser", async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const response = await axios.put(`${Env.USER_SERVICE_URL}/users/deleteUser/${id}`, req.body,);
          res.status(response.status).json(response.data);

     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
     }
});
usersRouter.put("/users/deleteUser/:id", async (req: Request, res: Response) => {
     try {
          const response = await axios.put(`${Env.USER_SERVICE_URL}/users/deleteUser/:id`, req.body,);
          res.status(response.status).json(response.data);

     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error al reenviar a USER-SERVICE" });
     }
});


// userRoutes.delete("/deleteUser/:id", deleteUserControllers)
// userRoutes.get("/allUSer", getAllUser)
// userRoutes.get("/:id", getUserByID) 

export default usersRouter;