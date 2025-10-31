import { Router } from "express";
import { createCultivo, deleteAllCultivo, findAllCultivo, findByIDCultivo, updateCultivo } from "agricultura/Controllers/cultivos.Controller";
import { validateJWT } from "utils/helpers/validateJWT";
import { validarRol } from "utils/helpers/validateRol";
const cultivosRouter = Router();

cultivosRouter.get("/cultivos", validateJWT, validarRol("Agricultor", "Mixto", "admin"), findAllCultivo);
cultivosRouter.get("/cultivos/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), findByIDCultivo);
cultivosRouter.post("/createCultivos", validateJWT, validarRol("Agricultor", "Mixto", "admin"), createCultivo);
cultivosRouter.put("/updateCultivos/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), updateCultivo)
cultivosRouter.delete("/deleteCultivos/:id", validateJWT, validarRol("Agricultor", "Mixto", "admin"), deleteAllCultivo)

export default cultivosRouter;
