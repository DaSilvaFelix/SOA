import { ICultivo } from "../types/ICultivos";
import { ICultivoMongo } from "../types/ICultivos";

export interface ICultivosRepo {
  findByID(id: any): Promise<ICultivo[] | null>;
  findAll(): Promise<ICultivo[]>;

  create(element: ICultivo): Promise<ICultivoMongo>;
  update(id: any, element: Partial<ICultivo>,): Promise<ICultivo | null>;
  Delete(id: any): Promise<void>;
}
