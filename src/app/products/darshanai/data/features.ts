export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Vehicle & Pedestrian Safety",
    description:
      "Unsafe interactions between workers, forklifts, trucks, loaders, and other industrial vehicles.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Vehicle detection camera feed",
    tags: [
      "Pedestrian proximity detection",
      "Blind spot monitoring",
      "Reversing vehicle alerts",
      "Vehicle-to-vehicle collision prevention",
      "Vehicle-to-human collision prevention",
    ],
  },
  {
    id: 2,
    title: "Red Zone Management",
    description:
      "Safe separation between personnel and hazardous operating zones.",
    image: "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Red zone monitoring",
    tags: [
      "Red zone violations",
      "Line-of-fire monitoring",
      "Equipment exclusion zones",
      "Geofenced safety boundaries",
      "Restricted access areas",
    ],
  },
  

  // Add more features here...
];