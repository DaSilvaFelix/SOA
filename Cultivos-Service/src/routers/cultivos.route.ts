import { Router } from "express";
import { findAllCultivo, findByIDCultivo, createCultivo, updateCultivo, deleteAllCultivo } from "../Controllers/cultivos.Controller";
const cultivosRouter = Router();

cultivosRouter.get("/", findAllCultivo);
cultivosRouter.get("/:id", findByIDCultivo);
cultivosRouter.post("/createCultivos", createCultivo);
cultivosRouter.put("/updateCultivos/:id", updateCultivo)
cultivosRouter.delete("/deleteCultivos/:id", deleteAllCultivo)

export default cultivosRouter;
