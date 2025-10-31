import { Iganado } from "../types/ganadoType"


export interface IfindGanadoRepo {
    findByID(id: any): Promise<Iganado[] | null>
    findAll(): Promise<Iganado[]>

}
