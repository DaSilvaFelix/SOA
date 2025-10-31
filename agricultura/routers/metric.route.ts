import { Router } from "express";
import { getMetric } from "agricultura/Controllers/metric.Controller";

export const metricRouter = Router();

metricRouter.get("/metricType", getMetric);
