import { Router } from "express";
import { validateJWT } from "../../Middlewares/validateJWT";
import { validarRol } from "../../Middlewares/validateRol";
import type { Request, Response } from "express";
import Env from "../../config/env";

const parcelaRouter = Router();

parcelaRouter.get("/parcelas/", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const response = await fetch(`${Env.PARCELA_SERVICE_URL}/parcelas`);
          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de parcelas no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

// GET parcela por ID
parcelaRouter.get("/parcelas/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const response = await fetch(`${Env.PARCELA_SERVICE_URL}/parcelas/${id}`);
          if (!response.ok) {
               const errorBody = await response.text();
               console.log("❌ [ERROR]");
               console.log("Status:", response.status);
               console.log("Body:", errorBody);
               return res.status(404).json({ msg: "el servicio de parcelas no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

// POST crear parcela
parcelaRouter.post("/parcelas/createParcela", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const response = await fetch(`${Env.PARCELA_SERVICE_URL}/parcelas/createParcela`, {
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
               return res.status(404).json({ msg: "el servicio de parcelas no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

// PUT actualizar parcela
parcelaRouter.put("/parcelas/updateParcela/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const response = await fetch(`${Env.PARCELA_SERVICE_URL}/parcelas/updateParcela/${id}`, {
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
               return res.status(404).json({ msg: "el servicio de parcelas no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

// DELETE eliminar parcela
parcelaRouter.delete("/parcelas/delete/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const response = await fetch(`${Env.PARCELA_SERVICE_URL}/parcelas/delete/${id}`, {
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
               return res.status(404).json({ msg: "el servicio de parcelas no está disponible" });
          }
          const data = await response.json();
          return res.status(200).json(data);
     } catch (error) {
          console.log(error);
          return res.status(200).json({ msg: "error inesperado por favor intente de nuevo" });
     }
});

export default parcelaRouter;