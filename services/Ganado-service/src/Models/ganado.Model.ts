

import { model, Schema } from "mongoose";
import { Iganado } from "../types/ganadoType";




const GanadoSchema = new Schema<Iganado>(
    {
        marca_de_dueño: {
            type: String,
            required: true,
            trim: true,
        },
        raza: {
            type: String,
            required: true,
        },
        sexo: {
            type: String,
            enum: ["Hembra", "Macho"],
            required: true,
        },
        edad: {
            type: Number,
            required: true,
            min: 0,
        },
        vacunaciones: {
            nombre: { type: String, required: true },
            fecha: { type: Date, required: true },
            proxima: { type: Date },
            docis: { type: Number, required: true },
        },
        antiparacitario: {
            type: Number,
            required: true,
            min: 0,
        },
        vitaminas: {
            type: String,
            required: true,
        },
        entrada_pastoreo: {
            type: Date,
            required: true,
        },
        salida_pastore: {
            type: Date,
            required: true,
        },
        total_vacas: {
            type: Number,
            required: true,
            min: 0,
        },
        proposito: {
            type: String,
            enum: ["reproductor", "matadero", "cría"],
            required: true,
        },
        coordenadas: {
            latitud: { type: Number, required: false },
            longitud: { type: Number, required: false },
        },
        total_vacas_vendidas: {
            type: Number,
            required: true
        },
        inicio_ciclo_celo: {
            type: Date,
        },

        fin_ciclo_celo: {
            type: Date,
        },
        horaIngresoMatadero: {
            type: String,
        },
        fecha_inicio_ayuno: {
            type: Date,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const GanadoModel = model<Iganado>("Ganado", GanadoSchema);

