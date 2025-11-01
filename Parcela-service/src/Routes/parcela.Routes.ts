import { Router } from "express";
import { createParcela, findAll, findByID, update, deleteParcela } from "../Controllers/parcela.Controller";




export const parcelaRoutes = Router();


parcelaRoutes.get("/", findAll)
parcelaRoutes.get("/:id", findByID)
parcelaRoutes.post("/createParcela", createParcela);
parcelaRoutes.put("/updateParcela/:id", update)
parcelaRoutes.delete("/delete/:id", deleteParcela)