"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: "GreenOps™",
    tagline: "AI-Powered Industrial Sustainability",
    shortDesc: "Real-time decarbonization with Digital Twins & Edge AI",
    stats: [
      { value: "40%", label: "Emission Reduction" },
      { value: "3x", label: "Energy Efficiency" },
      { value: "24/7", label: "Autonomous Ops" },
    ],
    link: "/products/greenops",
    icon: Leaf,
    // Cinematic industrial video from Pexels (free)
    video:
      "https://vicasinfo.livnsense.com/media/videos/greenopsbg.mp4",
    // Fallback poster image from Unsplash
    poster:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    accentColor: "#00A755",
  },
  {
    name: "VICAS™",
    tagline: "Vision AI Safety Co-Pilot",
    shortDesc: "Intelligent video analytics for zero-incident workplaces",
    stats: [
      { value: "99.7%", label: "Detection Accuracy" },
      { value: "<0.1s", label: "Alert Response" },
      { value: "Zero", label: "Blind Spots" }, 
    ],
    link: "/products/vicas",
    icon: ShieldCheck,
    // Industrial safety / surveillance video from Pexels (free)
    video:
      "https://vicasinfo.livnsense.com/media/videos/vicasbg.mp4",
    poster:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    gradient: "from-cyan-500/20 via-transparent to-transparent",
    accentColor: "#00A755",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.06] bg-[#080a0f] cursor-pointer"
      style={{ minHeight: "520px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video / Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={product.poster}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          style={{
            filter: isHovered
              ? "brightness(0.4) saturate(1.2)"
              : "brightness(0.25) saturate(0.8)",
            transition: "filter 0.8s ease",
          }}
        >
          <source src={product.video} type="video/mp4" />
        </video>
        {/* Color gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-700`}
        />
        {/* Bottom dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/60 to-transparent" />
      </div>

      {/* Hover glow border effect */}
      <div
        className="absolute inset-0 z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${product.accentColor}40, 0 0 40px ${product.accentColor}15`,
        }}
      />

      {/* Top badge */}
      <div className="relative z-20 p-6 pb-0">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          animate={{ y: isHovered ? 0 : 0 }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: product.accentColor }} />
          <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-white/70">
            {product.name}
          </span>
        </motion.div>
      </div>

      {/* Main content — anchored to bottom */}
      <div className="relative z-20 mt-auto p-8 pt-14">
        {/* Tagline */}
        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15] mb-3">
          {product.tagline}
        </h3>
        <p className="text-sm md:text-base text-white/50 mb-8 max-w-md leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Stats row */}
        <div className="flex gap-6 md:gap-10 mb-8">
          {product.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex flex-col"
            >
              <span
                className="text-2xl md:text-3xl font-bold tracking-tight"
                style={{ color: product.accentColor }}
              >
                {stat.value}
              </span>
              <span className="text-[0.65rem] md:text-xs text-white/40 tracking-wider uppercase mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={product.link}
          className="inline-flex items-center gap-3 group/btn"
        >
          <span
            className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 group-hover/btn:scale-110"
            style={{
              borderColor: `${product.accentColor}60`,
              backgroundColor: `${product.accentColor}15`,
            }}
          >
            <ArrowRight
              className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
              style={{ color: product.accentColor }}
            />
          </span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 group-hover/btn:text-white transition-colors duration-300">
            Explore Product
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProductSection() {
  return (
    <section
      id="products"
      className="py-24 w-full overflow-hidden relative"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--muted) 1px, transparent 1px),
            linear-gradient(to bottom, var(--muted) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header — minimal */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-[2px]"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "var(--primary)" }}
            >
              Our Products
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Built for Heavy Industry.
            <br />
            <span className="text-white/40">Powered by Intelligence.</span>
          </h2>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.name} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
