import { ICultivosRepo } from "../repositories/cultivos.repo";
import { ICultivo } from "../types/ICultivos";
import { CultivoModel } from "../Models/cultivo.mongo";
import { ICultivoMongo } from "../types/ICultivos";

export class repoMongo implements ICultivosRepo {
  // ✅
  async findByID(id: any): Promise<ICultivo[] | null> {
    return await CultivoModel.findById(id);
  }

  // ✅
  async findAll(): Promise<ICultivo[]> {
    return await CultivoModel.find();
  }

  // ✅
  async create(element: ICultivo): Promise<ICultivoMongo> {
    const result = new CultivoModel(element);
    return await result.save();
  }

  // ✅
  async Delete(id: any): Promise<void> {
    await CultivoModel.findByIdAndDelete(id);
  }

  // ✅
  async update(id: any, element: Partial<ICultivo>): Promise<ICultivo | null> {
    return await CultivoModel.findByIdAndUpdate(id, element, { new: true });
  }
}
