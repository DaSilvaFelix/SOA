import { ICultivosRepo } from "agricultura/repositories/cultivos.repo";
import { ICultivo } from "agricultura/types/ICultivos";
import { ICultivoMongo } from "agricultura/types/ICultivos";
import { Types } from "mongoose";

export class CultivoService implements ICultivosRepo {
  constructor(private readonly mongorepo: ICultivosRepo) { }

  async create(element: ICultivo,): Promise<ICultivoMongo> {
    return await this.mongorepo.create(element);
  }

  async findAll(): Promise<ICultivo[]> {
    return await this.mongorepo.findAll();
  }

  async findByID(id: any): Promise<ICultivo[] | null> {
    return await this.mongorepo.findByID(id);
  }

  async update(element: Partial<ICultivo>, id: any): Promise<ICultivo | null> {
    return await this.mongorepo.update(id, element);
  }

  async Delete(id: any): Promise<void> {
    await this.mongorepo.Delete(id);
  }
}
