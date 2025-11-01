import { Router } from "express";
import { validateJWT } from "../../Middlewares/validateJWT";
import { validarRol } from "../../Middlewares/validateRol";
import type { Request, Response } from "express";
import Env from "../../config/env";

const cultivosRouter = Router()

cultivosRouter.get("/cultivos", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const response = await fetch(`${Env.CULTIVOS_SERVICE_URL}/cultivos/`);

          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", res.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de cultivos no esta disponible" });
          }

          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);

          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo " });
     }
});

cultivosRouter.get("/cultivos/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params
          const response = await fetch(`${Env.CULTIVOS_SERVICE_URL}/cultivos/${id}`);

          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de cultivos no esta disponible" });
          }

          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);

          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo " });
     }
});

cultivosRouter.post("/cultivos/createCultivos", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const response = await fetch(`${Env.CULTIVOS_SERVICE_URL}/cultivos/createCultivos`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(req.body),
          });

          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de cultivos no esta disponible" });
          }

          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);

          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo " });
     }
});

cultivosRouter.put("/cultivos/updateCultivos/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params
          const response = await fetch(`${Env.CULTIVOS_SERVICE_URL}/cultivos/updateCultivos/${id}`, {
               method: "PUT",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(req.body),
          });

          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de cultivos no esta disponible" });
          }

          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);

          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo " });
     }
});

cultivosRouter.delete("/cultivos/deleteCultivos/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params
          const response = await fetch(`${Env.CULTIVOS_SERVICE_URL}/cultivos/deleteCultivos/${id}`, {
               method: "DELETE",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(req.body),
          });

          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de cultivos no esta disponible" });
          }

          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);

          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo " });
     }
});

export default cultivosRouter