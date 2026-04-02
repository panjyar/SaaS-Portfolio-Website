"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const industryFrames = [
  {
    id: 1,
    label: "Cement",
    video: "https://vicasinfo.livnsense.com/media/videos/BoulderDetection.m4v",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    label: "Steel & Mining",
    video: "https://vicasinfo.livnsense.com/media/videos/Minning.mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    label: "Oil & Gas",
    video: "https://vicasinfo.livnsense.com/media/videos/coalindustries.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    label: "Chemicals & Pharma",
    video: "https://vicasinfo.livnsense.com/media/videos/BoulderDetection.m4v",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    label: "Railways",
    video: "https://vicasinfo.livnsense.com/media/videos/traffic.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6, 
    label: "Ports",
    video: "https://vicasinfo.livnsense.com/media/videos/crowd-2.mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    label: "Manufacturing",
    video: "https://vicasinfo.livnsense.com/media/videos/Minning.mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    label: "Warehouses",
    video: "https://vicasinfo.livnsense.com/media/videos/Minning.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    label: "Food",
    video: "https://vicasinfo.livnsense.com/media/videos/Trafficsafety.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative w-full bg-[#010206] py-20 px-4 md:px-8 lg:px-16">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A755]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-[#00A755] text-sm font-semibold tracking-widest uppercase mb-3">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Industries We Serve
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
            Hover over an industry to see how our AI-powered solutions transform operations across sectors.
          </p>
        </div>

        {/* Video grid */}
        <div className="w-full aspect-square max-h-[75vh]">
          <DynamicFrameLayout
            frames={industryFrames}
            className="w-full h-full"
            showFrames={false}
            hoverSize={6}
            gapSize={6}
          />
        </div>
      </div>
    </section>
  );
}
