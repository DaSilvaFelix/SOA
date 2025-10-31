import { ICreateGanadoRepo } from "../repositories/CreateGanado.Repo"
import { IDeleteGanadoRepo } from "../repositories/DeleteGanado.Repo"
import { IfindGanadoRepo } from "../repositories/Find.repo"
import { IUpdateGanadoRepo } from "../repositories/UpdateGanado.Repo"
import { Iganado } from "../types/ganadoType"


export class CreateGanadoService implements ICreateGanadoRepo {
    constructor(
        private readonly createMongoRepo: ICreateGanadoRepo
    ) { }
    async create(ganado: Iganado): Promise<Iganado> {
        return await this.createMongoRepo.create(ganado)
    }
}
export class UpdateGanado implements IUpdateGanadoRepo {
    constructor(
        private readonly updateMongoRepo: IUpdateGanadoRepo
    ) { }
    async update(id: any, ganado: Partial<Iganado>): Promise<Iganado | null> {
        return await this.updateMongoRepo.update(id, ganado)
    }
}

export class DeleteGanadoService implements IDeleteGanadoRepo {
    constructor(
        private readonly deleteMongoRepo: IDeleteGanadoRepo
    ) { }

    async Delete(id: any): Promise<void> {
        await this.deleteMongoRepo.Delete(id)
    }
}
export class FindGanadoService implements IfindGanadoRepo {
    constructor(
        private readonly findMongoRepo: IfindGanadoRepo
    ) { }
    async findAll(): Promise<Iganado[]> {
        return this.findMongoRepo.findAll()
    }
    async findByID(id: any): Promise<Iganado[] | null> {
        return this.findMongoRepo.findByID(id)
    }
}