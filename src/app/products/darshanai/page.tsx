"use client";

import dynamic from "next/dynamic";
import AboutSection from "@/components/ui/about-section";
import { ArrowDown } from "lucide-react";
import DarshanAIArchitectureDiagram from "./components/DarshanAIArchitectureDiagram";

const DatabaseWithRestApi = dynamic(() => import("@/components/ui/database-with-rest-api"), { ssr: false });
const Gallery4 = dynamic(() => import("@/components/ui/gallery4").then(mod => ({ default: mod.Gallery4 })));

function TheSolutionSection() {
  return (
    <section id="ai-vision-platform" className="relative bg-[#010206] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h2 className="text-sm font-semibold text-[#FE9A00] tracking-wider uppercase mb-3">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Real-Time Crowd Intelligence for Tourist Destinations
            </h3>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
              Darshan AI transforms existing camera feeds into a live crowd monitoring system, continuously analyzing foot traffic and measuring how crowded a particular place is in real time.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              Instead of relying on manual counting or outdated ticketing data, Darshan AI provides instant visibility into crowd density—ensuring a better, safer experience for every tourist.
            </p>
          </div>

          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center z-10">
            <div className="absolute left-0 w-64 h-64 rounded-full border border-[#FE9A00] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen scale-90">
              <div className="w-full h-full relative">
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#FE9A00]/40" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FE9A00]/40" />
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#FE9A00]/40" />
                <div className="absolute left-1/4 top-[20%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
                <div className="absolute left-1/2 top-[40%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
                <div className="absolute left-3/4 top-[60%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
                <div className="absolute left-1/4 top-[80%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
              </div>
            </div>

            <div className="absolute left-32 z-10 w-72 h-72 rounded-full border border-[#FE9A00] flex items-center justify-center overflow-hidden bg-[#010206]">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="w-48 h-48 border border-[#FE9A00]/40 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 border border-[#FE9A00]/60 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#FE9A00] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-72 w-64 h-64 rounded-full border border-[#FE9A00] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen scale-90">
              <div className="w-full h-full relative flex items-center">
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-90" />
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-75" />
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-50" />
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-25" />
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#010206]" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FE9A00]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveArchitectureSection() {
  return (
    <section className="relative bg-[#040810] text-white py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#FE9A00] tracking-wider uppercase mb-3">Live Architecture</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            End-to-End Crowd Intelligence
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Darshan AI seamlessly connects CCTV arrays and cameras, processing footage through edge AI to deliver immediate crowd counts, density maps, and footfall metrics.
          </p>
        </div>
        <div className="w-full shadow-2xl shadow-[#FE9A00]/10 rounded-2xl bg-[#0a0f14] overflow-hidden">
          <DarshanAIArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="vision-intelligence" className="relative bg-[#0a0f14] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-[#FE9A00] tracking-wider uppercase mb-3">How It Works</h2>
        <h2 className="text-center max-w-3xl mx-auto font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase mb-16">
            Continuous Intelligence Loop
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">1. Visual Data Ingestion</h4>
              <p className="text-gray-400">RTSP streams, edge cameras, and existing site CCTVs.</p>
            </div>
            <ArrowDown className="text-[#FE9A00] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">2. Edge AI & Neural Models</h4>
              <p className="text-gray-400">Count people and estimate crowd density in real time.</p>
            </div>
            <ArrowDown className="text-[#FE9A00] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">3. Capacity Insights</h4>
              <p className="text-gray-400">Trigger capacity alerts and visualize footfall dashboards.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <DatabaseWithRestApi
              title="Darshan AI Engine"
              circleText="AI Vision"
              badgeTexts={{ first: "Video", second: "Model", third: "Infer", fourth: "Count" }}
              buttonTexts={{ first: "Streams", second: "Dashboard" }}
              lightColor="#FE9A00"
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
      id: "religious-sites",
      title: "Temples & Shrines",
      description: "Monitor crowds during festivals and manage queue lines efficiently.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1549646549-36a520f92b74?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "public-squares",
      title: "Public Squares",
      description: "Analyze foot traffic and peak visiting hours in open tourist areas.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1508922253896-121516e84457?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "museums",
      title: "Museums & Galleries",
      description: "Prevent overcrowding in exhibits and track visitor flow.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "events",
      title: "Events & Festivals",
      description: "Ensure public safety by monitoring venue capacity limits.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1540039155732-68473668f430?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <Gallery4
      title="Built for Popular Destinations"
      description={
        <span>Darshan AI delivers immediate crowd insights across <strong>Religious Sites</strong>, <strong>Public Squares</strong>, <strong>Museums</strong>, and <strong>Festivals.</strong></span>
      }
      items={items}
    />
  );
}

function ProofTractionSection() {
  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-sm font-semibold text-[#FE9A00] tracking-wider uppercase mb-3 text-center">Proof / Traction</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white text-center max-w-3xl mx-auto">
          Proven in the Busiest Locations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
          <div className="relative flex flex-col items-center text-center p-8 bg-[#0a0f14] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-[1.5px] border-[#FE9A00]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#FE9A00]/50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#FE9A00]/20" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">99<span className="text-[#FE9A00]">%+</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Counting Accuracy</span>
              <p className="text-gray-400 leading-relaxed font-light">Highly tuned neural networks ensuring minimal counting errors.</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center text-center p-8 bg-[#0a0f14] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-100">
              <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#FE9A00" strokeWidth="1" className="opacity-100" />
                <path d="M0,70 Q25,90 50,70 T100,70" fill="none" stroke="#FE9A00" strokeWidth="0.5" className="opacity-50" />
                <path d="M0,30 Q25,10 50,30 T100,30" fill="none" stroke="#FE9A00" strokeWidth="0.5" className="opacity-50" />
                <circle cx="50" cy="50" r="2.5" fill="#FE9A00" />
                <circle cx="25" cy="35" r="2" fill="#FE9A00" className="opacity-80" />
                <circle cx="75" cy="65" r="2" fill="#FE9A00" className="opacity-80" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">50<span className="text-[#FE9A00]">k+</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Tourists Tracked Daily</span>
              <p className="text-gray-400 leading-relaxed font-light">High-volume tracking across multiple popular tourist hubs.</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center text-center p-8 bg-[#0a0f14] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-100">
              <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M-10,110 L30,60 L50,70 L110,-10" fill="none" stroke="#FE9A00" strokeWidth="1.5" className="opacity-100" />
                <path d="M-10,120 L30,70 L50,80 L110,0" fill="none" stroke="#FE9A00" strokeWidth="0.5" className="opacity-50" />
                <path d="M-10,100 L30,50 L50,60 L110,-20" fill="none" stroke="#FE9A00" strokeWidth="0.5" className="opacity-50" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">4<span className="text-[#FE9A00]">B+</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Video Frames Analyzed</span>
              <p className="text-gray-400 leading-relaxed font-light">Continuous scale across global enterprise deployments.</p>
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
        <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight">Darshan AI doesn't just record video. It helps you manage crowds and enhance the tourist experience.</h2>
      </div>
    </section>
  );
}

export default function DarshanAIPage() {
  return (
    <main>
      <AboutSection
        tagline="WHAT IS DARSHAN AI™"
        heroVideo="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
        headline="See How Crowded Your Destination Is."
        descriptionLeft="Darshan AI empowers tourist destinations with an AI vision intelligence platform—turning standard camera feeds into real-time crowd analytics and footfall tracking."
        productName="Darshan AI™"
        productSubtitle="AI Vision Platform for Tourist Tracking & Crowd Intelligence"
        ctaText="REQUEST A DEMO"
        ctaMessage="Ready to transform your visitor management with AI?"
        ctaHref="/company/contact"
        accentColor="#FE9A00"
      />
      <TheSolutionSection />
      <LiveArchitectureSection />
      <HowItWorksSection />
      <WhereItWorksSection />
      <ProofTractionSection />
      <PositioningLineSection />
    </main>
  );
}
