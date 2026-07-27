export type KpiTileData = {
  label: string;
  value: string;
  delta: string;
  deltaDir: 'up' | 'down';
  deltaNote: string;
  icon: string;
  color: string;
  spark: number[];
};

export type DonutItem = {
  label: string;
  value: number;
  percent: number;
  color: string;
};

export type BarListItem = {
  label: string;
  value: number;
  color: string;
};

export type ChartLine = {
  labels: string[];
  values: number[];
};
