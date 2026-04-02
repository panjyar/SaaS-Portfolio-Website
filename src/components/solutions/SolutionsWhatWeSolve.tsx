"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Flame,
  AlertTriangle,
  BarChart3,
  Droplets,
  ArrowRight,
} from "lucide-react";

interface Problem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  icon: React.ReactNode;
  accentColor: string;
  video: string;
  poster: string;
}

const problems: Problem[] = [
  {
    number: "01",
    title: "Carbon Intensive Operations",
    subtitle: "The Emissions Challenge",
    description:
      "Heavy industries account for over 30% of global CO₂ emissions. Without real-time monitoring and AI-driven optimization, enterprises remain blind to their true environmental footprint.",
    keyPoints: [
      "Real-time emission tracking across all operations",
      "AI-optimized energy consumption models",
      "Automated carbon reporting & compliance",
    ],
    icon: <Flame className="w-5 h-5" />,
    accentColor: "#ef4444",
    // Industrial chimney / factory emissions
    video:
      "https://vicasinfo.livnsense.com/media/videos/greenopsbg.mp4",
    poster:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
  },
  {
    number: "02",
    title: "Unseen Safety Hazards",
    subtitle: "The Blind Spot Problem",
    description:
      "Manual safety audits catch less than 40% of real-time hazards. Workers are exposed to risks every day that traditional monitoring simply cannot detect.",
    keyPoints: [
      "Vision AI for continuous PPE compliance",
      "Instant hazard detection & alerts",
      "Zero-incident workplace transformation",
    ],
    icon: <AlertTriangle className="w-5 h-5" />,
    accentColor: "#f59e0b",
    // Workers with safety helmets in industrial environment
    video:
      "https://vicasinfo.livnsense.com/media/videos/vicasbg.mp4",
    poster:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    number: "03",
    title: "Production Inefficiencies",
    subtitle: "The Hidden Cost Crisis",
    description:
      "Unoptimized production lines leak millions in operational costs. Without digital twin modeling, bottlenecks remain invisible until they cascade into major losses.",
    keyPoints: [
      "Digital Twin simulations of entire plants",
      "Edge AI for predictive maintenance",
      "Autonomous process optimization",
    ],
    icon: <BarChart3 className="w-5 h-5" />,
    accentColor: "#3b82f6",
    // High-tech manufacturing / production line
    video:
      "https://vicasinfo.livnsense.com/media/videos/greenopsbg.mp4",
    poster:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
  },
  {
    number: "04",
    title: "Undetected Leakages",
    subtitle: "The Silent Disaster",
    description:
      "A single undetected pipeline leak can cost millions and endanger lives. Traditional inspection methods are slow, periodic, and miss micro-fractures that AI vision can catch instantly.",
    keyPoints: [
      "Continuous pipeline integrity monitoring",
      "Anomaly detection at micro-level",
      "Instant leak alerts across infrastructure",
    ],
    icon: <Droplets className="w-5 h-5" />,
    accentColor: "#06b6d4",
    // Pipeline / industrial infrastructure
    video:
      "https://vicasinfo.livnsense.com/media/videos/vicasbg.mp4",
    poster:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
];

function ProblemRow({
  problem,
  index,
}: {
  problem: Problem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;

  return (
    <div ref={ref} className="relative">
      {/* Connecting line between problems */}
      {index < problems.length - 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full h-16 md:h-20 w-px bg-gradient-to-b from-white/10 to-transparent z-0" />
      )}

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isReversed ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Text Content */}
        <motion.div
          className={`flex flex-col ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Problem number + label */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border text-sm font-bold"
              style={{
                borderColor: `${problem.accentColor}40`,
                color: problem.accentColor,
                backgroundColor: `${problem.accentColor}10`,
              }}
            >
              {problem.number}
            </span>
            <div
              className="h-px flex-1 max-w-[60px]"
              style={{ backgroundColor: `${problem.accentColor}30` }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: `${problem.accentColor}cc` }}
            >
              {problem.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
            {problem.title}
          </h3>

          {/* Description */}
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            {problem.description}
          </p>

          {/* Key points */}
          <ul className="space-y-3 mb-6">
            {problem.keyPoints.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm md:text-base text-white/70"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: problem.accentColor }}
                />
                {point}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="/solutions#contact"
            className="group/link inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            style={{ color: problem.accentColor }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="group-hover/link:underline underline-offset-4">
              See Our Solution
            </span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Video Content */}
        <motion.div
          className={`relative ${isReversed ? "lg:order-1" : "lg:order-2"}`}
          initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden group/video aspect-[16/10]">
            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={problem.poster}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/video:scale-105"
            >
              <source src={problem.video} type="video/mp4" />
            </video>

            {/* Video overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/80 via-transparent to-[#080a0f]/30 pointer-events-none" />
            <div
              className="absolute inset-0 opacity-0 group-hover/video:opacity-30 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${problem.accentColor}20, transparent 70%)`,
              }}
            />

            {/* Border glow on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: `inset 0 0 0 1px ${problem.accentColor}30, 0 0 30px ${problem.accentColor}10`,
              }}
            />

            {/* Icon badge */}
            <div className="absolute top-4 left-4 z-10">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-md border"
                style={{
                  borderColor: `${problem.accentColor}30`,
                  backgroundColor: `${problem.accentColor}15`,
                  color: problem.accentColor,
                }}
              >
                {problem.icon}
              </div>
            </div>

            {/* Bottom label bar */}
            <div className="absolute bottom-0 inset-x-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: problem.accentColor }}
                />
                <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-white/60">
                  Live Monitoring
                </span>
              </div>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div
            className="absolute -z-10 w-32 h-32 rounded-full blur-[80px] opacity-20"
            style={{
              backgroundColor: problem.accentColor,
              top: isReversed ? "auto" : "-20px",
              bottom: isReversed ? "-20px" : "auto",
              right: isReversed ? "auto" : "-20px",
              left: isReversed ? "-20px" : "auto",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export const SolutionsWhatWeSolve: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#060810] relative overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 inset-x-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Very subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#00A755]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#00A755]">
              Challenges We Solve
            </span>
            <div className="w-8 h-[2px] bg-[#00A755]" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-5">
            Transforming Industrial
            <br />
            <span className="text-white/30">Blind Spots into Intelligence</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Real-time AI solutions that turn the biggest operational challenges
            into competitive advantages.
          </p>
        </motion.div>

        {/* Problems — alternating layout */}
        <div className="flex flex-col gap-20 md:gap-32">
          {problems.map((problem, idx) => (
            <ProblemRow key={problem.number} problem={problem} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
