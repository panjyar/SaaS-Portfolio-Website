export interface DarshanAIMetric {
  target: number;
  suffix: string;
  label: string;
}

export const darshanaiMetrics: DarshanAIMetric[] = [
  {
    target: 99,
    suffix: "%+",
    label: "Detection Accuracy",
  },
  {
    target: 50000,
    suffix: "+",
    label: "Safety Events Detected",
  },
  {
    target: 4,
    suffix: "B+",
    label: "Video Frames Analyzed",
  },
  {
    target: 100,
    suffix: "+",
    label: "Assets Managed",
  },
];
