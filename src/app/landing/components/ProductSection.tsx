"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function ProductSection() {
  const products = [
    {
      name: "GreenOps™",
      description:
        "AI Platform for Industrial Sustainability Optimization",
      benefitsTitle: `GreenOps™ is an AI platform for industrial decarbonization.
It uses AI and Digital Twins to model and optimize energy usage.
Reduce emissions. Improve efficiency. Act in real time.`,
      benefitsSubtitle: "GreenOps™ enables enterprises to transition toward sustainable, data-driven, and low-carbon industrial operations.",
      benefits: [
        "Powering Intelligent Industries Towards Net-Zero.",
        "Leverage real-time Digital Twin simulations",
        "Real-Time Autonomous Optimization",
        "Industry-Agnostic Deploymenterformance",
      ],
      link: "/products/greenops",
      image: "https://vicasinfo.livnsense.com/media/GreenopsLogo.svg",
    },
    {
      name: "VICAS",
      description:
        "Vision AI Co-Pilot for Industrial Safety",
      benefitsTitle: `VICAS™ is a Vision AI safety co-pilot for industrial environments.
It analyzes real-time video to detect risks and unsafe behavior.
Prevent incidents. Enforce safety. Act instantly.`,
      benefitsSubtitle: "VICAS enables enterprises to build safer, smarter, and more proactive industrial ecosystems.",
      benefits: [
        "Intelligent Safety. Zero Blind Spots",
        "Context-Aware Vision AI",
        "Root Cause Analysis Engine",
        "See Risks Before They Become Incidents",
      ],
      link: "/products/vicas",
      image: "https://vicasinfo.livnsense.com/media/VicasLogo.jpg",
    },
  ];

  return (
    <section id="products" className="py-20 w-full overflow-hidden relative" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* Background styling matching the navbar's subtle grid / glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
                linear-gradient(to right, var(--muted) 1px, transparent 1px),
                linear-gradient(to bottom, var(--muted) 1px, transparent 1px)
            `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #05972e 20%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #05972e 20%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 w-full">
        {/* Header Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter" style={{ color: "var(--primary)" }}>
            Our Products
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Discover our world-class AI platforms designed for heavy industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className="group relative flex flex-col rounded-xl overflow-hidden border backdrop-blur-sm transition-all duration-300"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "rgba(1, 2, 6, 0.6)",
              }}
              whileHover={{
                scale: 1.02,
                borderColor: "var(--accent)",
                boxShadow: "0 0 30px rgba(0, 167, 85, 0.15)",
              }}
            >
              {/* Glow behind card content */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A755]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* Image Section - Using a dummy placeholder since no specific image was required */}
              <div className="relative w-full h-[100px] border-b shrink-0 z-10 overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-80" style={{ backgroundColor: "var(--background)" }}>
                  {/* A subtle image placeholder pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, var(--muted) 0, var(--muted) 1px, transparent 0, transparent 50%)`,
                    backgroundSize: `10px 10px`
                  }}></div>
                  {/* <span className="font-bold text-xl tracking-widest uppercase z-10" style={{ color: "var(--muted-foreground)" }}>PREVIEW IMAGE</span> */}
                  {product.image ? (
                    <img src={product.image} alt={`${product.name} Logo`} className="max-h-full max-w-full object-contain" />
                  ) : (
                    <div className="w-16 h-16 bg-muted rounded-full" />
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1 z-10">
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--foreground)" }}>
                  {product.name}
                </h3>

                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>
                  {product.description}
                </p>

                <div className="mb-10 flex-1">
                  <h4 className="  mb-2  tracking-widest text-[0.9rem]" style={{ color: "var(--foreground)" }}>
                    {product.benefitsTitle}
                  </h4>
                  {product.benefitsSubtitle && (
                    <p className="text-sm mb-3" style={{ color: "var(--primary)" }}>
                      {product.benefitsSubtitle}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                        <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={product.link}
                  className="mt-auto inline-flex items-center gap-2 group/btn font-bold uppercase tracking-widest text-[0.7rem] transition-colors"
                  style={{ color: "var(--primary)" }}
                >
                  <span className="group-hover/btn:underline underline-offset-4">Explore Our Product</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
