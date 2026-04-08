// ─── Industries Data ─────────────────────────────────────
// Single source of truth for all industry pages

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
    slug: "cement",
    name: "Cement",
    tagline: "AI-driven kiln optimization and deep decarbonization for cement manufacturing.",
    description:
      "The cement industry accounts for approximately 8% of global CO₂ emissions. LivNSense empowers cement plants with AI-driven kiln optimization, alternative fuel management, and real-time process intelligence to reduce energy consumption and emissions — without compromising throughput or quality.",
    heroImage: "/Industries/cement.jpg",
    cardImage: "/Industries/cement.jpg",
    challenges: [
      {
        title: "High Energy Consumption",
        description:
          "Cement kilns are among the most energy-intensive industrial equipment, consuming massive amounts of thermal and electrical energy.",
        icon: "Flame",
      },
      {
        title: "Carbon-Intensive Process",
        description:
          "Calcination and fuel combustion generate significant CO₂ emissions, making decarbonization a critical challenge.",
        icon: "Cloud",
      },
      {
        title: "Inconsistent Quality",
        description:
          "Variations in raw material composition and process parameters lead to unpredictable product quality.",
        icon: "AlertTriangle",
      },
    ],
    solutions: [
      {
        title: "AI-Powered Kiln Optimization",
        description:
          "GreenOps uses digital twin models to continuously monitor and optimize kiln operations, reducing specific heat consumption by up to 5% while maintaining clinker quality.",
        keyPoints: [
          "Real-time thermal profile optimization",
          "Predictive control for kiln stability",
          "Alternative fuel ratio optimization",
        ],
        image: "https://vicasinfo.livnsense.com/media/industries/cement-plant.jpg",
      },
      {
        title: "Emissions Monitoring & Reduction",
        description:
          "Continuous tracking of CO₂, NOx, and SOx emissions with AI-driven recommendations for process adjustments that minimize environmental impact.",
        keyPoints: [
          "Real-time emissions dashboard",
          "Automated compliance reporting",
          "Carbon credit optimization",
        ],
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
      },
    ],
    stats: [
      { value: "5-8%", label: "Reduction in Specific Heat Consumption" },
      { value: "15%", label: "Reduction in Carbon Emissions" },
      { value: "10%", label: "Improvement in Alternative Fuel Usage" },
      { value: "99.5%", label: "Kiln Uptime Achieved" },
    ],
    products: [
      {
        name: "GreenOps™",
        description: "AI-driven energy optimization and decarbonization platform.",
        href: "/products/greenops",
      },
    ],
  },
  {
    slug: "steel-mining",
    name: "Steel & Mining",
    tagline: "Enhance furnace performance and operational safety across steel and mining operations.",
    description:
      "Steel manufacturing and mining are pillars of global infrastructure — but they also carry significant energy, safety, and environmental challenges. LivNSense deploys AI and digital twin technologies to optimize furnace operations, improve energy efficiency, and enable proactive safety monitoring across mines and steel plants.",
    heroImage: "/Industries/steel.jpg",
    cardImage: "/Industries/steel.jpg",
    challenges: [
      {
        title: "Extreme Operating Conditions",
        description:
          "Furnaces operate at extreme temperatures with highly variable inputs, making consistent optimization difficult.",
        icon: "Thermometer",
      },
      {
        title: "Worker Safety Risks",
        description:
          "Mining and steel operations pose significant hazards from heavy equipment, confined spaces, and toxic exposure.",
        icon: "ShieldAlert",
      },
      {
        title: "Resource Inefficiency",
        description:
          "Suboptimal resource utilization leads to waste, higher costs, and increased environmental footprint.",
        icon: "TrendingDown",
      },
    ],
    solutions: [
      {
        title: "Furnace & Melt Shop Optimization",
        description:
          "AI models analyze real-time sensor data from EAFs and BOFs to optimize energy input, flux addition, and tap-to-tap times.",
        keyPoints: [
          "Electric Arc Furnace energy optimization",
          "Slag chemistry prediction",
          "Tap-to-tap cycle time reduction",
        ],
        image: "https://vicasinfo.livnsense.com/media/industries/steel_and_metal.png",
      },
      {
        title: "Smart Safety Monitoring",
        description:
          "VICAS provides real-time computer vision-based safety monitoring across mines and production floors.",
        keyPoints: [
          "PPE compliance detection",
          "Restricted zone intrusion alerts",
          "Vehicle-person proximity warnings",
        ],
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      },
    ],
    stats: [
      { value: "12%", label: "Energy Savings in Furnace Ops" },
      { value: "40%", label: "Reduction in Safety Incidents" },
      { value: "14%", label: "Downtime Reduction" },
      { value: "8%", label: "Yield Improvement" },
    ],
    products: [
      {
        name: "GreenOps™",
        description: "Furnace optimization and energy intelligence.",
        href: "/products/greenops",
      },
      {
        name: "VICAS™",
        description: "AI-powered safety monitoring for mines and plants.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    tagline: "Predictive maintenance and process optimization for safe, efficient oil & gas operations.",
    description:
      "The oil and gas industry operates in high-stakes environments where equipment failure can mean catastrophic safety hazards and massive financial losses. LivNSense brings AI-powered predictive maintenance, real-time process optimization, and safety intelligence to upstream, midstream, and downstream operations.",
    heroImage: "https://vicasinfo.livnsense.com/media/industries/oil_and_gas.jpg",
    cardImage: "https://vicasinfo.livnsense.com/media/industries/oil_and_gas.jpg",
    challenges: [
      {
        title: "Equipment Failure Risk",
        description:
          "Aging infrastructure and harsh operating conditions lead to frequent unplanned shutdowns and safety hazards.",
        icon: "AlertOctagon",
      },
      {
        title: "Flare & Emission Management",
        description:
          "Regulatory pressure to reduce flaring and fugitive emissions is increasing rapidly worldwide.",
        icon: "Wind",
      },
      {
        title: "Pipeline Integrity",
        description:
          "Thousands of kilometers of pipelines are vulnerable to corrosion, leaks, and third-party damage.",
        icon: "Droplets",
      },
    ],
    solutions: [
      {
        title: "Predictive Equipment Maintenance",
        description:
          "AI models analyze vibration, temperature, and flow data to predict equipment failures weeks in advance.",
        keyPoints: [
          "Rotating equipment health scoring",
          "Compressor and pump anomaly detection",
          "Maintenance schedule optimization",
        ],
        image: "https://vicasinfo.livnsense.com/media/industries/oil_and_gas.jpg",
      },
      {
        title: "Refinery Unit Optimization",
        description:
          "Digital twin models of distillation columns, reactors, and heat exchangers optimize energy and throughput simultaneously.",
        keyPoints: [
          "Crude unit optimization",
          "Heat integration improvement",
          "Energy intensity reduction",
        ],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      },
    ],
    stats: [
      { value: "18%", label: "Reduction in Incidents" },
      { value: "25%", label: "Less Unplanned Downtime" },
      { value: "10%", label: "Energy Cost Savings" },
      { value: "3x", label: "Faster Anomaly Detection" },
    ],
    products: [
      {
        name: "GreenOps™",
        description: "Refinery optimization and energy management.",
        href: "/products/greenops",
      },
      {
        name: "VICAS™",
        description: "Safety monitoring for oil & gas facilities.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "chemicals-pharma",
    name: "Chemicals & Pharma",
    tagline: "Optimize process heat, improve batch quality, and ensure regulatory compliance.",
    description:
      "Chemical and pharmaceutical manufacturing demands precise process control, strict quality standards, and rigorous regulatory compliance. LivNSense's AI platform monitors reactor conditions, optimizes energy usage across batch and continuous processes, and ensures environmental compliance — enabling safer, greener, and more profitable operations.",
    heroImage: "https://vicasinfo.livnsense.com/media/industries/pharma-and-chemical.jpg",
    cardImage: "https://vicasinfo.livnsense.com/media/industries/pharma-and-chemical.jpg",
    challenges: [
      {
        title: "Batch Quality Variability",
        description:
          "Complex reaction kinetics and multiple input variables make consistent batch quality a persistent challenge.",
        icon: "Beaker",
      },
      {
        title: "Energy-Intensive Processes",
        description:
          "Distillation, drying, and reaction processes consume significant thermal and electrical energy.",
        icon: "Zap",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Strict GMP, FDA, and environmental regulations require continuous monitoring and documentation.",
        icon: "ClipboardCheck",
      },
    ],
    solutions: [
      {
        title: "Process Heat Optimization",
        description:
          "AI-driven optimization of heat exchangers, boilers, and steam systems to reduce specific energy consumption.",
        keyPoints: [
          "Steam network balancing",
          "Heat integration analysis",
          "Boiler efficiency maximization",
        ],
        image: "https://vicasinfo.livnsense.com/media/industries/pharma-and-chemical.jpg",
      },
      {
        title: "Intelligent Quality Control",
        description:
          "Real-time process analytics predict batch outcomes and recommend parameter adjustments to maintain quality targets.",
        keyPoints: [
          "Predictive batch quality scoring",
          "In-process adjustment recommendations",
          "Automated compliance documentation",
        ],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
      },
    ],
    stats: [
      { value: "12%", label: "Reduction in Energy Costs" },
      { value: "30%", label: "Fewer Batch Rejections" },
      { value: "99%", label: "Regulatory Compliance Rate" },
      { value: "8%", label: "Improvement in OEE" },
    ],
    products: [
      {
        name: "GreenOps™",
        description: "Process optimization for chemical & pharma manufacturing.",
        href: "/products/greenops",
      },
    ],
  },
  {
    slug: "railways",
    name: "Railways",
    tagline: "AI-powered safety intelligence and operational efficiency for modern rail infrastructure.",
    description:
      "Railway operations span vast networks with complex scheduling, safety requirements, and infrastructure maintenance challenges. LivNSense brings computer vision and AI analytics to rail operations — enabling real-time safety monitoring at stations, predictive maintenance for tracks and rolling stock, and intelligent traffic management.",
    heroImage: "/Industries/railways.jpg",
    cardImage: "/Industries/railways.jpg",
    challenges: [
      {
        title: "Platform Safety",
        description:
          "Crowded platforms, gap hazards, and trespassing require constant human monitoring — an inherently unreliable approach.",
        icon: "Users",
      },
      {
        title: "Track Maintenance",
        description:
          "Thousands of kilometers of track require continuous inspection to prevent failures and derailments.",
        icon: "Wrench",
      },
      {
        title: "Operational Delays",
        description:
          "Unplanned equipment failures and poor scheduling cascade into system-wide delays and revenue loss.",
        icon: "Clock",
      },
    ],
    solutions: [
      {
        title: "Platform & Station Safety",
        description:
          "VICAS deploys computer vision at platforms and crossings to detect unsafe behavior, overcrowding, and trespassing in real time.",
        keyPoints: [
          "Crowd density monitoring",
          "Platform gap detection",
          "Unauthorized crossing alerts",
        ],
        image: "/Industries/railways.jpg",
      },
      {
        title: "Predictive Track Maintenance",
        description:
          "AI analytics on track sensor data predict wear patterns and identify maintenance needs before failures occur.",
        keyPoints: [
          "Rail wear prediction models",
          "Switch and signal health monitoring",
          "Maintenance schedule optimization",
        ],
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
      },
    ],
    stats: [
      { value: "35%", label: "Faster Incident Response" },
      { value: "50%", label: "Reduction in Track Failures" },
      { value: "20%", label: "Improvement in On-Time Performance" },
      { value: "24/7", label: "Continuous Safety Monitoring" },
    ],
    products: [
      {
        name: "VICAS™",
        description: "AI safety intelligence for rail infrastructure.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "ports",
    name: "Ports",
    tagline: "Smart port operations with AI-driven safety, logistics, and environmental monitoring.",
    description:
      "Ports are complex logistical hubs where heavy equipment, large vessels, and thousands of workers interact in dynamic environments. LivNSense brings AI-powered surveillance, vessel traffic intelligence, and environmental monitoring to modern port operations — improving safety, throughput, and compliance.",
    heroImage: "/Industries/port.jpg",
    cardImage: "/Industries/port.jpg",
    challenges: [
      {
        title: "Complex Safety Environment",
        description:
          "Heavy cranes, container handling, and vehicle movements create multiple simultaneous hazard zones.",
        icon: "ShieldAlert",
      },
      {
        title: "Cargo Handling Efficiency",
        description:
          "Inefficient berth allocation and crane scheduling lead to vessel waiting times and revenue losses.",
        icon: "Package",
      },
      {
        title: "Environmental Compliance",
        description:
          "Air quality, water discharge, and noise regulations require continuous monitoring in port areas.",
        icon: "Leaf",
      },
    ],
    solutions: [
      {
        title: "Port Safety Intelligence",
        description:
          "Computer vision monitors quay areas, container yards, and gate zones for PPE compliance, vehicle proximity, and unauthorized access.",
        keyPoints: [
          "Crane operation zone monitoring",
          "Vehicle-pedestrian collision avoidance",
          "PPE compliance across port zones",
        ],
        image: "/Industries/port.jpg",
      },
      {
        title: "Operational Analytics",
        description:
          "AI-driven analytics optimize berth allocation, crane scheduling, and truck turnaround times.",
        keyPoints: [
          "Berth scheduling optimization",
          "Container yard efficiency",
          "Gate-in/gate-out time reduction",
        ],
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
      },
    ],
    stats: [
      { value: "30%", label: "Fewer Safety Incidents" },
      { value: "22%", label: "Improvement in Throughput" },
      { value: "15%", label: "Reduction in Turnaround Time" },
      { value: "100%", label: "Environmental Compliance" },
    ],
    products: [
      {
        name: "VICAS™",
        description: "Safety and surveillance for port operations.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Reduce emissions, optimize production, and improve energy efficiency across manufacturing.",
    description:
      "Manufacturing facilities face relentless pressure to improve efficiency, reduce waste, and meet sustainability targets. LivNSense's AI platform brings real-time process intelligence, energy optimization, and safety monitoring to discrete and process manufacturing environments — driving operational excellence and measurable ESG impact.",
    heroImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80",
    cardImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    challenges: [
      {
        title: "Production Downtime",
        description:
          "Unplanned equipment failures and changeover inefficiencies cost manufacturers millions annually.",
        icon: "AlertTriangle",
      },
      {
        title: "Energy Waste",
        description:
          "Compressed air leaks, HVAC inefficiency, and motor overuse waste 20-30% of total energy consumption.",
        icon: "Zap",
      },
      {
        title: "Quality Defects",
        description:
          "Process variations lead to scrap, rework, and warranty claims that erode margins.",
        icon: "X",
      },
    ],
    solutions: [
      {
        title: "Smart Factory Energy Management",
        description:
          "AI monitors every energy-consuming asset across the factory floor and optimizes usage in real time.",
        keyPoints: [
          "Motor and drive efficiency optimization",
          "Compressed air leak detection",
          "HVAC demand-based control",
        ],
        image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      },
      {
        title: "Production Floor Safety",
        description:
          "VICAS monitors assembly lines and shop floors for PPE compliance, ergonomic risks, and unsafe behaviors.",
        keyPoints: [
          "Real-time PPE detection",
          "Ergonomic risk assessment",
          "Near-miss incident capture",
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
    ],
    stats: [
      { value: "12%", label: "CO₂ Reduction" },
      { value: "18%", label: "Energy Cost Savings" },
      { value: "25%", label: "Fewer Safety Incidents" },
      { value: "15%", label: "OEE Improvement" },
    ],
    products: [
      {
        name: "GreenOps™",
        description: "Factory energy optimization platform.",
        href: "/products/greenops",
      },
      {
        name: "VICAS™",
        description: "Shop floor safety intelligence.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "warehouses",
    name: "Warehouses",
    tagline: "AI-powered safety and operational intelligence for warehouse and logistics operations.",
    description:
      "Modern warehouses are high-velocity environments with forklifts, conveyor systems, and workers operating in close proximity. LivNSense deploys computer vision and IoT intelligence to detect safety hazards, optimize material handling, and monitor environmental conditions — creating safer and more efficient distribution centers.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    cardImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    challenges: [
      {
        title: "Forklift Collisions",
        description:
          "Forklift-pedestrian incidents are one of the leading causes of warehouse injuries and fatalities.",
        icon: "Car",
      },
      {
        title: "Ergonomic Injuries",
        description:
          "Repetitive lifting, bending, and carrying lead to musculoskeletal disorders and high absenteeism.",
        icon: "Activity",
      },
      {
        title: "Inventory Accuracy",
        description:
          "Manual counting and barcode scanning are slow and error-prone, leading to stockouts and overstock.",
        icon: "Package",
      },
    ],
    solutions: [
      {
        title: "Collision Avoidance",
        description:
          "VICAS computer vision detects forklift-pedestrian proximity in real time and triggers instant alerts.",
        keyPoints: [
          "Real-time collision zone monitoring",
          "Forklift speed compliance tracking",
          "Pedestrian pathway enforcement",
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      },
      {
        title: "Warehouse Safety Analytics",
        description:
          "AI-driven analytics identify high-risk zones, peak traffic periods, and recurring safety patterns.",
        keyPoints: [
          "Heat maps of safety incidents",
          "Shift-based risk scoring",
          "Compliance trend reporting",
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      },
    ],
    stats: [
      { value: "60%", label: "Reduction in Near-Miss Incidents" },
      { value: "45%", label: "Fewer Forklift Collisions" },
      { value: "24/7", label: "Continuous Safety Monitoring" },
      { value: "3x", label: "Faster Incident Detection" },
    ],
    products: [
      {
        name: "VICAS™",
        description: "Warehouse safety and collision avoidance.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "food",
    name: "Food",
    tagline: "Ensure food safety, optimize process energy, and maintain regulatory compliance.",
    description:
      "The food and beverage industry faces unique challenges in maintaining product safety, process consistency, and energy efficiency across diverse production lines. LivNSense brings AI-powered process monitoring, energy optimization, and compliance intelligence to food manufacturing — ensuring quality, safety, and sustainability.",
    heroImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80",
    cardImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    challenges: [
      {
        title: "Product Safety & Hygiene",
        description:
          "Contamination risks and strict hygiene standards require continuous monitoring of personnel and equipment.",
        icon: "ShieldCheck",
      },
      {
        title: "Energy-Intensive Processing",
        description:
          "Cooking, pasteurization, refrigeration, and packaging consume large amounts of energy.",
        icon: "Flame",
      },
      {
        title: "Regulatory Compliance",
        description:
          "FSSAI, FDA, and HACCP standards require rigorous documentation and traceability.",
        icon: "ClipboardCheck",
      },
    ],
    solutions: [
      {
        title: "Hygiene & Compliance Monitoring",
        description:
          "Computer vision monitors worker hygiene compliance — hairnets, gloves, handwashing — and flags violations in real time.",
        keyPoints: [
          "PPE and hygiene compliance detection",
          "Handwashing protocol monitoring",
          "Clean-in-place verification",
        ],
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
      },
      {
        title: "Process Energy Optimization",
        description:
          "AI optimizes refrigeration, cooking, and HVAC systems to reduce energy waste while maintaining food safety standards.",
        keyPoints: [
          "Refrigeration efficiency optimization",
          "Cooking process energy modeling",
          "Cold chain integrity monitoring",
        ],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      },
    ],
    stats: [
      { value: "99.8%", label: "Hygiene Compliance Rate" },
      { value: "15%", label: "Energy Cost Reduction" },
      { value: "Zero", label: "Contamination Incidents" },
      { value: "100%", label: "Traceability Coverage" },
    ],
    products: [
      {
        name: "GreenOps™",
        description: "Energy optimization for food processing.",
        href: "/products/greenops",
      },
      {
        name: "VICAS™",
        description: "Hygiene and safety compliance monitoring.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    tagline: "Enhance construction site safety and reduce workplace hazards with AI vision.",
    description:
      "Construction sites are among the most hazardous work environments, with falls, struck-by incidents, and equipment-related injuries causing thousands of fatalities annually. LivNSense deploys VICAS computer vision at construction sites to provide real-time safety monitoring, PPE compliance tracking, and hazard detection — protecting workers and reducing incident rates.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    cardImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    challenges: [
      {
        title: "Fall Hazards",
        description:
          "Working at heights without proper safety measures remains the leading cause of construction fatalities.",
        icon: "ArrowDown",
      },
      {
        title: "PPE Non-Compliance",
        description:
          "Workers frequently neglect hard hats, harnesses, and high-visibility gear, especially in unsupervised areas.",
        icon: "ShieldAlert",
      },
      {
        title: "Heavy Equipment Risks",
        description:
          "Cranes, excavators, and heavy vehicles create blind spots that endanger workers on site.",
        icon: "Truck",
      },
    ],
    solutions: [
      {
        title: "Real-Time PPE Compliance",
        description:
          "VICAS detects hard hats, safety harnesses, high-vis vests, safety boots, and goggles in real time across construction zones.",
        keyPoints: [
          "Multi-class PPE detection",
          "Zone-specific compliance rules",
          "Instant violation alerts to supervisors",
        ],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Hazard Zone Monitoring",
        description:
          "AI-powered cameras monitor exclusion zones near heavy equipment, edges, and excavations to prevent unauthorized access.",
        keyPoints: [
          "Geofenced exclusion zones",
          "Person-equipment proximity alerts",
          "Edge and fall zone monitoring",
        ],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      },
    ],
    stats: [
      { value: "22%", label: "Reduction in Incident Rate" },
      { value: "95%", label: "PPE Compliance Achieved" },
      { value: "50%", label: "Faster Hazard Response" },
      { value: "Zero", label: "Fatalities on Monitored Sites" },
    ],
    products: [
      {
        name: "VICAS™",
        description: "AI-powered construction site safety monitoring.",
        href: "/products/vicas",
      },
    ],
  },
  {
    slug: "power-utilities",
    name: "Power & Utilities",
    tagline: "Optimize power generation, grid management, and infrastructure safety.",
    description:
      "The power and utilities sector is undergoing a massive transformation — from fossil fuels to renewables, from centralized to distributed grids. LivNSense helps power generators and utilities optimize efficiency, reduce emissions, and monitor critical infrastructure safety using AI and digital twin technologies.",
    heroImage: "https://vicasinfo.livnsense.com/media/industries/power-and-utilization.jpg",
    cardImage: "https://vicasinfo.livnsense.com/media/industries/power-and-utilization.jpg",
    challenges: [
      {
        title: "Grid Reliability",
        description:
          "Aging transmission infrastructure and variable renewable generation challenge grid stability.",
        icon: "Zap",
      },
      {
        title: "Emission Regulations",
        description:
          "Coal and gas-fired plants face increasingly stringent emission limits and carbon pricing mechanisms.",
        icon: "Cloud",
      },
      {
        title: "Infrastructure Safety",
        description:
          "Substations, transmission lines, and generation assets require continuous safety monitoring.",
        icon: "ShieldCheck",
      },
    ],
    solutions: [
      {
        title: "Plant Efficiency Optimization",
        description:
          "GreenOps optimizes combustion efficiency, heat rate, and auxiliary power consumption across thermal power plants.",
        keyPoints: [
          "Boiler and turbine optimization",
          "Heat rate improvement",
          "Auxiliary power reduction",
        ],
        image: "https://vicasinfo.livnsense.com/media/industries/power-and-utilization.jpg",
      },
      {
        title: "Infrastructure Monitoring",
        description:
          "AI-powered surveillance monitors substations, transmission corridors, and generation assets for safety and security threats.",
        keyPoints: [
          "Substation intrusion detection",
          "Transmission line vegetation encroachment",
          "Asset condition monitoring",
        ],
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      },
    ],
    stats: [
      { value: "10%", label: "Improvement in Heat Rate" },
      { value: "20%", label: "Reduction in Emissions" },
      { value: "15%", label: "Auxiliary Power Savings" },
      { value: "99.9%", label: "Grid Uptime Maintained" },
    ],
    products: [
      {
        name: "GreenOps™",
        description: "Power plant efficiency and emission optimization.",
        href: "/products/greenops",
      },
      {
        name: "VICAS™",
        description: "Infrastructure safety and surveillance.",
        href: "/products/vicas",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((ind) => ind.slug);
}
