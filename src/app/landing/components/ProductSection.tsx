"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const products = [
  {
    name: "YatraGen™",
    tagline: "AI-Powered Smart Travel Planning",
    shortDesc: "Real-time itinerary building with Dynamic Routing & AI Optimization",
    stats: [
      { value: "10K+", label: "Curated Itineraries" },
      { value: "98%", label: "User Satisfaction" },
      { value: "30%", label: "Cost Saved" },
    ],
    link: "/products/yatragen",
    icon: Leaf,
    video: "",
    poster:
      "https://www.pexels.com/video/sea-landscape-nature-beach-5601466/",
    gradient: "from-orange-500/20 via-transparent to-transparent",
    accentColor: "#FE9A00",
    fallbackBg: "linear-gradient(135deg, #0a2e1a 0%, #080a0f 60%)",
  },
  {
    name: "Darshan AI™",
    tagline: "AI Vision & Landmark Intelligence",
    shortDesc: "Instant landmark recognition, live translation & cultural context",
    stats: [
      { value: "99.7%", label: "Recognition Accuracy" },
      { value: "<0.1s", label: "Response Time" },
      { value: "50+", label: "Languages" },
    ],
    link: "/products/darshanai",
    icon: ShieldCheck,
    video: "",
    poster:
      "https://www.pexels.com/video/girls-wearing-swimsuits-8729493/",
    gradient: "from-cyan-500/20 via-transparent to-transparent",
    accentColor: "#FE9A00",
    fallbackBg: "linear-gradient(135deg, #0a1a2e 0%, #080a0f 60%)",
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
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = product.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <style>{`
        .product-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 4px 4px 41.5px -13px ${product.accentColor}30;
        }

        .product-glass-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4), 
            inset 4px 4px 41.5px -13px ${product.accentColor}50;
        }
      `}</style>
      
      <motion.div
        ref={cardRef}
        className="group relative flex flex-col rounded-3xl overflow-hidden product-glass-card cursor-pointer transition-transform duration-500 ease-out"
        style={{ 
          minHeight: "520px",
          transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0)"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The mouse-follow glow layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.08), transparent 40%)",
            zIndex: 0,
          }}
        />

        {/* Ambient background glow based on product accent color */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${product.accentColor}, transparent 70%)`
          }}
        />

        {/* Top badge */}
        <div className="relative z-20 p-8 pb-0">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            animate={{ y: isHovered ? 0 : 0 }}
          >
            <Icon className="w-4 h-4" style={{ color: product.accentColor }} />
            <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-white/80">
              {product.name}
            </span>
          </motion.div>
        </div>

        {/* Main content — anchored to bottom */}
        <div className="relative z-20 mt-auto p-8 pt-14">
          {/* Tagline */}
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15] mb-4">
            {product.tagline}
          </h3>
          <p className="text-sm md:text-base text-white/60 mb-10 max-w-md leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Stats row */}
          <div className="flex gap-6 md:gap-10 mb-10">
            {product.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col"
              >
                <span
                  className="text-2xl md:text-3xl font-bold tracking-tight mb-1"
                  style={{ color: product.accentColor }}
                >
                  {stat.value}
                </span>
                <span className="text-[0.65rem] md:text-xs text-white/50 tracking-wider uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={product.link}
            className="inline-flex items-center gap-4 group/btn"
          >
            <span
              className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 group-hover/btn:scale-110"
              style={{
                borderColor: `${product.accentColor}60`,
                backgroundColor: `${product.accentColor}15`,
              }}
            >
              <ArrowRight
                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                style={{ color: product.accentColor }}
              />
            </span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/60 group-hover/btn:text-white transition-colors duration-300">
              Explore Product
            </span>
          </Link>
        </div>
      </motion.div>
    </>
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
            Built for Modern Travel.
            <br />
            <span className="text-white/40">Powered by AI.</span>
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

