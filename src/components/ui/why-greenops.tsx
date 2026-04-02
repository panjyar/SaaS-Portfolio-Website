"use client";

import { Zap, Activity, Leaf, Eye, Shield, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

const marqueeData = [
  "Energy Optimization",
  "Process Efficiency",
  "Emissions Reduction",
  "Operational Visibility",
  "Asset Lifecycle Extension",
  "Regulatory Reporting",
  "Digital Twin Simulation",
  "Real-Time Adjustments",
  "Carbon Tracking",
  "Throughput Maximization",
  "Anomaly Detection",
  "Continuous Intelligence"
];

const features = [
  {
    title: "Energy Optimization",
    description:
      "Reduce energy consumption across high-load systems such as kilns, furnaces, and process heating units.",
    icon: Zap,
  },
  {
    title: "Process Efficiency",
    description:
      "Improve throughput and reduce variability by optimizing process parameters in real time.",
    icon: Activity,
  },
  {
    title: "Emissions Reduction",
    description:
      "Lower carbon emissions through better energy utilization and process optimization.",
    icon: Leaf,
  },
  {
    title: "Operational Visibility",
    description:
      "Gain real-time insights into inefficiencies, bottlenecks, and optimization opportunities.",
    icon: Eye,
  },
  {
    title: "Asset Lifecycle Extension",
    description:
      "Extend machinery lifespan by minimizing thermal and mechanical stress through optimized load balancing.",
    icon: Shield,
  },
  {
    title: "Regulatory Reporting",
    description:
      "Automate carbon and energy compliance reporting with granular, verifiable data streams.",
    icon: FileText,
  },
];

export default function WhyGreenOps() {
  const m1 = marqueeData.slice(0, marqueeData.length / 3);
  const m2 = marqueeData.slice(
    marqueeData.length / 3,
    (marqueeData.length / 3) * 2,
  );
  const m3 = marqueeData.slice((marqueeData.length / 3) * 2);

  return (
    <section className="relative bg-[#fefeec] py-20 sm:py-32 text-black">
      <div className="mx-auto max-w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-10">
          <h2 className="max-w-3xl font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 uppercase">
            Continuously Optimizing Energy, Efficiency, and Emissions in Real Time
            
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-neutral-700">
            GreenOps™ integrates AI and digital twin models to drive continuous improvements across all facets of industrial operations.
          </p>
          <div className="relative mx-auto mt-8 w-full max-w-4xl overflow-hidden">
            <div className="absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-[#fefeec]" />
            <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-[#fefeec]" />

            <div className="flex flex-col gap-2">
              <Marquee className="[--duration:45s] [--gap:0.75rem]" repeat={4}>
                {m1.map((q) => (
                  <Badge
                    className="rounded-full border-[#edebbe] bg-[#f2f0c7] px-4 py-1 text-black transition-colors hover:bg-[#e0deaf]"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:50s] [--gap:0.75rem]"
                repeat={4}
                reverse
              >
                {m2.map((q) => (
                  <Badge
                    className="rounded-full border-[#edebbe] bg-[#f2f0c7] px-4 py-1 text-black transition-colors hover:bg-[#e0deaf]"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee className="[--duration:42s] [--gap:0.75rem]" repeat={4}>
                {m3.map((q) => (
                  <Badge
                    className="rounded-full border-[#edebbe] bg-[#f2f0c7] px-4 py-1 text-black transition-colors hover:bg-[#e0deaf]"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
         <div className="flex items-center justify-center">
          <h2 className="max-w-3xl font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mt-10">
            The GreenOps™ Advantage
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 divide-dashed divide-neutral-900/10 border-neutral-900/10 border-t border-dashed sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="group flex flex-col gap-5 px-8 pt-12 pb-16 transition-colors hover:bg-[#f1f1d1]"
                key={feature.title}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  <Icon className="size-7 text-neutral-800" />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-2xl tracking-tight text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
