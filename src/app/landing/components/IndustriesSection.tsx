"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function IndustriesSection() {
  const industries = [
    {
      name: "Asphalt & Bitumen",
      icon: "/icons/factory.svg",
      benefit: "AI-driven process optimization and deep-decarbonization.",
      statLabel: "Energy Reduction",
      statValue: 15,
    },
    {
      name: "Oil & Gas",
      icon: "/icons/oil.svg",
      benefit: "Predictive maintenance and process optimization for safe operations.",
      statLabel: "Incidents Reduced",
      statValue: 18,
    },
    {
      name: "Construction",
      icon: "/icons/hardhat.svg",
      benefit: "Enhance operational safety and reduce workplace hazards.",
      statLabel: "Incident Rate",
      statValue: 22,
    },
    {
      name: "Mining",
      icon: "/icons/mining.svg",
      benefit: "Optimize resource usage and prevent operational risks.",
      statLabel: "Downtime Reduced",
      statValue: 14,
    },
    {
      name: "Manufacturing",
      icon: "/icons/factory.svg",
      benefit: "Reduce emissions, optimize production, improve energy efficiency.",
      statLabel: "CO₂ Reduction",
      statValue: 12,
    },
    {
      name: "Infrastructure",
      icon: "/icons/mining.svg",
      benefit: "Large-scale safety and operational monitoring.",
      statLabel: "Efficiency Gain",
      statValue: 10,
    },
  ];

  return (
    <section className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00A755]">
            Industries Served
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            GreenOps and VICAS deliver measurable impact across key industries,
            from sustainability in manufacturing to predictive safety in
            construction.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Overview Stats Card */}
          <div className="relative sm:col-span-2 lg:col-span-2 lg:row-span-2 p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A755]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00A755]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-[#00A755] rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Impact Metrics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((ind, idx) => (
                  <motion.div
                    key={idx}
                    className="relative group bg-[#010206]/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#00A755]/50 transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A755]/0 to-[#00A755]/0 group-hover:from-[#00A755]/10 group-hover:to-transparent transition-all duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
                        {ind.statLabel}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-bold text-[#00A755] group-hover:text-white transition-colors duration-300">
                          {ind.statValue}
                        </span>
                        <span className="text-2xl font-bold text-[#00A755]/70 group-hover:text-white/70 transition-colors duration-300">
                          %
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Individual industry cards */}
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center p-6 rounded-3xl border border-white/10 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Image
                src={industry.icon}
                alt={`${industry.name} icon`}
                width={48}
                height={48}
                className="text-[#00A755]"
              />
              <h4 className="mt-4 text-lg font-semibold text-white">
                {industry.name}
              </h4>
              <p className="mt-2 text-center text-gray-300 text-sm">
                {industry.benefit}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
