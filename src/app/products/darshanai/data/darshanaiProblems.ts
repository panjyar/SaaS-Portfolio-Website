export interface DarshanAIProblem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export const darshanaiProblems: DarshanAIProblem[] = [
  {
    id: "limited-visibility",
    title: "Limited Visibility",
    description:
      "Industrial operations generate continuous movement across people, vehicles and equipment.",
    bullets: [
      "Delayed risk identification",
      "Reduced situational awareness",
      "Higher operational exposure",
    ],
  },
  {
    id: "reactive-risk",
    title: "Reactive Risk Management",
    description:
      "Safety decisions often rely on manual observation and post-incident investigations.",
    bullets: [
      "Preventable incidents",
      "Slower response times",
      "Repeated safety issues",
    ],
  },
  {
    id: "untapped-data",
    title: "Untapped Operational Data",
    description:
      "Large volumes of visual data are captured every day, but little is converted into actionable insight.",
    bullets: [
      "Missed risk indicators",
      "Delayed decisions",
      "Lost operational intelligence",
    ],
  },
  {
    id: "manual-monitoring",
    title: "Manual Compliance Monitoring",
    description:
      "Monitoring PPE, restricted zones and safety protocols requires constant supervision.",
    bullets: [
      "Compliance gaps",
      "Audit challenges",
      "Increased operational effort",
    ],
  },
];
