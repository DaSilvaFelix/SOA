export interface Iganado {
    readonly marca_de_dueño: string,
    readonly raza: string,
    readonly sexo: "Hembra" | "Macho",
    readonly edad: number,
    readonly vacunaciones: {
        nombre: string,
        fecha: Date,
        proxima?: Date,
        docis: number
    },
    readonly antiparacitario: number,
    readonly vitaminas: string,
    readonly entrada_pastoreo: Date,
    readonly salida_pastore: Date,
    readonly total_vacas: number
    readonly proposito: "reproductor" | "matadero" | "cría";
    readonly coordenadas: {
        latitud: number;
        longitud: number;
    };
    total_vacas_vendidas: number,
    readonly inicio_ciclo_celo?: Date,
    readonly fin_ciclo_celo?: Date,
    readonly isPregnant?: boolean,
    readonly fechaProbableParto?: Date,
    readonly horaIngresoMatadero?: string,
    readonly fecha_inicio_ayuno?: Date,
}
