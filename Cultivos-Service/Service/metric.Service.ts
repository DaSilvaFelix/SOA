import { MetricRepo } from "agricultura/repositories/metric.repo";

export class RepoMetric {
  constructor(private repository: MetricRepo) {}

  async getMetricForType(): Promise<any> {
    return await this.repository.getMetricForType();
  }
}
