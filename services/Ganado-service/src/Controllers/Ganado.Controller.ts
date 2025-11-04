import { Request, Response } from "express";
import { IfindGanadoRepo } from "../repositories/Find.repo";
import { Iganado } from "../types/ganadoType";
import { CreateGanadoMongo, DeleteGanadoMongo, FindGanadoMongoRepo, UpdateGanadoMongo } from "../repoMongo/gandoRepoMongo";
import { CreateGanadoService, DeleteGanadoService, FindGanadoService, UpdateGanado } from "../Service/Ganado.Service";
import { IUpdateGanadoRepo } from "../repositories/UpdateGanado.Repo";
import { ICreateGanadoRepo } from "../repositories/CreateGanado.Repo";
import { IDeleteGanadoRepo } from "../repositories/DeleteGanado.Repo";
import { createIdGenerator } from "../utils/calculoMarcaDueño";


const findganadoRepoMongo: IfindGanadoRepo = new FindGanadoMongoRepo()
const findGanadoRepoService = new FindGanadoService(findganadoRepoMongo)
const updateMongoRepo: IUpdateGanadoRepo = new UpdateGanadoMongo()
const updateGanadoService = new UpdateGanado(updateMongoRepo)
const creadetGanadoMogno: ICreateGanadoRepo = new CreateGanadoMongo()
const createService = new CreateGanadoService(creadetGanadoMogno)
const deleteGanadoMongoRepo: IDeleteGanadoRepo = new DeleteGanadoMongo()
const deleteGanadoService = new DeleteGanadoService(deleteGanadoMongoRepo)


export const createGanado = async (req: Request, res: Response) => {
    try {
        const ganado: Iganado = req.body;
        const marca = createIdGenerator();

        const new_ganado = { ...ganado, "marca_de_dueño": marca };

        const result = await createService.create(new_ganado)
        if (!result) {
            res.status(304).json({ msg: 'ganado  no created' })
        }
        res.status(201).json({ msg: 'ganado created', result })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}

export const findAll = async (req: Request, res: Response) => {
    try {
        const result = await findGanadoRepoService.findAll();
        if (!result) {
            res.status(304).json({ msg: 'ganado not found' })
        }
        res.status(201).json({ msg: 'ganado', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}

export const findByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await findGanadoRepoService.findByID(id);
        if (!result) {
            res.status(304).json({ msg: 'ganado not found' })
        }
        res.status(201).json({ msg: 'ganado', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const ganado: Iganado = req.body;
        const id = req.params.id
        console.log(id
        )
        const result = await updateGanadoService.update(id, ganado);
        if (!result) {
            res.status(304).json({ msg: 'ganado not found' })
        }
        res.status(201).json({ msg: 'ganado actualizado ', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}
export const deleteGanado = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const result = await deleteGanadoService.Delete(id);

        res.status(200).json({ msg: 'elements', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}