"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/utils/industries-data";

export const IndustriesGrid: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 bg-[#010206] relative overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FE9A00]/5 blur-[180px] rounded-full pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Click on any industry to discover how our AI-powered solutions are
            transforming operations, improving safety, and driving
            sustainability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.slug} industry={industry} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

function IndustryCard({
  industry,
  index,
  isInView,
}: {
  industry: (typeof industries)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
    >
      <Link
        href={`/industries/${industry.slug}`}
        id={`industry-card-${industry.slug}`}
        className="group relative block rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.06] hover:border-[#FE9A00]/30 transition-all duration-500"
      >
        {/* Image */}
        <Image
          src={industry.cardImage}
          alt={industry.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient overlay — darkens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

        {/* Green glow on hover */}
        <div className="absolute inset-0 bg-[#FE9A00]/0 group-hover:bg-[#FE9A00]/5 transition-all duration-500" />

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
          {/* Tagline — hidden by default, appears on hover */}
          <p className="text-white/0 text-sm leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:text-white/70 group-hover:max-h-[100px] transition-all duration-500 ease-out">
            {industry.tagline}
          </p>

          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                {industry.name}
              </h3>
            </div>

            {/* Arrow icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-[#FE9A00] group-hover:border-[#FE9A00] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Top-left green accent dot */}
        <div className="absolute top-4 left-4">
          <div className="w-2 h-2 rounded-full bg-[#FE9A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
