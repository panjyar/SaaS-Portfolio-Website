"use client";

import dynamic from "next/dynamic";
import AboutSection from "@/components/ui/about-section";
import { ArrowDown } from "lucide-react";

// Lazy load below-fold components
const WhyGreenOps = dynamic(() => import("@/components/ui/why-greenops"));
const DatabaseWithRestApi = dynamic(() => import("@/components/ui/database-with-rest-api"), { ssr: false });
const SmoothTextReveal = dynamic(() => import("@/components/ui/smooth-text-reveal"));
const Gallery4 = dynamic(() => import("@/components/ui/gallery4").then(mod => ({ default: mod.Gallery4 })));

function TheSolutionSection() {
  return (
    <section className="relative bg-[#010206] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h2 className="text-sm font-semibold text-brand-green tracking-wider uppercase mb-3">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              AI-Driven Energy Intelligence for Industrial Operations
            </h3>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
              GreenOps uses AI and digital twin models to understand how energy flows across industrial processes — and continuously optimizes them in real time.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              Instead of reacting to data, GreenOps predicts, simulates, and improves system performance.
            </p>
          </div>

          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center z-10">
            <div className="absolute left-0 w-64 h-64 rounded-full border border-[#00A755] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen scale-90">
               <div className="w-full h-full relative">
                 <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#00A755]/40" />
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#00A755]/40" />
                 <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#00A755]/40" />
                 <div className="absolute left-1/4 top-[20%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
                 <div className="absolute left-1/2 top-[40%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
                 <div className="absolute left-3/4 top-[60%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
                 <div className="absolute left-1/4 top-[80%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
               </div>
            </div>

            <div className="absolute left-32 z-10 w-72 h-72 rounded-full border border-[#00A755] flex items-center justify-center overflow-hidden bg-[#010206]">
               <div className="w-full h-full relative flex items-center justify-center">
                 <div className="w-48 h-48 border border-[#00A755]/40 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-[#00A755]/60 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#00A755] rounded-full" />
                    </div>
                 </div>
               </div>
            </div>

            <div className="absolute left-72 w-64 h-64 rounded-full border border-[#00A755] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen scale-90">
               <div className="w-full h-full relative flex items-center">
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-90" />
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-75" />
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-50" />
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-25" />
                 <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#010206]" />
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#00A755]" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative bg-[#0a0f14] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-[#00A755] tracking-wider uppercase mb-3">How It Works</h2>
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          Continuous Intelligence Loop
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">1. Industrial Data</h4>
              <p className="text-gray-400">Sensors, systems, process parameters</p>
            </div>
            <ArrowDown className="text-[#00A755] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">2. AI + Digital Twin Models</h4>
              <p className="text-gray-400">Understand system behavior dynamically.</p>
            </div>
            <ArrowDown className="text-[#00A755] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">3. Real-Time Optimization</h4>
              <p className="text-gray-400">Continuous performance improvement.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <DatabaseWithRestApi 
              title="GreenOps Optimization Engine"
              circleText="AI Twin"
              badgeTexts={{ first: "Data", second: "Model", third: "Opt", fourth: "Improve" }}
              buttonTexts={{ first: "Sensors", second: "Controls" }}
              lightColor="#00A755"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereItWorksSection() {
  const items = [
    { 
      id: "cement", 
      title: "Cement plants", 
      description: "Optimizing kiln temperatures and alternative fuel management for continuous production.", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "steel", 
      title: "Steel and metals", 
      description: "Enhancing furnace performance and melt shop optimization.", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "oilgas", 
      title: "Oil & gas", 
      description: "Refinery unit optimization and significant energy intensity reduction.", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "chemicalandpharma", 
      title: "Chemical & Pharma", 
      description: "Optimizing process heat and improving energy efficiency.", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "powerandutilization", 
      title: "Power & Utilities", 
      description: "Optimizing power generation and improving energy efficiency.", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <Gallery4 
      title="Built for Energy-Intensive Industries"
      description={
        <span>GreenOps delivers value across high-impact areas including <strong>Kiln optimization</strong>, <strong>Furnace performance</strong>, <strong>Process heat systems</strong>, <strong>Fuel consumption optimization</strong>, and <strong>Equipment efficiency.</strong></span>
      }
      items={items}
    />
  );
}

function ProofTractionSection() {
  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-sm font-semibold text-[#00A755] tracking-wider uppercase mb-3 text-center">Proof / Traction</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white text-center max-w-3xl mx-auto">
          Proven in Real Industrial Environments
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
          {/* Card 1: Assets Deployed (Concentric Rings) */}
          <div className="relative flex flex-col items-center text-center p-8 bg-[#0a0f14] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-[1.5px] border-[#00A755]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#00A755]/50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#00A755]/20" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">100<span className="text-[#00A755]">+</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Assets Deployed</span>
              <p className="text-gray-400 leading-relaxed font-light">Deployed across multiple heavy industrial assets</p>
            </div>
          </div>

          {/* Card 2: Systems Integrated (Networking Nodes) */}
          <div className="relative flex flex-col items-center text-center p-8 bg-[#0a0f14] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-100">
               <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#00A755" strokeWidth="1" className="opacity-100" />
                 <path d="M0,70 Q25,90 50,70 T100,70" fill="none" stroke="#00A755" strokeWidth="0.5" className="opacity-50" />
                 <path d="M0,30 Q25,10 50,30 T100,30" fill="none" stroke="#00A755" strokeWidth="0.5" className="opacity-50" />
                 <circle cx="50" cy="50" r="2.5" fill="#00A755" />
                 <circle cx="25" cy="35" r="2" fill="#00A755" className="opacity-80" />
                 <circle cx="75" cy="65" r="2" fill="#00A755" className="opacity-80" />
               </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">50<span className="text-[#00A755]">+</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Systems Integrated</span>
              <p className="text-gray-400 leading-relaxed font-light">Integrated with diverse equipment and enterprise systems</p>
            </div>
          </div>

          {/* Card 3: Performance Gain (Ascending Trend) */}
          <div className="relative flex flex-col items-center text-center p-8 bg-[#0a0f14] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-100">
               <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M-10,110 L30,60 L50,70 L110,-10" fill="none" stroke="#00A755" strokeWidth="1.5" className="opacity-100" />
                 <path d="M-10,120 L30,70 L50,80 L110,0" fill="none" stroke="#00A755" strokeWidth="0.5" className="opacity-50" />
                 <path d="M-10,100 L30,50 L50,60 L110,-20" fill="none" stroke="#00A755" strokeWidth="0.5" className="opacity-50" />
               </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">20<span className="text-[#00A755]">%</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Performance Gain</span>
              <p className="text-gray-400 leading-relaxed font-light">Designed for and succeeding in real-world industrial complexity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PositioningLineSection() {
  return (
    <section className="bg-black py-32 sm:py-48 flex items-center justify-center border-t border-b border-white/5 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <SmoothTextReveal 
          text="GreenOps doesn't just monitor industrial energy. It continuously optimizes it." 
          className="text-white lg:text-8xl md:text-7xl text-5xl font-bold tracking-tighter"
        />
      </div>
    </section>
  );
}

export default function GreenOpsPage() {
  return (
    <main>
      <AboutSection
        tagline="WHAT IS GREENOPS™"
        heroImage="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&auto=format&fit=crop"
        statsRow={[
          { value: "10-20%", label: "Reduction in Energy Consumption" },
          { value: "2X", label: "increase in OPEX" },
        ]}
        statHighlight={{ value: "2-8%", label: "Reduction in Carbon Footprint" }}
        statExtra={{ value: "5-15%", label: "Improvement in Process Efficiency" }}
        headline="Optimize Energy. Reduce Emissions. Increase Profit."
        descriptionLeft="GreenOps helps heavy industries continuously optimize energy consumption and process efficiency using AI and digital twin models — reducing cost, emissions, and operational inefficiencies in real time."
        productName="GreenOps™"
        productSubtitle="AI Platform for Industrial Decarbonisation & Process Efficiency"
        ctaText="REQUEST A DEMO"
        ctaMessage="Ready to optimize your industrial operations with AI?"
        ctaHref="/contact"
        accentColor="#00A755"
      />
      <TheSolutionSection />
      <HowItWorksSection />
      <WhyGreenOps />
      <WhereItWorksSection />
      <ProofTractionSection />
      <PositioningLineSection />
    </main>
  );
}
