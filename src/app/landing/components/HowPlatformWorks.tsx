"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pipelineNodes = [
  {
    id: "data-sources",
    title: "Data Sources",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
      </svg>
    ),
    bullets: [
      "Industrial systems & sensors",
      "Structured + unstructured data",
      "Real-time & batch signals"
    ],
    deskPos: [10, 25],
    mobPos: [30, 12.5]
  },
  {
    id: "edge-layer",
    title: "Edge Layer",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 18h.01" />
        <path d="M10 18h.01" />
        <path d="M12 14v-6" />
        <path d="M8.5 7.5a5 5 0 0 1 7 0" />
        <path d="M6 5a8.5 8.5 0 0 1 12 0" />
      </svg>
    ),
    bullets: [
      "Local preprocessing/filtering",
      "Low-latency AI inference",
      "Secure data buffering"
    ],
    deskPos: [23.33, 75],
    mobPos: [70, 25]
  },
  {
    id: "data-acq",
    title: "Data Acquisition",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    bullets: [
      "Protocol normalization",
      "Data validation & sanitization",
      "Unified ingestion pipelines"
    ],
    deskPos: [36.67, 25],
    mobPos: [30, 37.5]
  },
  {
    id: "cloud-platform",
    title: "Cloud Platform",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    bullets: [
      "Scalable storage & compute",
      "Distributed processing",
      "Secure multi-tenant architecture"
    ],
    deskPos: [50, 75],
    mobPos: [70, 50]
  },
  {
    id: "ai-analytics",
    title: "AI & Analytics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.002 6.5A3 3 0 0 1 5.602 5.125" />
        <path d="M11.588 15.5a3 3 0 0 1-.588-1.5" />
        <path d="M12.999 15.5a3 3 0 0 0 .588-1.5" />
        <path d="M12 5v8" />
      </svg>
    ),
    bullets: [
      "Predictive anomaly models",
      "Real-time & batch analytics",
      "Continuous model training"
    ],
    deskPos: [63.33, 25],
    mobPos: [30, 62.5]
  },
  {
    id: "apps-saas",
    title: "Applications / SaaS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <line x1="9" x2="9" y1="21" y2="9" />
      </svg>
    ),
    bullets: [
      "Intuitive dashboards",
      "Digital twin visual interfaces",
      "Workflow automation"
    ],
    deskPos: [76.67, 75],
    mobPos: [70, 75]
  },
  {
    id: "insights",
    title: "Insights & Actions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    bullets: [
      "Prescriptive recommendations",
      "Automated SMS/Email alerts",
      "Real-time decision support"
    ],
    deskPos: [90, 25],
    mobPos: [30, 87.5]
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
      d="M 100 150 C 167 150, 167 450, 233 450 C 300 450, 300 150, 367 150 C 433 150, 433 450, 500 450 C 567 450, 567 150, 633 150 C 700 150, 700 450, 767 450 C 833 450, 833 150, 900 150" 
      fill="none" 
      stroke="rgba(255,255,255,0.1)" 
      strokeWidth="2" 
    />
    <path 
      ref={ref}
      d="M 100 150 C 167 150, 167 450, 233 450 C 300 450, 300 150, 367 150 C 433 150, 433 450, 500 450 C 567 450, 567 150, 633 150 C 700 150, 700 450, 767 450 C 833 450, 833 150, 900 150" 
      fill="none" 
      stroke="#00A755" 
      strokeWidth="2" 
    />
    {[0, 1, 2, 3].map((i) => (
      <circle key={`particle-${i}`} r="5" fill="#00A755" filter="url(#glow-desktop)">
        <animateMotion
          dur="10s"
          repeatCount="indefinite"
          begin={`${i * -2.5}s`}
          path="M 100 150 C 167 150, 167 450, 233 450 C 300 450, 300 150, 367 150 C 433 150, 433 450, 500 450 C 567 450, 567 150, 633 150 C 700 150, 700 450, 767 450 C 833 450, 833 150, 900 150"
        />
      </circle>
    ))}
  </svg>
));
DesktopSVG.displayName = "DesktopSVG";

const MobileSVG = React.forwardRef<SVGPathElement, unknown>((_, ref) => (
  <svg viewBox="0 0 400 1200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
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
      d="M 120 150 C 120 225, 280 225, 280 300 C 280 375, 120 375, 120 450 C 120 525, 280 525, 280 600 C 280 675, 120 675, 120 750 C 120 825, 280 825, 280 900 C 280 975, 120 975, 120 1050" 
      fill="none" 
      stroke="rgba(255,255,255,0.1)" 
      strokeWidth="2" 
    />
    <path 
      ref={ref}
      d="M 120 150 C 120 225, 280 225, 280 300 C 280 375, 120 375, 120 450 C 120 525, 280 525, 280 600 C 280 675, 120 675, 120 750 C 120 825, 280 825, 280 900 C 280 975, 120 975, 120 1050" 
      fill="none" 
      stroke="#00A755" 
      strokeWidth="2" 
    />
    {[0, 1, 2, 3].map((i) => (
      <circle key={`particle-${i}`} r="5" fill="#00A755" filter="url(#glow-mob)">
        <animateMotion
          dur="14s"
          repeatCount="indefinite"
          begin={`${i * -3.5}s`}
          path="M 120 150 C 120 225, 280 225, 280 300 C 280 375, 120 375, 120 450 C 120 525, 280 525, 280 600 C 280 675, 120 675, 120 750 C 120 825, 280 825, 280 900 C 280 975, 120 975, 120 1050"
        />
      </circle>
    ))}
  </svg>
));
MobileSVG.displayName = "MobileSVG";

export default function HowPlatformWorks() {
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
          end: "+=2000",
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
          end: "+=1800",
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
        <h2 className="text-[#00A755] text-xs lg:text-sm font-semibold tracking-widest uppercase mb-3 text-balance">
          Interactive Architecture Visualization
        </h2>
        <h3 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-balance">
          Integrated Platform Architecture
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
               <div className="relative w-full aspect-square bg-[#101112] border border-white/10 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#ffffff]/60 group-hover:shadow-[0_0_24px_rgba(0,167,85,0.25)] cursor-default">
                 <div className="text-[#00A755] mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300">
                   {node.icon}
                 </div>
                 <p className="text-white text-[12px] xl:text-[13px] font-medium text-center px-2 leading-snug">
                   {node.title}
                 </p>
               </div>

               {/* Hover Card */}
               <div
                 className={cn(
                   "absolute left-1/2 -translate-x-1/2 w-64 bg-[#101112] border border-white/10 p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none",
                   isTop ? "top-full mt-3" : "bottom-full mb-3"
                 )}
               >
                 <h4 className="text-white font-semibold text-[13px] mb-2">{node.title}</h4>
                 <ul className="space-y-1.5">
                   {node.bullets.map((b, idx) => (
                     <li key={idx} className="text-white/60 text-[11px] leading-tight flex items-start gap-2">
                       <span className="w-1 h-1 rounded-full bg-[#00A755] shrink-0 mt-1" />
                       <span>{b}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           );
         })}
      </div>

      {/* Mobile Container */}
      <div className="lg:hidden relative w-full max-w-[400px] h-[1000px] mx-auto mt-28 mb-12">
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
               <div className="relative w-full aspect-square bg-[#101112] border border-white/10 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#00A755]/60 group-hover:shadow-[0_0_24px_rgba(0,167,85,0.25)] cursor-default">
                 <div className="text-[#00A755] mb-2 group-hover:scale-110 transition-transform duration-300">
                   <div style={{ transform: "scale(0.85)" }}>{node.icon}</div>
                 </div>
                 <p className="text-white text-[10px] font-medium text-center px-1 leading-tight">
                   {node.title}
                 </p>
               </div>

               {/* Hover Card (shows below on tap/hover) */}
               <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[200px] bg-[#101112] border border-white/10 p-3 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                 <ul className="space-y-1.5">
                   {node.bullets.map((b, idx) => (
                     <li key={idx} className="text-white/70 text-[10px] leading-tight flex items-start gap-1.5">
                       <span className="w-1 h-1 rounded-full bg-[#00A755] shrink-0 mt-1" />
                       <span>{b}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           );
         })}
      </div>
    </section>
  );
}
