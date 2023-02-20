export interface GooglePropertiesResponse {
  data: GoogleProperties[];
}

export interface GoogleProperties {
  property: string;
  displayName: string;
}

export interface AnalyticsModel {
  labels: string[];
  datasets: DatasetsModel[];
}

export interface DatasetsModel {
  data: number[];
  backgroundColor: string[];
  label: string;
}

export interface AnalyticsMetrics {
  value: string;
}
