"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icons for the 4 problems
const icons = {
  visibility: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="3" y1="3" x2="21" y2="21" />
    </svg>
  ),
  compliance: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M9 16l2 2 4-4" />
    </svg>
  ),
  reactive: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  data: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
};

const pipelineNodes = [
  {
    id: "limited-visibility",
    title: "Limited Visibility",
    icon: icons.visibility,
    description: "Industrial operations generate continuous movement across people, vehicles and equipment.",
    bullets: [
      "Delayed risk identification",
      "Reduced situational awareness",
      "Higher operational exposure"
    ],
    deskPos: [10, 25],
    mobPos: [30, 12.5]
  },
  {
    id: "manual-monitoring",
    title: "Manual Compliance",
    icon: icons.compliance,
    description: "Monitoring PPE, restricted zones and safety protocols requires constant supervision.",
    bullets: [
      "Compliance gaps",
      "Audit challenges",
      "Increased operational effort"
    ],
    deskPos: [36.6, 75],
    mobPos: [70, 37.5]
  },
  {
    id: "reactive-risk",
    title: "Reactive Risk Mgmt",
    icon: icons.reactive,
    description: "Safety decisions often rely on manual observation and post-incident investigations.",
    bullets: [
      "Preventable incidents",
      "Slower response times",
      "Repeated safety issues"
    ],
    deskPos: [63.3, 25],
    mobPos: [30, 62.5]
  },
  {
    id: "untapped-data",
    title: "Untapped Data",
    icon: icons.data,
    description: "Large volumes of visual data are captured every day, but little is converted into actionable insight.",
    bullets: [
      "Missed risk indicators",
      "Delayed decisions",
      "Lost operational intelligence"
    ],
    deskPos: [90, 75],
    mobPos: [70, 87.5]
  }
];

const DesktopSVG = React.forwardRef<SVGPathElement, unknown>((_, ref) => (
  <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
    <defs>
      <filter id="glow-desktop" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path 
      d="M 100 150 C 233 150, 233 450, 366 450 C 500 450, 500 150, 633 150 C 766 150, 766 450, 900 450" 
      fill="none" 
      stroke="rgba(255,255,255,0.1)" 
      strokeWidth="2" 
    />
    <path 
      ref={ref}
      d="M 100 150 C 233 150, 233 450, 366 450 C 500 450, 500 150, 633 150 C 766 150, 766 450, 900 450" 
      fill="none" 
      stroke="#EF4444" 
      strokeWidth="2" 
    />
    {[0, 1, 2].map((i) => (
      <circle key={`particle-${i}`} r="5" fill="#EF4444" filter="url(#glow-desktop)">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          begin={`${i * -2.66}s`}
          path="M 100 150 C 233 150, 233 450, 366 450 C 500 450, 500 150, 633 150 C 766 150, 766 450, 900 450"
        />
      </circle>
    ))}
  </svg>
));
DesktopSVG.displayName = "DesktopSVG";

const MobileSVG = React.forwardRef<SVGPathElement, unknown>((_, ref) => (
  <svg viewBox="0 0 400 800" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
    <defs>
      <filter id="glow-mob" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path 
      d="M 120 100 C 120 200, 280 200, 280 300 C 280 400, 120 400, 120 500 C 120 600, 280 600, 280 700" 
      fill="none" 
      stroke="rgba(255,255,255,0.1)" 
      strokeWidth="2" 
    />
    <path 
      ref={ref}
      d="M 120 100 C 120 200, 280 200, 280 300 C 280 400, 120 400, 120 500 C 120 600, 280 600, 280 700" 
      fill="none" 
      stroke="#EF4444" 
      strokeWidth="2" 
    />
    {[0, 1, 2].map((i) => (
      <circle key={`particle-${i}`} r="5" fill="#EF4444" filter="url(#glow-mob)">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          begin={`${i * -2.66}s`}
          path="M 120 100 C 120 200, 280 200, 280 300 C 280 400, 120 400, 120 500 C 120 600, 280 600, 280 700"
        />
      </circle>
    ))}
  </svg>
));
MobileSVG.displayName = "MobileSVG";

export default function ProblemInVicas() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRefDesktop = useRef<SVGPathElement>(null);
  const pathRefMobile = useRef<SVGPathElement>(null);
  const desktopNodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const path = pathRefDesktop.current;
      if (!path) return;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(path, { strokeDashoffset: 0, duration: 1, ease: "none" }, 0);

      desktopNodesRef.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(
          el,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.1, ease: "back.out(1.5)" },
          (i / pipelineNodes.length) * 0.95
        );
      });
    });

    mm.add("(max-width: 1023px)", () => {
      const path = pathRefMobile.current;
      if (!path) return;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(path, { strokeDashoffset: 0, duration: 1, ease: "none" }, 0);

      mobileNodesRef.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(
          el,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.1, ease: "back.out(1.5)" },
          (i / pipelineNodes.length) * 0.95
        );
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-x-0 top-16 lg:top-12 px-6 text-center z-20">
        <h2 className="text-red-500 text-xs lg:text-sm font-semibold tracking-widest uppercase mb-3 text-balance">
          The Problem Space
        </h2>
        <h3 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-balance">
          Why Industrial Safety Fails
        </h3>
      </div>

      {/* Desktop Container */}
      <div className="hidden lg:block relative w-full h-[600px] max-w-[1200px] mt-24 mx-auto">
         <DesktopSVG ref={pathRefDesktop} />
         {pipelineNodes.map((node, i) => {
           const isTop = node.deskPos[1] < 50;
           return (
             <div
               key={`desk-${node.id}`}
               ref={(el) => { desktopNodesRef.current[i] = el; }}
               className="absolute z-10 group w-[120px] xl:w-[140px] hover:z-50"
               style={{
                 left: `${node.deskPos[0]}%`,
                 top: `${node.deskPos[1]}%`,
                 transform: "translate(-50%, -50%)",
               }}
             >
               <div className="relative w-full aspect-square bg-[#101112] border border-white/10 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:border-red-500/60 group-hover:shadow-[0_0_24px_rgba(239,68,68,0.25)] cursor-default">
                 <div className="text-red-500 mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300">
                   {node.icon}
                 </div>
                 <p className="text-white text-[12px] xl:text-[13px] font-medium text-center px-2 leading-snug">
                   {node.title}
                 </p>
               </div>

               {/* Hover Card */}
               <div
                 className={cn(
                   "absolute left-1/2 -translate-x-1/2 w-80 bg-[#121212] border border-red-500/20 p-5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none",
                   isTop ? "top-full mt-4" : "bottom-full mb-4"
                 )}
               >
                 <h4 className="text-white font-semibold text-[15px] mb-2">{node.title}</h4>
                 <p className="text-white/70 text-[12px] leading-relaxed mb-4">{node.description}</p>
                 
                 <div className="pt-4 border-t border-white/10">
                   <h5 className="text-[11px] font-semibold text-white/50 mb-3 uppercase tracking-wide">Operational Impact</h5>
                   <ul className="space-y-2">
                     {node.bullets.map((b, idx) => (
                       <li key={idx} className="text-white/80 text-[12px] leading-tight flex items-start gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                         <span>{b}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </div>
           );
         })}
      </div>

      {/* Mobile Container */}
      <div className="lg:hidden relative w-full max-w-[400px] h-[800px] mx-auto mt-28 mb-12">
         <MobileSVG ref={pathRefMobile} />
         {pipelineNodes.map((node, i) => {
           return (
             <div
               key={`mob-${node.id}`}
               ref={(el) => { mobileNodesRef.current[i] = el; }}
               className="absolute z-10 group w-[100px] hover:z-50"
               style={{
                 left: `${node.mobPos[0]}%`,
                 top: `${node.mobPos[1]}%`,
                 transform: "translate(-50%, -50%)",
               }}
             >
               <div className="relative w-full aspect-square bg-[#101112] border border-white/10 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:border-red-500/60 group-hover:shadow-[0_0_24px_rgba(239,68,68,0.25)] cursor-default">
                 <div className="text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                   <div style={{ transform: "scale(0.85)" }}>{node.icon}</div>
                 </div>
                 <p className="text-white text-[10px] font-medium text-center px-1 leading-tight">
                   {node.title}
                 </p>
               </div>

               {/* Hover Card (shows below on tap/hover) */}
               <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[240px] bg-[#121212] border border-red-500/20 p-4 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                 <p className="text-white/80 text-[11px] leading-relaxed mb-3">{node.description}</p>
                 <div className="pt-3 border-t border-white/10">
                   <h5 className="text-[10px] text-white/50 mb-2 uppercase tracking-wide">Operational Impact</h5>
                   <ul className="space-y-1.5">
                     {node.bullets.map((b, idx) => (
                       <li key={idx} className="text-white/70 text-[11px] leading-tight flex items-start gap-1.5">
                         <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-0.5" />
                         <span>{b}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </div>
           );
         })}
      </div>
    </section>
  );
}
