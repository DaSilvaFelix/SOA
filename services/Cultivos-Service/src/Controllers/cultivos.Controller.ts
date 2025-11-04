import { repoMongo } from "../repoMongo/cultivos_repo";
import { CultivoService } from "../Service/cultivos.Service";
import { ICultivo } from "../types/ICultivos";
import { Request, Response } from "express";

const RepoMongo = new repoMongo();
const RepoService = new CultivoService(RepoMongo);

export const createCultivo = async (req: Request, res: Response) => {
  try {
    const element: ICultivo = req.body;


    const result = await RepoService.create(element);

    if (!result) {
      res.status(304).json({ msg: "element no created" });
    }

    res.status(201).json({ msg: "element created", result });
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "the internal server erro" });
  }
};

export const findAllCultivo = async (req: Request, res: Response) => {
  try {

    const result = await RepoService.findAll();
    if (!result) {
      res.status(304).json({ msg: "element not found" });
    }
    res.status(201).json({ msg: "elements", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
  }
};

export const findByIDCultivo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await RepoService.findByID(id);
    if (!result) return res.status(304).json({ msg: "element not found" });

    return res.status(201).json({ msg: "elements", result });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
    return
  }
};

export const updateCultivo = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const element: ICultivo = req.body;
    const id = req.params.id;

    const result = await RepoService.update(element, id);
    console.log(result)
    if (!result) {
      res.status(304).json({ msg: "element not found" });
    }
    res.status(201).json({ msg: "elements", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
  }
};

export const deleteAllCultivo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await RepoService.Delete(id);

    res.status(200).json({ msg: "elements", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
  }
};
