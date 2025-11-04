import { GanadoModel } from "../Models/ganado.Model";
import { ICreateGanadoRepo } from "../repositories/CreateGanado.Repo";
import { IDeleteGanadoRepo } from "../repositories/DeleteGanado.Repo";
import { IfindGanadoRepo } from "../repositories/Find.repo";
import { IUpdateGanadoRepo } from "../repositories/UpdateGanado.Repo";
import { Iganado } from "../types/ganadoType";




export class FindGanadoMongoRepo implements IfindGanadoRepo {
    async findByID(id: any): Promise<Iganado[] | null> {
        return await GanadoModel.findById(id)
    }
    async findAll(): Promise<Iganado[]> {
        return await GanadoModel.find()
    }
}

export class CreateGanadoMongo implements ICreateGanadoRepo {
    async create(ganado: Iganado): Promise<Iganado> {
        const result = new GanadoModel(ganado);
        return await result.save()
    }

}

export class UpdateGanadoMongo implements IUpdateGanadoRepo {

    async update(id: any, ganado: Partial<Iganado>): Promise<Iganado | null> {
        return await GanadoModel.findByIdAndUpdate(id, ganado, { new: true })
    }
}
export class DeleteGanadoMongo implements IDeleteGanadoRepo {
    async Delete(id: any): Promise<void> {
        await GanadoModel.findByIdAndDelete(id)
    }
}