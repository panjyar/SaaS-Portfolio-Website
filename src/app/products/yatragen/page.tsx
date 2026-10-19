"use client";

import dynamic from "next/dynamic";
import AboutSection from "@/components/ui/about-section";
import { ArrowDown } from "lucide-react";

// Lazy load below-fold components
const WhyYatraGen = dynamic(() => import("@/components/ui/why-yatragen"));
const DatabaseWithRestApi = dynamic(() => import("@/components/ui/database-with-rest-api"), { ssr: false });
const Gallery4 = dynamic(() => import("@/components/ui/gallery4").then(mod => ({ default: mod.Gallery4 })));
const DigitalTwinTravel = dynamic(() => import("@/components/ui/digital-twin-travel"), { ssr: false });

function TheSolutionSection() {
  return (
    <section id="ai-travel-copilot" className="relative bg-[#010206] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h2 className="text-sm font-semibold text-brand-green tracking-wider uppercase mb-3">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              AI-Driven Intelligence for Seamless Travel Experiences
            </h3>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
              YatraGen uses AI to understand complex travel constraints, user preferences, and dynamic pricing — generating personalized itineraries in seconds.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              Instead of spending hours manually planning and reacting to disruptions, YatraGen proactively builds, simulates, and optimizes travel schedules in real time.
            </p>
          </div>

          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center z-10">
            {/* Keeping the abstract tech graphics */}
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

function LiveSimulationSection() {
  return (
    <section className="relative bg-[#040810] text-white py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#FE9A00] tracking-wider uppercase mb-3">Live Simulation</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Interactive Itinerary Generation
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Experience how YatraGen models complex travel routes, aggregates real-time booking data, and predicts the most optimal schedules to maximize customer satisfaction and agency efficiency.
          </p>
        </div>
        <div className="w-full shadow-2xl shadow-[#FE9A00]/10 rounded-2xl">
          <DigitalTwinTravel />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="travel-intelligence" className="relative bg-[#0a0f14] text-white overflow-hidden py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-[#FE9A00] tracking-wider uppercase mb-3">How It Works</h2>
        <h2 className="text-center max-w-3xl mx-auto font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase mb-16">
            Continuous Intelligence Loop
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">1. Traveler Data</h4>
              <p className="text-gray-400">Preferences, constraints, past bookings.</p>
            </div>
            <ArrowDown className="text-[#FE9A00] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">2. AI Optimization Models</h4>
              <p className="text-gray-400">Dynamically match routes, flights, and hotels.</p>
            </div>
            <ArrowDown className="text-[#FE9A00] w-6 h-6 ml-4" />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-2">3. Real-Time Adjustments</h4>
              <p className="text-gray-400">Continuous itinerary updates during disruptions.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <DatabaseWithRestApi
              title="YatraGen Recommendation Engine"
              circleText="AI Guide"
              badgeTexts={{ first: "Prefs", second: "Model", third: "Opt", fourth: "Enjoy" }}
              buttonTexts={{ first: "Inputs", second: "Bookings" }}
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
      id: "group",
      title: "Group Bookings",
      description: "Managing large group itineraries, room allocations, and flight alignments seamlessly.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "luxury",
      title: "Luxury Travel",
      description: "Extracting cultural context and generating highly personalized luxury recommendations.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "corporate",
      title: "Corporate Retreats",
      description: "Aligning team schedules, event venues, and travel logistics in a few clicks.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "agencies",
      title: "Travel Agencies",
      description: "Increasing operational efficiency for agents by replacing manual planning with AI generation.",
      href: "/solutions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <Gallery4
      title="Built for the Travel Industry"
      description={
        <span>YatraGen delivers immense value across <strong>Group Bookings</strong>, <strong>Corporate Travel</strong>, <strong>Luxury Itineraries</strong>, and <strong>Agency Operations.</strong></span>
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
          Proven in the Travel Ecosystem
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
          <div className="relative flex flex-col items-center text-center p-8 bg-[#0a0f14] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-[1.5px] border-[#FE9A00]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#FE9A00]/50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#FE9A00]/20" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">10k<span className="text-[#FE9A00]">+</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Itineraries Generated</span>
              <p className="text-gray-400 leading-relaxed font-light">Thousands of trips successfully planned and managed.</p>
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
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">40<span className="text-[#FE9A00]">%</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Satisfaction Increase</span>
              <p className="text-gray-400 leading-relaxed font-light">Higher customer satisfaction scores for travel partners.</p>
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
              <span className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">30<span className="text-[#FE9A00]">h</span></span>
              <span className="text-white font-semibold mb-4 text-lg">Hours Saved / Agent</span>
              <p className="text-gray-400 leading-relaxed font-light">Drastic reduction in manual planning and routing time per month.</p>
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
        <h2 className="text-4xl md:text-5xl  text-white mb-6 tracking-tight">YatraGen doesn't just plan your travel. It dynamically optimizes the entire experience.</h2>
      </div>
    </section>
  );
}

export default function YatraGenPage() {
  return (
    <main>
      <AboutSection
        tagline="WHAT IS YATRAGEN™"
        heroVideo="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
        headline="Optimize Bookings. Enhance Experiences. Increase Satisfaction."
        descriptionLeft="YatraGen empowers travel agencies and platforms with an AI itinerary builder and recommendation engine — turning hours of manual planning into seconds of optimized, highly personalized travel schedules."
        productName="YatraGen™"
        productSubtitle="AI Platform for Smart Itineraries & Travel Optimization"
        ctaText="REQUEST A DEMO"
        ctaMessage="Ready to transform your travel operations with AI?"
        ctaHref="/company/contact"
        accentColor="#FE9A00"
      />
      <TheSolutionSection />
      <LiveSimulationSection />
      <HowItWorksSection />
      <div id="why-yatragen"><WhyYatraGen /></div>
      <WhereItWorksSection />
      <ProofTractionSection />
      <PositioningLineSection />
    </main>
  );
}
