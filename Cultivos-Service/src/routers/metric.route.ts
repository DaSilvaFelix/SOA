import { Router } from "express";
import { getMetric } from "../Controllers/metric.Controller";

export const metricRouter = Router();

metricRouter.get("/metricType", getMetric);
