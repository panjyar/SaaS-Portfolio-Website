"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Workflow,
  ShieldCheck,
  Cog,
  MessageCircleQuestion,
} from "lucide-react";

export default function CoreIntelligenceSection() {
  const products = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#00A755]" />,
      title: "VICAS – Risk Intelligence Platform",
      desc: "AI-powered industrial safety and risk intelligence engine enabling real-time perception, predictive alerts, and compliance automation.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00A755]" />,
      title: "AI Perception & Computer Vision",
      desc: "Advanced visual analytics that transform video and sensor data into actionable safety and efficiency insights.",
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#00A755]" />,
      title: "Process Automation",
      desc: "Adaptive automation framework that enhances productivity, consistency, and operational agility across environments.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00A755]" />,
      title: "Risk Intelligence & Safety Compliance",
      desc: "Automated risk assessments and compliance tracking that help organizations maintain a zero-incident safety culture.",
    },
    {
      icon: <Cog className="w-8 h-8 text-[#00A755]" />,
      title: "Asphalt Solutions",
      desc: "AI-driven process optimization and sustainability insights tailored for asphalt manufacturing and maintenance operations.",
    },
  ];
  return (
    <section className="relative text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A755]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#00A755]">AI Vision Intelligence</span>{" "}
          Solutions
        </motion.h2>
        {/* Product Cards (flex wrap for dynamic centering) */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {products.map((item, i) => (
            <motion.div
              key={i}
              className="w-full sm:w-[45%] lg:w-[30%] bg-[#0B0F12]/70 border border-[#1A1D20] backdrop-blur-sm rounded-2xl p-6 hover:bg-[#0B0F12]/90 hover:border-[#00A755]/30 transition-all duration-300 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {/* Clarity Statement */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative max-w-3xl w-full bg-[#0B0F12]/70 border border-[#1A1D20] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start overflow-hidden">
            {/* Animated diagonal grid background using Framer Motion */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                backgroundImage: `
        repeating-linear-gradient(0deg, rgba(0,167,85,0.08), rgba(0,167,85,0.08) 1px, transparent 2px, transparent 60px),
        repeating-linear-gradient(90deg, rgba(0,167,85,0.08), rgba(0,167,85,0.08) 1px, transparent 2px, transparent 60px)
      `,
                backgroundSize: "60px 60px", // bigger boxes
              }}
              animate={{
                backgroundPosition: ["0px 0px", "60px 60px"], // move according to box size
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 15, // slower movement for large boxes
                ease: "linear",
              }}
            />
            <div className="flex-shrink-0 mt-1 relative z-10">
              <MessageCircleQuestion className="w-10 h-10 text-[#00A755]" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold mb-2">
                Is <span className="text-[#00A755]">VICAS</span> and GreenOps
                the same?
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                No. <span className="text-white font-medium">VICAS</span> is a
                comprehensive AI-driven risk intelligence platform focused on
                operational safety, process automation, and perception insights.
                It incorporates sustainability analytics — including energy
                efficiency and emission trends — but unlike{" "}
                <span className="text-white font-medium">GreenOps</span>, it’s
                not solely carbon-focused. VICAS unifies vision intelligence and
                sustainability into a single, safety-first framework.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
