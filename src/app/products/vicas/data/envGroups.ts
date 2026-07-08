type EnvCard = {
  title: string;
  image: string;
};

type EnvGroup = {
  label: string;
  cards: EnvCard[];
  speedClass: string;
};

export const envGroups: EnvGroup[] = [
  {
    label: "Fixed Infrastructure",
    speedClass: "vicas-env-track-slow",
    cards: [
      {
        title: "Warehouses",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Manufacturing plants",
        image:
          "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Construction sites",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Loading bays",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Industrial yards",
        image:
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    label: "Mobile Operations",
    speedClass: "vicas-env-track-fast",
    cards: [
      {
        title: "Forklifts",
        image:
          "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Reach stackers",
        image:
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Haul trucks",
        image:
          "https://images.unsplash.com/photo-1600490813438-1e53e9832f43?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Cranes",
        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Service vehicles",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];
