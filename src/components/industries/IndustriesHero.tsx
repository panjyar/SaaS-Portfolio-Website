"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const IndustriesHero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#010206]/80 via-[#010206]/70 to-[#010206]" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="grid w-full grid-cols-12 divide-x divide-white/[0.06] h-full">
          <div className="col-span-1 h-full" />
          <div className="col-span-2 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-2 h-full" />
          <div className="col-span-1 h-full" />
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FE9A00]/8 blur-[150px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#FE9A00]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE9A00]">
              Industries
            </span>
            <div className="w-8 h-[2px] bg-[#FE9A00]" />
          </div>

          <h1 className="text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
            Solving the Unsolvable for
            <br />
            <span className="text-white/30">
              the World&apos;s Biggest Industries
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 mb-8 max-w-2xl text-center font-light text-base sm:text-lg text-white/60 leading-relaxed"
        >
          From cement kilns to construction sites, from oil refineries to
          warehouses — LivNSense brings AI, Digital Twins, and Computer Vision
          to transform operations across every major industry.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30">
            Explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
