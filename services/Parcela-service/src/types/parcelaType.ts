export interface IParcela {
    readonly superficie: number,
    readonly ph_suelo: number,
    readonly coordenadas: {
        latitud: number;
        longitud: number;
    };
    readonly tipoSuelo: string,
    estadoSuelo: string
}
