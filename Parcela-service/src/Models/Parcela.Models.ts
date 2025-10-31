import mongoose, { model, Schema } from "mongoose";
import { IParcela } from "../types/parcelaType";



const ParcelaSchema = new Schema<IParcela>({

    superficie: {
        type: Number,
        required: true
    },
    ph_suelo: {
        type: Number,
        required: true
    },
    coordenadas: {
        latitud: { type: Number, required: false },
        longitud: { type: Number, required: false },
    },
    tipoSuelo: {
        type: String,
        required: true
    },
    estadoSuelo: {
        type: String,
        required: true
    }
}
);

export const ParcelaModel = model<IParcela>("Parcelas", ParcelaSchema);

