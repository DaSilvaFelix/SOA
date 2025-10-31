import { CreateParcelaMongo, DeleteParcelaMongo, FindParcelaMongoRepo, UpdateParcelaMongo } from "../repoMongo/ParcelaRepoMongo"
import { ICreateParcelaRepo } from "../repositories/CreateParcela.Repo"
import { IDeleteParcelaRepo } from "../repositories/DeleteParcela.Repo"
import { IfindParcelaRepo } from "../repositories/Find.repo"
import { IUpdateParcelaRepo } from "../repositories/UpdateParcela.Repo"
import { CreateParcelaervice, DeleteParcelaService, FindParcelaService, UpdateParcelaService } from "../Service/Parcela.Service"
import { IParcela } from "../types/parcelaType"
import { evaluarSuelo } from "../utils/asignarEstadoSuelo"
import { Request, Response } from "express";





const findParcelaRepoMongo: IfindParcelaRepo = new FindParcelaMongoRepo()
const findGanadoRepoService = new FindParcelaService(findParcelaRepoMongo)
const updateMongoRepo: IUpdateParcelaRepo = new UpdateParcelaMongo()
const updateParcelaService = new UpdateParcelaService(updateMongoRepo)
const creadetParcelaMogno: ICreateParcelaRepo = new CreateParcelaMongo()
const createService = new CreateParcelaervice(creadetParcelaMogno)
const deleteParcelaMongoRepo: IDeleteParcelaRepo = new DeleteParcelaMongo()
const deleteParcelaService = new DeleteParcelaService(deleteParcelaMongoRepo)


export const createParcela = async (req: Request, res: Response) => {
    try {
        const parcela: IParcela = req.body;
        parcela.estadoSuelo = evaluarSuelo(parcela.tipoSuelo, parcela.ph_suelo);

        const result = await createService.create(parcela);
        if (!result) {
            return res.status(304).json({ msg: 'Parcela no creada' });
        }
        res.status(201).json({ msg: 'Parcela creada', result });


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
        const parcela: IParcela = req.body;
        const id = req.params.id
        console.log(id
        )
        const result = await updateParcelaService.update(id, parcela);
        if (!result) {
            res.status(304).json({ msg: 'ganado not found' })
        }
        res.status(201).json({ msg: 'ganado actualizado ', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}
export const deleteParcela = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const result = await deleteParcelaService.Delete(id);

        res.status(200).json({ msg: 'elements', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}