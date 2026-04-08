"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const IndustriesCTA: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[#050505]">
      {/* Dark background with subtle grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #00A755 1px, transparent 1px), linear-gradient(to bottom, #00A755 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00A755]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#00A755]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#00A755]">
              Get Started
            </span>
            <div className="w-8 h-[2px] bg-[#00A755]" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            See How AI Transforms
            <br />
            <span className="text-white/30">Your Industry</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join industry leaders deploying LivNSense solutions to achieve
          zero-carbon, zero-harm, and high-efficiency operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/company/contact"
            id="industries-cta-demo"
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-[#00A755] text-white font-bold text-lg hover:bg-[#008f48] transition-all duration-300 shadow-[0_0_20px_rgba(0,167,85,0.3)] hover:shadow-[0_0_30px_rgba(0,167,85,0.5)]"
          >
            Book a Demo
          </Link>
          <Link
            href="/#products"
            id="industries-cta-products"
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Explore Platforms
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
