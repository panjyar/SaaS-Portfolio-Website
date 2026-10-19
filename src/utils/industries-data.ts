// ─── Industries Data ─────────────────────────────────────
// Single source of truth for all industry/experience pages

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryChallenge {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface IndustrySolution {
  title: string;
  description: string;
  keyPoints: string[];
  image: string;
}

export interface IndustryProduct {
  name: string;
  description: string;
  href: string;
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  stats: IndustryStat[];
  products: IndustryProduct[];
}

export const industries: Industry[] = [
  {
    slug: "luxury-wellness",
    name: "Luxury & Wellness",
    tagline: "Curated premium experiences and AI-optimized relaxation journeys.",
    description: "The luxury and wellness travel segment demands impeccable personalization and seamless transitions. YatraGen leverages advanced AI to curate exclusive itineraries that balance spa retreats, private tours, and five-star dining without overwhelming the traveler.",
    heroImage: "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cardImage: "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=800",
    challenges: [
      {
        title: "High Personalization Demand",
        description: "Luxury travelers expect itineraries tailored explicitly to their unique preferences and dietary requirements.",
        icon: "UserCheck",
      },
      {
        title: "Seamless Logistics",
        description: "Transitions between private jets, limousines, and yachts must be flawless with zero wait times.",
        icon: "Clock",
      },
      {
        title: "Exclusive Access",
        description: "Securing reservations at high-demand, exclusive venues requires predictive planning.",
        icon: "Key",
      },
    ],
    solutions: [
      {
        title: "AI-Curated Exclusivity",
        description: "YatraGen cross-references VIP availability networks with traveler profiles to secure exclusive access automatically.",
        keyPoints: [
          "Automated VIP reservation requests",
          "Dietary and preference synchronization",
          "Dynamic luxury routing",
        ],
        image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Wellness Schedule Optimization",
        description: "The AI ensures wellness activities are optimally spaced for maximum relaxation, avoiding travel fatigue.",
        keyPoints: [
          "Circadian rhythm-based scheduling",
          "Built-in buffer times for spa transitions",
          "Real-time weather adjustments for outdoor wellness",
        ],
        image: "https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    stats: [
      { value: "98%", label: "Client Satisfaction" },
      { value: "3x", label: "Faster Booking Concierge" },
      { value: "Zero", label: "Scheduling Conflicts" },
      { value: "100%", label: "Preference Match" },
    ],
    products: [
      {
        name: "YatraGen™",
        description: "AI-driven itinerary and preference optimization.",
        href: "/products/yatragen",
      },
    ],
  },
  {
    slug: "adventure-trekking",
    name: "Adventure & Trekking",
    tagline: "Dynamic routing and safety-first planning for extreme explorations.",
    description: "Adventure travel requires meticulous planning for varying terrain, weather conditions, and physical exertion levels. YatraGen provides dynamic, adaptive itineraries that adjust in real-time to mountain conditions, ensuring safety while maximizing thrill.",
    heroImage: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cardImage: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
    challenges: [
      {
        title: "Unpredictable Weather",
        description: "Mountain and trail conditions can change rapidly, necessitating instant itinerary shifts.",
        icon: "CloudRain",
      },
      {
        title: "Physical Pacing",
        description: "Overpacking an itinerary leads to exhaustion and altitude sickness on challenging treks.",
        icon: "Activity",
      },
      {
        title: "Safety & Monitoring",
        description: "Remote locations require stringent safety check-ins and emergency routing.",
        icon: "ShieldAlert",
      },
    ],
    solutions: [
      {
        title: "Dynamic Weather Re-Routing",
        description: "YatraGen continuously monitors micro-climate data and automatically proposes alternative safe routes when storms approach.",
        keyPoints: [
          "Live weather API integration",
          "Instant rerouting algorithms",
          "Automated shelter identification",
        ],
        image: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Exertion-Optimized Scheduling",
        description: "The AI calculates elevation gains and distances to ensure daily treks remain within the traveler's physical limits.",
        keyPoints: [
          "Elevation and grade analysis",
          "Adaptive pacing based on traveler fitness",
          "Acclimatization day scheduling",
        ],
        image: "https://images.pexels.com/photos/627163/pexels-photo-627163.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    stats: [
      { value: "40%", label: "Reduction in Weather Delays" },
      { value: "100%", label: "Safety Protocol Compliance" },
      { value: "85%", label: "Optimal Pace Matching" },
      { value: "24/7", label: "Real-time Route Monitoring" },
    ],
    products: [
      {
        name: "YatraGen™",
        description: "Dynamic routing and physical exertion optimization.",
        href: "/products/yatragen",
      },
      {
        name: "Darshan AI",
        description: "Visual landmark recognition for trail navigation.",
        href: "/products/darshanai",
      },
    ],
  },
  {
    slug: "historical-cultural",
    name: "Historical & Cultural",
    tagline: "Immersive storytelling and optimal site sequencing across time.",
    description: "Cultural trips are often densely packed with museums, ruins, and local experiences. YatraGen optimizes geographical routing and ticketing to minimize time spent in lines and transit, allowing travelers to deeply immerse themselves in history.",
    heroImage: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cardImage: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
    challenges: [
      {
        title: "Overcrowding & Lines",
        description: "Popular historical sites often suffer from massive queues and peak-hour overcrowding.",
        icon: "Users",
      },
      {
        title: "Geographical Sprawl",
        description: "Jumping erratically between landmarks across a city wastes valuable vacation hours in transit.",
        icon: "Map",
      },
      {
        title: "Information Overload",
        description: "Tourists often struggle to contextualize multiple historical periods in a single day.",
        icon: "BookOpen",
      },
    ],
    solutions: [
      {
        title: "Smart Crowd Avoidance",
        description: "YatraGen uses predictive crowd analytics to schedule visits to major landmarks during their quietest windows.",
        keyPoints: [
          "Peak-hour prediction modeling",
          "Automated skip-the-line ticketing",
          "Reverse-itinerary optimization",
        ],
        image: "https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Chronological or Spatial Sequencing",
        description: "The AI groups sites geographically to minimize transit time, or chronologically to create a coherent historical narrative.",
        keyPoints: [
          "Transit-time minimization",
          "Thematic day-planning",
          "Integrated local transport routes",
        ],
        image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    stats: [
      { value: "2hrs", label: "Daily Wait Time Saved" },
      { value: "30%", label: "Reduction in Transit Time" },
      { value: "100%", label: "Geographical Efficiency" },
      { value: "4x", label: "More Sites Visited Comfortably" },
    ],
    products: [
      {
        name: "YatraGen™",
        description: "Geographical and temporal itinerary sequencing.",
        href: "/products/yatragen",
      },
    ],
  },
  {
    slug: "backpacking-solo",
    name: "Backpacking & Solo",
    tagline: "Budget-optimized, flexible routing for independent explorers.",
    description: "Solo backpackers thrive on spontaneity, budget efficiency, and social connections. YatraGen offers highly flexible, cost-optimized itineraries that adapt to last-minute hostel bookings, train schedules, and newly discovered local spots.",
    heroImage: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cardImage: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
    challenges: [
      {
        title: "Budget Constraints",
        description: "Backpackers need to maximize experiences while strictly adhering to daily financial limits.",
        icon: "DollarSign",
      },
      {
        title: "Last-Minute Changes",
        description: "Rigid itineraries fail when solo travelers decide to stay longer in a city or join new friends.",
        icon: "RefreshCw",
      },
      {
        title: "Logistical Complexity",
        description: "Navigating local buses, trains, and obscure routes requires immense research time.",
        icon: "Compass",
      },
    ],
    solutions: [
      {
        title: "Cost-Optimized Routing",
        description: "YatraGen scans thousands of transit and hostel combinations to construct the cheapest possible overland routes.",
        keyPoints: [
          "Budget-cap adherence algorithms",
          "Alternative transport integration (buses/trains)",
          "Free activity recommendations",
        ],
        image: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "On-the-Fly Regeneration",
        description: "When plans change, the AI instantly recalculates the rest of the trip to accommodate new dates and locations without breaking the budget.",
        keyPoints: [
          "Instant itinerary recalculation",
          "Flexible cancellation tracking",
          "Spontaneous detour incorporation",
        ],
        image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    stats: [
      { value: "40%", label: "Average Budget Savings" },
      { value: "Seconds", label: "To Regenerate Altered Plans" },
      { value: "50+", label: "Transit Networks Integrated" },
      { value: "100%", label: "Solo Traveler Autonomy" },
    ],
    products: [
      {
        name: "YatraGen™",
        description: "Dynamic route and budget optimization.",
        href: "/products/yatragen",
      },
      {
        name: "Live Menu Translation",
        description: "Instant translation for local street food menus.",
        href: "/products/yatragen",
      },
    ],
  },
  {
    slug: "family-vacations",
    name: "Family Vacations",
    tagline: "Stress-free coordination for multi-generational group travel.",
    description: "Planning for a family means balancing the energy levels of toddlers, the interests of teenagers, and the accessibility needs of grandparents. YatraGen takes the stress out of family holidays by generating harmonized schedules with built-in buffer times.",
    heroImage: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cardImage: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=800",
    challenges: [
      {
        title: "Divergent Interests",
        description: "Finding activities that simultaneously engage different age groups is traditionally exhausting.",
        icon: "Users",
      },
      {
        title: "Strict Routines",
        description: "Families with young children need guaranteed meal times and nap windows.",
        icon: "Clock",
      },
      {
        title: "Logistical Nightmares",
        description: "Coordinating transport, seating, and connected rooms for large groups is highly prone to error.",
        icon: "AlertTriangle",
      },
    ],
    solutions: [
      {
        title: "Multi-Persona Optimization",
        description: "YatraGen evaluates the profiles of all family members and suggests composite activities or proximal split-itineraries.",
        keyPoints: [
          "Age-appropriate filtering",
          "Simultaneous nearby activities",
          "Accessibility routing",
        ],
        image: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Buffer-Integrated Scheduling",
        description: "The AI automatically inserts buffer times for transit, meals, and rest, ensuring the family is never rushed.",
        keyPoints: [
          "Mandatory meal-time blocking",
          "Paced transit calculations",
          "Fatigue prevention alerts",
        ],
        image: "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    stats: [
      { value: "Zero", label: "Missed Nap Times" },
      { value: "80%", label: "Less Planning Stress" },
      { value: "100%", label: "Group Accessibility" },
      { value: "5x", label: "Faster Group Bookings" },
    ],
    products: [
      {
        name: "YatraGen™",
        description: "Multi-persona itinerary balancing.",
        href: "/products/yatragen",
      },
    ],
  },
  {
    slug: "cruises-yachting",
    name: "Cruises & Yachting",
    tagline: "Precision port-of-call planning and seamless maritime logistics.",
    description: "Cruises and private yacht charters operate on strict maritime schedules. YatraGen ensures that shore excursions are flawlessly timed with docking windows, maximizing onshore experiences while guaranteeing zero missed departures.",
    heroImage: "https://images.pexels.com/photos/8782354/pexels-photo-8782354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cardImage: "https://images.pexels.com/photos/8782354/pexels-photo-8782354.jpeg?auto=compress&cs=tinysrgb&w=800",
    challenges: [
      {
        title: "Strict Time Constraints",
        description: "A delayed shore excursion can result in a traveler being left behind at port.",
        icon: "Watch",
      },
      {
        title: "Port Congestion",
        description: "Multiple mega-ships docking simultaneously overwhelm local infrastructure and transport.",
        icon: "Ship",
      },
      {
        title: "Vendor Reliability",
        description: "Finding reliable, punctual third-party tour operators at every new port is a gamble.",
        icon: "CheckCircle",
      },
    ],
    solutions: [
      {
        title: "Time-Gated Itinerary Builder",
        description: "YatraGen creates shore excursions with hard stop times, factoring in local traffic and port security lines.",
        keyPoints: [
          "Hard-stop time enforcement",
          "Traffic-aware return routing",
          "Automated delay buffers",
        ],
        image: "https://images.pexels.com/photos/4072844/pexels-photo-4072844.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Congestion Avoidance",
        description: "By tracking global cruise schedules, the AI routes travelers away from the primary crowded tourist traps to exclusive local experiences.",
        keyPoints: [
          "Multi-ship congestion tracking",
          "Off-the-beaten-path routing",
          "Verified local vendor integration",
        ],
        image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-landscape.jpg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    stats: [
      { value: "0", label: "Missed Departures" },
      { value: "45%", label: "More Time Onshore" },
      { value: "100%", label: "Verified Operators" },
      { value: "3x", label: "Less Port Congestion" },
    ],
    products: [
      {
        name: "YatraGen™",
        description: "Time-gated shore excursion optimization.",
        href: "/products/yatragen",
      },
    ],
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((ind) => ind.slug);
}
