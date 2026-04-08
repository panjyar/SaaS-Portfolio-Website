"use client";

import { WhatWeSolveCards } from "@/components/ui/what-we-solve-cards";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { Zap, Factory, BarChart3, HardHat } from "lucide-react";
export default function WhatWeSolve() {
  const problems = [
    {
      title: "High Energy Consumption",
      description: (
        <>
          <p className="mb-2">Energy-intensive industrial processes drive excessive power usage, increasing costs and reducing sustainability. </p>
          {/* <p>Without intelligent optimization, plants lose efficiency and increase operational costs.</p> */}
        </>
      ),
      icon: <Zap className="w-8 h-8 text-[#00A755]" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Industrial Carbon Emissions",
      description: (
        <>
          <p className="mb-2">Heavy reliance on fossil fuels makes industries a major source of greenhouse emissions and environmental impact. </p>
          {/* <p>Decarbonizing heavy industry is one of the most difficult yet critical steps toward achieving global net-zero targets.</p> */}
        </>
      ),
      icon: <Factory className="w-8 h-8 text-[#00A755]" />,
      image: "https://plus.unsplash.com/premium_photo-1770255852820-9ec54e96f388?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Operational Inefficiencies",
      description: (
        <>
          <p className="mb-2">Lack of intelligent data utilization leads to inefficiencies, downtime, and lost productivity in industrial operations.</p>
          {/* <p className="mb-1">This results in:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>energy waste</li>
            <li>unstable production processes</li>
            <li>reduced equipment efficiency</li>
          </ul> */}
        </>
      ),
      icon: <BarChart3 className="w-8 h-8 text-[#00A755]" />,
      image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/3e/2d/b8/3b/19/v1_E10/E104FLLQ.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=3b9eb47908df40c3a098adfbad60123ec4f8ffc28819d8aabff884719ea3f5a6",
    },
    {
      title: "Workplace Safety Risks",
      description: (
        <>
          <p className="mb-2">Hazardous industrial environments expose workers to risks due to limited real-time monitoring and delayed response.</p>
          {/* <p>Without real-time monitoring and predictive safety intelligence, accidents and unsafe conditions can go unnoticed until it is too late.</p> */}
        </>
      ),
      icon: <HardHat className="w-8 h-8 text-[#00A755]" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#010206] w-full text-foreground relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <TextBlockAnimation delay={0.1} duration={0.6}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00A755]">What We Solve</h2>
          </TextBlockAnimation>
          {/* <ScrollRevealText
            text="The Industrial Challenges Holding Back Sustainable Operations"
            containerClassName="justify-center"
          /> */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#ededed] text-center whitespace-nowrap overflow-hidden text-ellipsis">
  The Industrial Challenges Holding Back Sustainable Operations
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
              Industries need intelligent systems that connect operations, safety, and sustainability, enabling smarter decisions in real time.
            </p>
          </TextBlockAnimation>
        </div>
      </div>
    </section>
  );
}
