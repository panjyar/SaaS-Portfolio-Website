"use client";

import { motion } from "framer-motion";

import { Leaf, BarChart2, Shield, Zap } from "lucide-react";

export default function GreenOpsSection() {
  const capabilities = [
    { icon: <Zap className="w-6 h-6" />, text: "Energy optimization across industrial processes" },
    { icon: <Leaf className="w-6 h-6" />, text: "Carbon monitoring and decarbonization analytics" },
    { icon: <BarChart2 className="w-6 h-6" />, text: "Predictive maintenance and operational intelligence" },
    { icon: <Shield className="w-6 h-6" />, text: "Integration with control systems and sensors" },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#00A755] font-bold tracking-wider uppercase text-sm mb-4">GreenOps™ Platform</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Platform for Industrial Efficiency & <span className="text-[#00A755]">Decarbonization</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              GreenOps™ is the world’s first deep-decarbonization platform designed to optimize industrial energy balance using Artificial Intelligence and Digital Twin technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[#00A755]">{cap.icon}</div>
                  <p className="text-sm text-gray-300 font-medium">{cap.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 p-6 rounded-2xl bg-[#00A755]/10 border border-[#00A755]/20">
              <div className="flex-1 min-w-[140px]">
                <p className="text-2xl font-bold text-white mb-1">Low-E</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Energy Consumption</p>
              </div>
              <div className="flex-1 min-w-[140px]">
                <p className="text-2xl font-bold text-white mb-1">Early-Net</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Zero Adoption</p>
              </div>
              <div className="flex-1 min-w-[140px]">
                <p className="text-2xl font-bold text-white mb-1">High-ROI</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Process Efficiency</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Using generated image placeholder */}
              <div className="aspect-[4/3] bg-neutral-900 flex items-center justify-center">
                 <p className="text-gray-500 font-bold uppercase tracking-widest">Asphalt Plant Digital Twin Visual</p>
                 {/* Once we have the actual path from generate_image, we can put it here */}
              </div>
            </div>
            {/* Decorative glass elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00A755]/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
