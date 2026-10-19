"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const industryFrames = [
  {
    id: 1,
    label: "Leisure & Vacation",
    video: "/videos/video1.mp4",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    label: "Corporate Travel",
    video: "/videos/corporate.mp4",
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    label: "Group Tours",
    video: "/videos/group.mp4",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    label: "Adventure",
    video: "/videos/adventure.mp4",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    label: "Ecotourism",
    video: "/videos/eco.mp4",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    label: "Luxury Travel",
    video: "/videos/luxury.mp4",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    label: "Backpacking",
    video: "/videos/bagpacker.mp4",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    label: "Cultural & Heritage",
    video: "/videos/cultural.mp4",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    label: "Digital Nomads",
    video: "/videos/nomads.mp4",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative w-full bg-[#010206] py-20 px-4 md:px-8 lg:px-16">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE9A00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-[#FE9A00] text-sm font-semibold tracking-widest uppercase mb-3">
            Segments
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Travel Segments We Empower
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
            Hover over a segment to see how our AI-powered solutions transform travel experiences.
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
