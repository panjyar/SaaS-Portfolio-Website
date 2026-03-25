"use client";

import dynamic from "next/dynamic";
import AboutSection from "@/components/ui/about-section";
import { ArrowDown } from "lucide-react";

// Lazy load below-fold components
const WhyVicas = dynamic(() => import("@/components/ui/why-vicas"));
const DatabaseWithRestApi = dynamic(() => import("@/components/ui/database-with-rest-api"), { ssr: false });

function TheSolutionSectionVicas() {
  return (
    <section className="relative bg-[#010206] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h2 className="text-sm font-semibold text-[#FF4000] tracking-wider uppercase mb-3">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h3>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
               Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
            </p>
          </div>

          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center z-10">
            <div className="absolute left-0 w-64 h-64 rounded-full border border-[#FF4000] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen scale-90">
               <div className="w-full h-full relative">
                 <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#FF4000]/40" />
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FF4000]/40" />
                 <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#FF4000]/40" />
                 <div className="absolute left-1/4 top-[20%] w-3 h-3 rounded-full bg-[#FF4000] -ml-1.5" />
                 <div className="absolute left-1/2 top-[40%] w-3 h-3 rounded-full bg-[#FF4000] -ml-1.5" />
                 <div className="absolute left-3/4 top-[60%] w-3 h-3 rounded-full bg-[#FF4000] -ml-1.5" />
                 <div className="absolute left-1/4 top-[80%] w-3 h-3 rounded-full bg-[#FF4000] -ml-1.5" />
               </div>
            </div>

            <div className="absolute left-32 z-10 w-72 h-72 rounded-full border border-[#FF4000] flex items-center justify-center overflow-hidden bg-[#010206]">
               <div className="w-full h-full relative flex items-center justify-center">
                 <div className="w-48 h-48 border border-[#FF4000]/40 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-[#FF4000]/60 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#FF4000] rounded-full" />
                    </div>
                 </div>
               </div>
            </div>

            <div className="absolute left-72 w-64 h-64 rounded-full border border-[#FF4000] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen scale-90">
               <div className="w-full h-full relative flex items-center">
                 <div className="absolute w-full h-full border border-[#FF4000] rounded-full scale-90" />
                 <div className="absolute w-full h-full border border-[#FF4000] rounded-full scale-75" />
                 <div className="absolute w-full h-full border border-[#FF4000] rounded-full scale-50" />
                 <div className="absolute w-full h-full border border-[#FF4000] rounded-full scale-25" />
                 <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#010206]" />
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FF4000]" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSectionVicas() {
  return (
    <section className="relative bg-[#0a0f14] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-[#FF4000] tracking-wider uppercase mb-3">How It Works</h2>
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          Excepteur sint occaecat cupidatat
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">1. Lorem Ipsum</h4>
              <p className="text-gray-400">Voluptate velit esse cillum dolore eu fugiat nulla.</p>
            </div>
            <ArrowDown className="text-[#FF4000] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">2. Dolor Sit Amet</h4>
              <p className="text-gray-400">Pariatur excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <ArrowDown className="text-[#FF4000] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">3. Consectetur</h4>
              <p className="text-gray-400">Sunt in culpa qui officia deserunt mollit.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <DatabaseWithRestApi 
              title="VICAS Neural Network"
              circleText="Vision"
              badgeTexts={{ first: "Data", second: "Analyze", third: "Decide", fourth: "Alert" }}
              buttonTexts={{ first: "Cameras", second: "Dashboards" }}
              lightColor="#FF4000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VicasPage() {
  return (
    <main>
      <AboutSection
        tagline="WHAT IS VICAS™"
        heroImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop"
        statsRow={[
          { value: "2.6", label: "injuries per 100 workers" },
          { value: "47%", label: "accidents from equipment collisions" },
        ]}
        statHighlight={{ value: "6.5%", label: "GHG" }}
        statExtra={{ value: "50%", label: "of global emissions from heavy industry" }}
        headline="Virtual Intelligence Creating Augmented Safety for High-Risk Zones."
        descriptionLeft="VICAS™ (Virtual Intelligence Creating Augmented Safety) is a sophisticated AI-Vision platform that employs deep learning to extract actionable insights from visual data. By deploying complex neural network architectures on ruggedized GPU hardware, the system replicates human perception to identify patterns."
        // descriptionRight="With 2X spiraling operational costs due to aging equipment and rising gas costs, and one-third of global waste generated by heavy industrial sectors, VICAS™ drives real-time decision-making in high-risk zones — ensuring worker safety, reducing incidents, and lowering environmental impact."
        productName="VICAS™"
        productSubtitle="AI Brain for Industrial Safety"
        ctaText="EXPLORE VICAS"
        ctaMessage="Ready to transform safety in your industrial operations?"
        ctaHref="#"
        accentColor="#00A755"
      />
      <TheSolutionSectionVicas />
      <HowItWorksSectionVicas />
      <WhyVicas />
    </main>
  );
}
