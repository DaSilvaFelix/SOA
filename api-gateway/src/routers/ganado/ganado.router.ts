import { Router } from "express";
import { validateJWT } from "../../Middlewares/validateJWT";
import { validarRol } from "../../Middlewares/validateRol";
import type { Request, Response } from "express";
import Env from "../../config/env";

const ganadoRouter = Router();

ganadoRouter.get("/ganado/findAll", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const response = await fetch(`${Env.GANADO_SERVICE_URL}/ganado/findAll`);
          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de ganado no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

ganadoRouter.get("/ganado/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const response = await fetch(`${Env.GANADO_SERVICE_URL}/ganado/${id}`);
          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de ganado no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

ganadoRouter.post("/ganado/create", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const response = await fetch(`${Env.GANADO_SERVICE_URL}/ganado/create`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(req.body)
          });
          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de ganado no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

ganadoRouter.put("/ganado/update/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const response = await fetch(`${Env.GANADO_SERVICE_URL}/ganado/update/${id}`, {
               method: "PUT",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(req.body)
          });
          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de ganado no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

ganadoRouter.delete("/ganado/delete/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const response = await fetch(`${Env.GANADO_SERVICE_URL}/ganado/delete/${id}`, {
               method: "DELETE",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(req.body)
          });
          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de ganado no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

export default ganadoRouter;