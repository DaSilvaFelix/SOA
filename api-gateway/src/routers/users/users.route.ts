import { Router } from "express";
import type { Request, Response } from "express";
import Env from "../../config/env";

const usersRouter = Router();

usersRouter.post("/users/register", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${Env.USER_SERVICE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorBody = await response.text(); // usar res.json() si el backend responde con JSON
      console.log("❌ [ERROR]");
      console.log("Status:", res.status);
      console.log("Body:", errorBody);
      return res.status(404).json({ msg: "el servicio de usuario no esta disponible" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);

    return res.status(200).json({ msg: "error inesperado por favor intente de nuevo " });
  }
});

export default usersRouter;
