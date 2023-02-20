import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { AnalyticsModel } from '../models/responseModels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface BarChartsProps {
  analytics: AnalyticsModel;
}

// eslint-disable-next-line arrow-body-style
export const BarChart = ({ analytics }: BarChartsProps) => {
  return (
    <div>
      <Bar
        datasetIdKey="id"
        data={analytics}
        options={{ backgroundColor: 'brown' }}
      />
    </div>
  );
};
