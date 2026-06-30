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
    image: "https://vicasinfo.livnsense.com/media/gif/RZManagement.gif",
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
    image: "https://vicasinfo.livnsense.com/media/gif/VPSafety.gif",
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