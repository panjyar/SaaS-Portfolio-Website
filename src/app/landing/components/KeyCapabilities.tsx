"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sprout,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";

export default function KeyCapabilities() {
  const capabilities = [
    {
      title: "Real-time AI Insights",
      desc: "Gain instant operational insights powered by AI to drive smarter decisions.",
      greenops:
        "Optimizes energy consumption and reduces carbon footprint in industrial operations.",
      vicas:
        "Predicts safety incidents and operational risks for proactive prevention.",
      icon: BrainCircuit,
    },
    {
      title: "Carbon & Energy Optimization",
      desc: "Intelligently monitor and optimize energy usage across processes.",
      greenops: "Reduces emissions and improves sustainability KPIs.",
      vicas: "Ensures energy-efficient safety systems and automated monitoring.",
      icon: Sprout,
    },
    {
      title: "Predictive Safety Intelligence",
      desc: "AI predicts potential hazards before they occur.",
      greenops:
        "Supports sustainable operations by preventing equipment failures.",
      vicas: "Enhances workplace safety and minimizes incident risk.",
      icon: ShieldAlert,
    },
    {
      title: "Compliance Automation",
      desc: "Automate reporting and compliance workflows with AI.",
      greenops:
        "Ensures regulatory sustainability reporting is accurate and timely.",
      vicas: "Streamlines EHS audits, reporting, and compliance adherence.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section className="py-20 bg-[#010206] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00A755]">
            Key Capabilities
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Unified AI capabilities designed to empower both GreenOps and VICAS.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="relative bg-[#010206] p-6 rounded-3xl border border-white/10 overflow-hidden group"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                viewport={{ amount: 0.3, once: false }} // 🔁 Animates in/out when entering/leaving
                transition={{
                  delay: 0.1 * i,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#00A755",
                  boxShadow: "0 0 40px rgba(0, 167, 85, 0.25)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                {/* Green Glow Hover Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A755]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00A755]/10 group-hover:bg-[#00A755]/20 transition-colors duration-300 border border-[#00A755]/20 group-hover:shadow-[0_0_20px_rgba(0,167,85,0.3)]">
                  <Icon className="w-8 h-8 text-[#00A755]" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-[#00A755] group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {item.desc}
                  </p>

                  <div className="space-y-2 text-xs border-t border-white/10 pt-4">
                    <div>
                      <span className="text-[#00A755] font-semibold">
                        GreenOps:
                      </span>
                      <p className="text-white/50 mt-1">{item.greenops}</p>
                    </div>
                    <div>
                      <span className="text-[#00A755] font-semibold">
                        VICAS:
                      </span>
                      <p className="text-white/50 mt-1">{item.vicas}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Line Hover Animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00A755] to-emerald-400 w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
