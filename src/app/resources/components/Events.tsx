"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { events } from "@/utils/events-data";

type EventsProps = {
  limit?: number;
};

export default function Events({ limit }: EventsProps) {
  const limitedEvents = limit ? events.slice(0, limit) : events;

  return (
    <section className="py-20 bg-[#010206] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Animation */}
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FE9A00]">
            Events
          </h1>
          {/* <p className="text-white/60 max-w-3xl text-lg">
            Explore upcoming and past events with AI-driven insights.
          </p> */}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {limitedEvents.map((event, i) => (
            <motion.div
              key={event.id}
              className="relative bg-[#010206] p-6 rounded-3xl border border-white/10 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{
                delay: 0.1 * i,
                duration: 0.6,
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

              <Link href={`/resources/events/${event.id}`} className="relative z-10 flex flex-col h-full">
                {/* Image */}
                <div className="w-full h-56 overflow-hidden rounded-2xl mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2 text-[#FE9A00] group-hover:text-white transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h2>
                  <div className="text-white/60 text-sm space-y-1 group-hover:text-white/80 transition-colors duration-300">
                    <p>
                      <span className="font-semibold">Date: </span>{event.date}
                    </p>
                    <p>
                      <span className="font-semibold">Type: </span>{event.type}
                    </p>
                    {event.location && (
                      <p>
                        <span className="font-semibold">Location: </span>{event.location}
                      </p>
                    )}
                    {event.description && (
                      <p className="line-clamp-2">
                        <span className="font-semibold">Details: </span>{event.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>

              {/* Bottom Line Hover Animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FE9A00] to-orange-400 w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
