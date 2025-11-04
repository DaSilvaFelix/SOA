import { Iganado } from "../types/ganadoType";


export interface ICreateGanadoRepo {
    create(ganado: Iganado): Promise<Iganado>

}