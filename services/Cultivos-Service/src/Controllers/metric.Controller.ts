import { MetricCultivo } from "../repoMongo/metricas_repo";
import { RepoMetric } from "../Service/metric.Service";
import { Request, Response } from "express";

const metricRepo = new MetricCultivo();
const metricService = new RepoMetric(metricRepo);

export const getMetric = async (req: Request, res: Response) => {
  const metrica = await metricService.getMetricForType();
  return res.status(200).json(metrica);
};
