import { AnalyticsModel } from '../models/responseModels';
import { BarChart } from './BarChart';

interface AnalyticsChartsProps {
  analytics: AnalyticsModel;
}

export const AnalyticsCharts = ({ analytics }: AnalyticsChartsProps) => (
  <div>
    <BarChart analytics={analytics} />
  </div>
);
