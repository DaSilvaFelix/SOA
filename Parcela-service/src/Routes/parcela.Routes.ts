import { Router } from "express";
import { createGanado } from "Ganado/Controllers/Ganado.Controller";
import { createParcela, deleteParcela, findAll, findByID, update } from "Parcela/Controllers/parcela.Controller";
import { validateJWT } from "utils/helpers/validateJWT";
import { validarRol } from "utils/helpers/validateRol";





export const parcelaRoutes = Router();


parcelaRoutes.get("/parcela", validateJWT, validarRol("Agricultor", "admin", "Mixto"), findAll)
parcelaRoutes.get("/parcela/:id", validateJWT, validarRol("Agricultor", "admin", "Mixto"), findByID)
parcelaRoutes.post("/createParcela", createParcela);
parcelaRoutes.put("/updateParcela/:id", validateJWT, validarRol("Agricultor", "admin", "Mixto"), update)
parcelaRoutes.delete("/delete/:id", validateJWT, validarRol("Agricultor", "admin", "Mixto"), deleteParcela)