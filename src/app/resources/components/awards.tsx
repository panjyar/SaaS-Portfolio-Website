"use client";

import { motion } from "framer-motion";
import { awards } from "@/utils/service";

type EventsProps = {
  limit?: number;
};


export default function Awards({ limit }: EventsProps) {
  const limitedAwards = limit ? awards.slice(0, limit) : awards;

  return (
    <section className="py-20 bg-[#010206] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Animation */}
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00A755]">
            Awards & Recognition
          </h1>
          {/* <p className="text-white/60 max-w-3xl text-lg">
            Celebrating our achievements and industry recognition.
          </p> */}
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {limitedAwards.map((award, i) => (
            <motion.a
              key={award.id}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#010206] p-6 rounded-3xl border border-white/10 overflow-hidden group cursor-pointer block"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{
                delay: 0.05 * i,
                duration: 0.35,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "#00A755",
                boxShadow: "0 0 40px rgba(0, 167, 85, 0.25)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A755]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative z-10 w-full h-56 overflow-hidden rounded-2xl mb-4">
                <img
                  src={award.img}
                  alt={award.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h2 className="text-xl font-bold mb-2 text-[#00A755] group-hover:text-white transition-colors duration-300 line-clamp-2">
                  {award.Title}
                </h2>

                <div className="text-white/60 text-sm space-y-1 group-hover:text-white/80 transition-colors duration-300">
                  <div className="flex">
                    <span className="font-semibold min-w-24">Date:</span>
                    <span>{award.Date}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold min-w-24">Given By:</span>
                    <span>{award.Given_By}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold min-w-24">Category:</span>
                    <span>{award.Category}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold min-w-24">Product:</span>
                    <span>{award.Product}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Line Hover Animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00A755] to-emerald-400 w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
