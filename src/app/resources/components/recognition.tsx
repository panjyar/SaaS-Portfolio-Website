"use client";

import { motion } from "framer-motion";
import { recognition } from "@/utils/service";

type EventsProps = {
  limit?: number;
};


export default function Recognition({ limit }: EventsProps) {
  const limitedRecognition = limit ? recognition.slice(0, limit) : recognition;

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FE9A00]">
            Recognition
          </h1>
          {/* <p className="text-white/60 max-w-3xl text-lg">
            Celebrating our recognitions and milestones.
          </p> */}
        </motion.div>

        {/* Recognition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {limitedRecognition.map((item, i) => (
            <motion.a
                key={`${item.id}-${i}`} // combines id and index to ensure uniqueness
                href={item.href}
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
                borderColor: "#FE9A00",
                boxShadow: "0 0 40px rgba(254, 154, 0, 0.25)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FE9A00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative z-10 w-full h-56 overflow-hidden rounded-2xl mb-4">
                <img
                  src={item.img}
                  alt={item.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h2 className="text-xl font-bold mb-2 text-[#FE9A00] group-hover:text-white transition-colors duration-300 line-clamp-2">
                  {item.Title}
                </h2>

                <div className="text-white/60 text-sm space-y-1 group-hover:text-white/80 transition-colors duration-300">
                  <div className="flex">
                    <span className="font-semibold min-w-24">Date:</span>
                    <span>{item.Date}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold min-w-24">Given By:</span>
                    <span>{item.Given_By}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold min-w-24">Category:</span>
                    <span>{item.Category}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold min-w-24">Product:</span>
                    <span>{item.Product}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Line Hover Animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FE9A00] to-orange-400 w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
