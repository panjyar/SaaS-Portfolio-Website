"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Eye,
  Shield,
  Scan,
  Radio,
} from "lucide-react";
import Image from "next/image";

// Vehicle data: each tab has a video (left) and a detection snapshot image (right)
const vehicles = [
  {
    id: "gloves",
    name: "PPE – Gloves Detection",
    tabLabel: "Gloves Detection",
    // tabImage: "/vehicle/dozer.jpg",
    video: "https://dev-sigma.livnsense.com/media/videos/rollerForward.mp4",
    detectionImage: "/vehicle/glove.png",
    description: "AI detects missing gloves and PPE violations in real-time",
    detectionLabel: "NO_GLOVES detected — PPE violation alert triggered",
    features: [
      {
        icon: Shield,
        title: "PPE Compliance",
        description:
          "Detects gloves, vests, helmets, and other safety gear on workers",
      },
      {
        icon: Eye,
        title: "Real-Time Monitoring",
        description:
          "Continuous AI-powered monitoring of PPE compliance across the site",
      },
      {
        icon: AlertTriangle,
        title: "Instant Alerts",
        description:
          "Immediate notifications when safety violations are detected",
      },
    ],
  },
  {
    id: "loader",
    name: "Loader – Proximity Detection",
    tabLabel: "Loader Proximity",
    // tabImage: "/vehicle/loader.png",
    video: "/videos/Loader.mp4",
    detectionImage: "/vehicle/loader-incident.png",
    description: "AI-powered proximity and vehicle detection near loaders",
    detectionLabel: "VEHICLE proximity alert — collision risk identified",
    features: [
      {
        icon: AlertTriangle,
        title: "Proximity Alerts",
        description:
          "Real-time detection of workers and vehicles entering the danger zone",
      },
      {
        icon: Scan,
        title: "Object Recognition",
        description:
          "Neural network identifies vehicles, equipment, and objects near the loader",
      },
      {
        icon: Shield,
        title: "Collision Prevention",
        description:
          "Automated alerts when objects breach the safety perimeter",
      },
    ],
  },
  {
    id: "roller",
    name: "Roller – Incident Detection",
    tabLabel: "Roller Incident",
    // tabImage: "/vehicle/roller.png",
    video: "/videos/roaler.mp4",
    detectionImage: "/vehicle/roaler-incident.png",
    description: "AI monitors roller operations for worker proximity risks",
    detectionLabel: "PERSON detected in danger zone — proximity warning",
    features: [
      {
        icon: Eye,
        title: "Worker Tracking",
        description:
          "Tracks worker positions relative to the roller in real-time",
      },
      {
        icon: Radio,
        title: "Zone Awareness",
        description:
          "Geofenced danger zones with automatic speed and proximity alerts",
      },
      {
        icon: AlertTriangle,
        title: "Safety Alerts",
        description:
          "Instant notification when workers enter hazardous proximity",
      },
    ],
  },
];

export default function VehicleDetectionSection() {
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);
  const [activeFeature, setActiveFeature] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Switch video when vehicle changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeVehicle]);

  return ( 
    <section className="py-20 px-4 md:px-6 bg-[#010206] w-full relative z-10 overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,167,85,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,100,255,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#00A755]/10 text-[#00A755] border border-[#00A755]/20 mb-6">
              AI-Powered Vehicle Safety
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ededed]">
              See How{" "}
              <span className="text-[#00A755]">VICAS™</span>{" "}
              Detects Risks
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Click on a detection type to see real-time AI detection in action — live video feed alongside the detected output.
            </p>
          </motion.div>
        </div>

        {/* Vehicle Tabs with Images */}
        <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-8 mb-16 mt-8">
          {vehicles.map((vehicle) => {
            const isActive = activeVehicle.id === vehicle.id;
            return (
              <div key={vehicle.id} className="flex flex-col items-center gap-6">
                {/* Tab Label (Pill) */}
                <button
                  onClick={() => {
                    setActiveVehicle(vehicle);
                    setActiveFeature(0);
                  }}
                  className={cn(
                    "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer text-center whitespace-nowrap",
                    isActive
                      ? "bg-[#00A755] text-white shadow-[0_4px_20px_rgba(0,167,85,0.4)]"
                      : "text-gray-300 hover:text-white bg-transparent"
                  )}
                >
                  {vehicle.tabLabel}
                </button>

                {/* Thumbnail Image */}
                <button
                  onClick={() => {
                    setActiveVehicle(vehicle);
                    setActiveFeature(0);
                  }}
                  className="relative group cursor-pointer w-32 h-32 flex items-center justify-center"
                >
                  {/* Glowing background radial gradient behind image */}
                  {/* <div
                    className={cn(
                      "absolute inset-0 rounded-full blur-2xl transition-all duration-500",
                      isActive
                        ? "bg-[#00A755]/40 scale-125"
                        : "bg-white/10 scale-100 group-hover:bg-white/20"
                    )}
                  /> */}
                  {/* The image itself */}
                  {/* <div className="relative w-full h-full z-10 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={vehicle.tabImage}
                      alt={vehicle.tabLabel}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="128px"
                    />
                  </div> */}
                </button>
              </div>
            );
          })}
        </div>

        {/* Main Content: Video (Left) + Detection Image (Right) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* LEFT: Live Video Feed */}
              <div className="relative rounded-2xl overflow-hidden bg-black border border-neutral-800/50 shadow-2xl">
                {/* Live indicator */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-white tracking-wider uppercase">
                    Live Feed
                  </span>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-neutral-700/50">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Source Video</p>
                    <p className="text-sm text-[#ededed] font-semibold">{activeVehicle.name}</p>
                  </div>
                </div>

                {/* Video Player */}
                <div className="aspect-square sm:aspect-video">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  >
                    <source src={activeVehicle.video} type="video/mp4" />
                  </video>
                </div>

                {/* Scan line animation */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A755]/50 to-transparent pointer-events-none z-10"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* RIGHT: Detection Image */}
              <div className="relative rounded-2xl overflow-hidden bg-black border border-neutral-800/50 shadow-2xl">
                {/* AI Detection badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#00A755]/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#00A755]/30">
                  <Eye className="w-3.5 h-3.5 text-[#00A755]" />
                  <span className="text-xs font-semibold text-[#00A755] tracking-wider uppercase">
                    AI Detection
                  </span>
                </div>

                {/* Detection label */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-[#00A755]/20">
                    <p className="text-xs text-[#00A755] font-medium uppercase tracking-wider mb-0.5">Detection Result</p>
                    <p className="text-sm text-[#ededed] font-semibold">{activeVehicle.detectionLabel}</p>
                  </div>
                </div>

                {/* Detection snapshot image */}
                <div className="aspect-square sm:aspect-video relative">
                  <Image
                    src={activeVehicle.detectionImage}
                    alt={`AI detection output for ${activeVehicle.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Pulsing border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                  animate={{
                    boxShadow: [
                      "inset 0 0 0px rgba(0, 167, 85, 0)",
                      "inset 0 0 30px rgba(0, 167, 85, 0.08)",
                      "inset 0 0 0px rgba(0, 167, 85, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Feature Cards (Bottom) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {activeVehicle.features.map((feature, index) => {
                const Icon = feature.icon;
                const isActiveFeature = activeFeature === index;
                return (
                  <motion.button
                    key={feature.title}
                    onClick={() => setActiveFeature(index)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "relative text-left p-4 rounded-xl transition-all duration-300 cursor-pointer group",
                      "border backdrop-blur-sm",
                      isActiveFeature
                        ? "bg-[#0a1a10] border-[#00A755]/40 shadow-[0_0_20px_rgba(0,167,85,0.1)]"
                        : "bg-[#0a0a0f]/80 border-neutral-800/40 hover:border-neutral-700"
                    )}
                  >
                    {/* Active indicator line */}
                    {isActiveFeature && (
                      <motion.div
                        layoutId="activeFeatureLine"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#00A755] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg transition-colors flex-shrink-0",
                          isActiveFeature
                            ? "bg-[#00A755]/15 text-[#00A755]"
                            : "bg-neutral-800/50 text-gray-400 group-hover:text-gray-300"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={cn(
                            "font-semibold text-sm transition-colors",
                            isActiveFeature ? "text-[#ededed]" : "text-gray-300"
                          )}
                        >
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
