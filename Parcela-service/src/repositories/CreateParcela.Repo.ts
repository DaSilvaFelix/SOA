import { IParcela } from "../types/parcelaType";


export interface ICreateParcelaRepo {
    create(parcela: IParcela): Promise<IParcela>

}