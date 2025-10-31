import { Router } from "express";
import { createGanado, deleteGanado, findAll, findByID, update } from "../Controllers/Ganado.Controller";






export const ganadoRoutes = Router();


ganadoRoutes.get("/findAll", findAll)
ganadoRoutes.get("/:id", findByID)
ganadoRoutes.post("/create", createGanado);
ganadoRoutes.put("/update/:id", update)
ganadoRoutes.delete("/delete/:id", deleteGanado)