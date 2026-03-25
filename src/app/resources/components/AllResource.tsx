"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { prodcasts } from "../../../utils/service";

export default function AllResource() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % prodcasts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 p-4">
      {/* Left Section */}
      <div>
        <h2 className="text-4xl font-bold leading-tight text-[45px]">
          LivNSense Podcasts
        </h2>
        <p className="mt-4 text-gray-300 text-[22px]">
          Tune in to our podcasts where we explore sustainability, AI,
          and the future of industrial decarbonization.
        </p>
      </div>

      {/* Right Section (Slider Card) */}
      <div className="relative w-full max-w-xl h-60 overflow-hidden rounded-[20px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={prodcasts[index].id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"
              style={{ backgroundImage: `url(${prodcasts[index].img1})`, backgroundPosition: 'center' }}
            ></div>
            <div className="absolute top-6 right-6 z-10 flex items-end gap-6"> {/*flex-col gap 12*/}
              <a
                href={prodcasts[index].spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8 h-8" src="../icons/Spotify.png" alt="spotify" />
              </a>
              <a
                href={prodcasts[index].apple}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8 h-8" src="../icons/apple.png" alt="apple" />
              </a>
              <a
                href={prodcasts[index].youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8 h-8" src="../icons/youtube.png" alt="youtube" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
