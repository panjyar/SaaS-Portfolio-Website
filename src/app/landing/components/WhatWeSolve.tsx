"use client";

import { WhatWeSolveCards } from "@/components/ui/what-we-solve-cards";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { MapPin, Clock, Globe, ShieldAlert } from "lucide-react";
export default function WhatWeSolve() {
  const problems = [
    {
      title: "Fragmented Planning",
      description: (
        <>
          <p className="mb-2">Juggling multiple booking sites, reviews, and disjointed itineraries leads to decision fatigue and missed opportunities.</p>
        </>
      ),
      icon: <MapPin className="w-8 h-8 text-[#FE9A00]" />,
      image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Inefficient Routing",
      description: (
        <>
          <p className="mb-2">Wasting time and money on unoptimized travel routes and suboptimal layovers reduces the overall joy of the trip.</p>
        </>
      ),
      icon: <Clock className="w-8 h-8 text-[#FE9A00]" />,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Contextual Blindspots",
      description: (
        <>
          <p className="mb-2">Lack of localized intelligence, language barriers, and cultural context often leads to inauthentic experiences.</p>
        </>
      ),
      icon: <Globe className="w-8 h-8 text-[#FE9A00]" />,
      image: "https://images.unsplash.com/photo-1517868478426-3832d431f471?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Dynamic Disruptions",
      description: (
        <>
          <p className="mb-2">Inability to adapt in real-time to flight changes, weather delays, or sudden closures ruins meticulously planned vacations.</p>
        </>
      ),
      icon: <ShieldAlert className="w-8 h-8 text-[#FE9A00]" />,
      image: "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#010206] w-full text-foreground relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <TextBlockAnimation delay={0.1} duration={0.6}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FE9A00]">What We Solve</h2>
          </TextBlockAnimation>
          {/* <ScrollRevealText
            text="The Industrial Challenges Holding Back Sustainable Operations"
            containerClassName="justify-center"
          /> */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#ededed] text-center whitespace-nowrap overflow-hidden text-ellipsis">
            The Challenges Holding Back Modern Travel Planning
          </h1>
        </div>
      </div>

      <div className="text-[#ededed] text-lg leading-relaxed flex flex-col gap-10 mb-16 w-full max-w-[1400px] mx-auto px-4 md:px-12">
        {/* <SmoothTextReveal
          text="Heavy industries power global infrastructure and economic growth. But they also face increasing pressure to operate more efficiently, reduce emissions, and improve workplace safety."
          containerClassName="justify-start text-left"
        /> */}

        {/* <ScrollRevealText
          text="Today, many industrial facilities still rely on fragmented systems and manual monitoring, making it difficult to optimize operations in real time."
          containerClassName="justify-start text-left text-2xl md:text-3xl text-gray-400 font-medium"
        /> */}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0f0f0f] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
          <WhatWeSolveCards features={problems} />
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto flex justify-center">
          <TextBlockAnimation delay={0.2} duration={0.6} blockColor="#0f792a">
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#ededed]">
              Travelers and agencies need intelligent systems that connect bookings, preferences, and real-time data for smarter journeys.
            </p>
          </TextBlockAnimation>
        </div>
      </div>
    </section>
  );
}
