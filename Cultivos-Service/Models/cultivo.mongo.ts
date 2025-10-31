import { Schema, Types, model } from "mongoose";
import { ICultivo } from "agricultura/types/ICultivos";

const CultivoSchema = new Schema<ICultivo>({

  // 🌱 INICIO DE PLANTACIÓN
  tipo_cultivo: { type: String, required: true },
  parcela: {
    type: Schema.Types.ObjectId,
    ref: "Parcelas",
    required: true
  },
  fecha_cultivo: { type: String, required: true },
  cultivo_asignado: { type: String, required: true },
  fertilizacion_tipo: { type: String },
  costo_semillas: { type: Number, required: true },
  fecha_estimada_de_cosecha: { type: String, require: true },

  // 🌿 ETAPA INTERMEDIA
  tipo_riego: { type: String },
  plagas: { type: String },
  pesticidas: { type: String },
  pesticida_fecha_aplicacion: { type: String },
  pesticida_costo_por_aplicacion: { type: Number },
  plagas_o_onfermedades: { type: String },

  // 🌾 FINALIZACIÓN DE CULTIVO
  fecha_cosecha: { type: String },
  total_cosecha_kg: { type: Number },
  precio_por_kg: { type: Number },
  ganancias_totales: { type: Number },
  produccion_total_kg: { type: Number },
  rendimiento_kg_por_ha: { type: Number },
  calidad_cosecha: { type: String },
  fecha_inicio_cosecha: { type: String },
  fecha_fin_cosecha: { type: String },
  costo_fertilizantes: { type: Number },
  costo_gasoil: { type: Number },
  ingresos_por_venta: { type: Number },
  margen_bruto: { type: Number },
});

export const CultivoModel = model("Cultivo", CultivoSchema);
