"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { prodcasts } from "@/utils/service";

export default function Prodcasts() {
  const [index] = useState(0);


  return (
    <div className="min-h-screen bg-gradient-to-br text-white mt-12" style={{padding: "4%"}}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`podcast-${prodcasts[index].id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-4 items-stretch">
            
            {/* LEFT SIDE - Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="relative w-full max-w-[400px]">
                <img
                  src={prodcasts[index].img2}
                  alt={prodcasts[index].title}
                  className="w-[300px] rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* RIGHT SIDE - Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col space-y-6"
            >
              {/* Title */}
              <div>
                <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight">
                  {prodcasts[index].title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-1xl leading-relaxed">
                {prodcasts[index].description}
              </p>

              {/* Episode Details */}
              <div className="grid grid-cols-2">
                <div>
                  <span className="text-[#FE9A00] block mb-1 text-sm">Release Date</span>
                  <span className="text-white font-semibold text-lg">
                    {prodcasts[index].date}
                  </span>
                </div>
                <div>
                  <span className="text-[#FE9A00] block mb-1 text-sm">Duration</span>
                  <span className="text-white font-semibold text-lg">
                    {prodcasts[index].duration}
                  </span>
                </div>
              </div>

              {/* Where to Listen */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">
                  Where to Listen:
                </h3>
                <div className="flex items-center gap-6">
                  {/* Spotify */}
                  <a
                    href={prodcasts[index].spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-orange-500 transition-colors">
                      Spotify
                    </span>
                  </a>

                  {/* YouTube */}
                  <a
                    href={prodcasts[index].youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-red-500 transition-colors">
                      YouTube
                    </span>
                  </a>

                  {/* Apple */}
                  <a
                    href={prodcasts[index].apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zM8.182 7.636c-.6 0-1.09.49-1.09 1.091v6.546c0 .6.49 1.09 1.09 1.09h7.636c.6 0 1.091-.49 1.091-1.09V8.727c0-.6-.49-1.09-1.09-1.09H8.181z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-purple-500 transition-colors">
                      Apple
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}