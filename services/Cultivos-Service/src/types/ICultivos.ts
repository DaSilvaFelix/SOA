import { Document } from "mongoose";

export interface ICultivo {

  // 🌱 INICIO DE PLANTACIÓN
  tipo_cultivo: string;
  parcela: any;
  fecha_cultivo: string;
  ph: number;
  cantidad_parcelas: number;
  estado_parcela: string;
  cultivo_asignado: string;
  tipo_suelo?: string;
  fertilizacion_tipo?: string;
  costo_semillas: number;
  fecha_estimada_de_cosecha: string;

  // 🌿 ETAPA INTERMEDIA
  tipo_riego?: string;
  plagas?: string;
  pesticidas?: string;
  pesticida_fecha_aplicacion?: string;
  pesticida_costo_por_aplicacion?: number;
  plagas_o_onfermedades: string;

  // 🌾 FINALIZACIÓN DE CULTIVO
  fecha_cosecha?: string;
  total_cosecha_kg?: number;
  precio_por_kg?: number;
  ganancias_totales?: number;
  produccion_total_kg?: number;
  rendimiento_kg_por_ha?: number;
  calidad_cosecha?: string;
  fecha_inicio_cosecha?: string;
  fecha_fin_cosecha?: string;
  costo_fertilizantes?: number;
  costo_gasoil?: number;
  ingresos_por_venta?: number;
  margen_bruto?: number;
}

export interface ICultivoMongo extends Document {
  tipo_cultivo: string;
  parcela: any;
  fecha_cultivo: string;
  ph: number;
  estado_parcela: string;
  cultivo_asignado: string;
  tipo_suelo?: string;
  fertilizacion_tipo?: string;
  costo_semillas: number;
  tipo_riego?: string;
  plagas?: string;
  pesticidas?: string;
  pesticida_fecha_aplicacion?: string;
  pesticida_costo_por_aplicacion?: number;
  plagas_o_onfermedades: string;
  fecha_cosecha?: string;
  total_cosecha_kg?: number;
  precio_por_kg?: number;
  ganancias_totales?: number;
  produccion_total_kg?: number;
  rendimiento_kg_por_ha?: number;
  calidad_cosecha?: string;
  fecha_inicio_cosecha?: string;
  fecha_fin_cosecha?: string;
  costo_fertilizantes?: number;
  costo_gasoil?: number;
  ingresos_por_venta?: number;
  margen_bruto?: number;
  fecha_estimada_de_cosecha: string;
}
