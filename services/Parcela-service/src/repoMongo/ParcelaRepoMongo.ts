import { ParcelaModel } from "../Models/Parcela.Models";
import { ICreateParcelaRepo } from "../repositories/CreateParcela.Repo";
import { IDeleteParcelaRepo } from "../repositories/DeleteParcela.Repo";
import { IfindParcelaRepo } from "../repositories/Find.repo";
import { IUpdateParcelaRepo } from "../repositories/UpdateParcela.Repo";
import { IParcela } from "../types/parcelaType";





export class FindParcelaMongoRepo implements IfindParcelaRepo {
    async findByID(id: any): Promise<IParcela[] | null> {
        return await ParcelaModel.findById(id)
    }
    async findAll(): Promise<IParcela[]> {
        return await ParcelaModel.find()
    }
}

export class CreateParcelaMongo implements ICreateParcelaRepo {
    async create(parcela: IParcela): Promise<IParcela> {
        const result = new ParcelaModel(parcela);
        return await result.save()
    }

}

export class UpdateParcelaMongo implements IUpdateParcelaRepo {

    async update(id: any, parcela: Partial<IParcela>): Promise<IParcela | null> {
        return await ParcelaModel.findByIdAndUpdate(id, parcela, { new: true })
    }
}
export class DeleteParcelaMongo implements IDeleteParcelaRepo {
    async Delete(id: any): Promise<void> {
        await ParcelaModel.findByIdAndDelete(id)
    }
}