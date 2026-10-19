// components/OurApproach.tsx
import React from "react";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

const OurApproach: React.FC = () => (
  <section className="our-approach relative overflow-hidden" aria-labelledby="our-approach-heading">
    <div className="absolute inset-0 bg-[#FE9A00]/[0.02] pointer-events-none" />
    <div className="our-approach__container max-w-7xl mx-auto px-4 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left side: Visual */}
      <div className="order-2 lg:order-1 flex justify-center lg:justify-start w-full">
         <DatabaseWithRestApi 
           title="LivNSense YatraGen and Darshan AI Architecture"
           badgeTexts={{
             first: "SENSORS",
             second: "EDGE AI",
             third: "OPC-UA",
             fourth: "DIGITAL TWIN"
           }}
           buttonTexts={{
             first: "YatraGen and Darshan AI",
             second: "DarshanAI"
           }}
           circleText="AI"
         />
      </div>

      {/* Right side: Text Content */}
      <div className="order-1 lg:order-2">
        <h2 id="our-approach-heading" className="our-approach__heading mb-8 relative">
          Our <span className="text-[#FE9A00]">Intelligence Platform</span>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#FE9A00]/40 blur-sm rounded-full hidden lg:block" />
        </h2>
        <p className="our-approach__summary text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-xl">
          We combine <span className="text-white font-medium italic">AI innovation</span> with industrial intelligence to build smarter, safer, and more sustainable operations.
        </p>
        <ul className="our-approach__list space-y-6">
          <li className="flex items-start gap-4">
            <div className="mt-1 min-w-1.5 h-1.5 rounded-full bg-[#FE9A00]" />
            <span className="text-gray-300 text-sm md:text-base leading-relaxed">
              <strong className="text-white font-semibold">YatraGen and Darshan AI™</strong> transforms manufacturing data into <span className="text-[#FE9A00]/90">actionable insights</span> that cut emissions and drive sustainable performance.
            </span>
          </li>
          <li className="flex items-start gap-4 group">
            <div className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-[#FE9A00] group-hover:scale-150 transition-transform" />
            <span className="text-gray-300 text-sm md:text-base leading-relaxed">
              <strong className="text-white font-semibold">DarshanAI™</strong> uses <span className="text-[#FE9A00]/90">predictive AI</span> to prevent incidents, enhance compliance, and strengthen safety culture.
            </span>
          </li>
        </ul>
        <p className="our-approach__final text-gray-400 mt-12 text-sm italic border-l border-[#FE9A00]/20 pl-6 leading-loose">
          Together, they deliver real-time intelligence across equipment, plants, and enterprise operations.
        </p>
      </div>
    </div>
  </section>
);

export default OurApproach;
