import { Router } from "express";
import type { Request, Response } from "express";
import Env from "../../config/env";
import { validateJWT } from "../../Middlewares/validateJWT";
import { validarRol } from "../../Middlewares/validateRol";

const usersRouter = Router();

// ✅
usersRouter.post("/users/register", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${Env.USER_SERVICE_URL}/users/register`, {
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

// ✅
usersRouter.post("/users/createUser", validateJWT, validarRol("admin"), async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${Env.USER_SERVICE_URL}/users/createUser`, {
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

// ✅
usersRouter.put("/users/updateUser/:id", validateJWT, validarRol("admin"), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${Env.USER_SERVICE_URL}/users/updateUser/${id}`, {
      method: "PUT",
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

// ✅
usersRouter.delete("/users/deleteUser/:id", validateJWT, validarRol("admin"), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${Env.USER_SERVICE_URL}/users/deleteUser/${id}`, {
      method: "DELETE",
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

// ✅
usersRouter.get("/users/allUser", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${Env.USER_SERVICE_URL}/users/allUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorBody = await response.text();
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

// ✅
usersRouter.get("/users/:id", validateJWT, validarRol("admin"), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${Env.USER_SERVICE_URL}/users/${id}`, {
      method: "GET",
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
