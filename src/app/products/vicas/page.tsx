"use client";

import dynamic from "next/dynamic";
import AboutSection from "@/components/ui/about-section";
import { ArrowDown } from "lucide-react";
const SmoothTextReveal = dynamic(() => import("@/components/ui/smooth-text-reveal"));
const Gallery4 = dynamic(() => import("@/components/ui/gallery4").then(mod => ({ default: mod.Gallery4 })));

// Lazy load below-fold components
const WhyVicas = dynamic(() => import("@/components/ui/why-vicas"));
const DatabaseWithRestApi = dynamic(() => import("@/components/ui/database-with-rest-api"), { ssr: false });

function TheSolutionSectionVicas() {
  return (
    <section id="collision-avoidance" className="relative bg-[#010206] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h2 className="text-sm font-semibold text-[#FF4000] tracking-wider uppercase mb-3">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              AI-Powered Industrial Intelligence Platform
            </h3>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
               VICAS leverages AI, real-time data, and digital intelligence to model how industrial processes and systems behave — and continuously optimize them for maximum efficiency.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              Moving beyond reactive monitoring, VICAS predicts, simulates, and improves performance—driving productivity, safety, and sustainability. 
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
    <section id="computer-vision-ai" className="relative bg-[#0a0f14] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-[#FF4000] tracking-wider uppercase mb-3">How It Works</h2>
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          From Data to Decisions in Real Time 
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">1. Data Ingestion</h4>
              <p className="text-gray-400">Real-time data streams from sensors, cameras, and industrial systems feed the VICAS platform.</p>
            </div>
            <ArrowDown className="text-[#FF4000] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">2. AI-Powered Analysis</h4>
              <p className="text-gray-400">VICAS uses advanced AI and digital twins to model, simulate, and optimize industrial processes.</p>
            </div>
            <ArrowDown className="text-[#FF4000] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">3. Actionable Insights</h4>
              <p className="text-gray-400">Real-time alerts, optimization recommendations, and predictive insights drive smarter decisions and continuous improvement.</p>
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


function WhereItWorksSection() {
  const items = [
    { 
      id: "railways", 
      title: "Railways", 
      description: "Real-time monitoring of rolling stock health and infrastructure integrity.", 
      href: "#", 
      image: "https://vicasinfo.livnsense.com/media/industries/railways.jpg" 
    },
    { 
      id: "port", 
      title: "Ports", 
      description: "Optimizing crane operations and vessel traffic management.", 
      href: "#", 
      image: "https://vicasinfo.livnsense.com/media/industries/ports.jpg" 
    },
    { 
      id: "manufacturing", 
      title: "Manufacturing", 
      description: "Real-time quality control and production monitoring.", 
      href: "#", 
      image: "https://vicasinfo.livnsense.com/media/industries/manufacturing.jpg" 
    },
    { 
      id: "warehouses", 
      title: "Warehouses", 
      description: "Optimizing storage conditions and inventory management.", 
      href: "#", 
      image: "https://vicasinfo.livnsense.com/media/industries/warehouse.jpg" 
    },
    { 
      id: "food", 
      title: "Food & Beverage", 
      description: "Ensuring quality control and production efficiency.", 
      href: "#", 
      image: "https://vicasinfo.livnsense.com/media/industries/food-and-beverages.jpg" 
    },
    { 
      id: "construction", 
      title: "Construction", 
      description: "Optimizing construction operations and improving safety.", 
      href: "#", 
      image: "https://vicasinfo.livnsense.com/media/industries/construction.jpg" 
    },
  ];

  return (
    <Gallery4 
      title="Built for Energy-Intensive Industries"
      description={
        <span>VICAS delivers value across high-impact areas including <strong>Railways</strong>, <strong>Ports</strong>, <strong>Manufacturing</strong>, <strong>Warehouses</strong>, <strong>Food & Beverage</strong>, and <strong>Construction.</strong></span>
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
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">30<span className="text-[#00A755]">%</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Operational Efficiency</span>
              <p className="text-gray-400 leading-relaxed font-light">Smarter, faster, and optimized industrial performance.</p>
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
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">40<span className="text-[#00A755]">%</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Less Downtime</span>
              <p className="text-gray-400 leading-relaxed font-light">Predictive insights preventing unexpected failures.</p>
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
              <span className="text-white font-semibold mb-4 text-lg">Energy Optimization</span>
              <p className="text-gray-400 leading-relaxed font-light">Lower energy usage with sustainable operations.</p>
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
          text="VICAS is an AI-powered industrial intelligence platform that models, simulates, and continuously optimizes how industrial processes and systems behave — driving productivity, safety, and sustainability." 
          className="text-white lg:text-8xl md:text-7xl text-5xl font-bold tracking-tighter"
        />
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
      <div id="safety-monitoring"><WhyVicas /></div>
      <WhereItWorksSection />
      <ProofTractionSection />
      <PositioningLineSection />

    </main>
  );
}
