import { IParcela } from "../types/parcelaType";


export interface IUpdateParcelaRepo {
    update(id: any, parcela: Partial<IParcela>): Promise<IParcela | null>

}