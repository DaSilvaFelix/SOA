import { CultivoModel } from "agricultura/Models/cultivo.mongo";
import { MetricRepo } from "agricultura/repositories/metric.repo";

export class MetricCultivo implements MetricRepo {
  async getMetricForType(): Promise<any> {
    const metrics = await CultivoModel.aggregate([
      {
        $group: {
          _id: "$tipo_cultivo",

          // Métricas económicas
          totalGanancias: { $sum: "$ganancias_totales" },
          totalIngresos: { $sum: "$ingresos_por_venta" },
          promedioGananciaPorCultivo: { $avg: "$ganancias_totales" },
          promedioMargenBruto: { $avg: "$margen_bruto" },
          promedioPrecioPorKg: { $avg: "$precio_por_kg" },

          // Métricas de insumos
          totalCostos: {
            $sum: {
              $add: [
                { $ifNull: ["$costo_semillas", 0] },
                { $ifNull: ["$costo_fertilizantes", 0] },
                { $ifNull: ["$precio_fertilizante", 0] },
                { $ifNull: ["$costo_gasoil", 0] },
                { $ifNull: ["$pesticida_costo_por_aplicacion", 0] },
              ],
            },
          },
          promedioCostoSemillas: { $avg: "$costo_semillas" },
          promedioCostoFertilizantes: { $avg: "$costo_fertilizantes" },
          promedioPrecioFertilizante: { $avg: "$precio_fertilizante" },
          promedioCostoGasoil: { $avg: "$costo_gasoil" },
          promedioCostoPesticida: { $avg: "$pesticida_costo_por_aplicacion" },

          // Métricas productivas
          promedioRendimientoPorHa: { $avg: "$rendimiento_kg_por_ha" },
          promedioProduccionPorCultivo: { $avg: "$produccion_total_kg" },
          totalProduccionPorCultivo: { $sum: "$produccion_total_kg" },
          totalCosechaPorCultivo: { $sum: "$total_cosecha_kg" },
        },
      },
      {
        $addFields: {
          utilidadNeta: { $subtract: ["$totalGanancias", "$totalCostos"] },
        },
      },
    ]);
    return metrics;
  }
}
