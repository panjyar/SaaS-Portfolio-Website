"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MetricItem from "./Metrix";
import { vicasMetrics } from "../data/vicasMetrics";

gsap.registerPlugin(ScrollTrigger);

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".metric-card", {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="vicas-container pt-16 md:pt-24 pb-8 md:pb-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {vicasMetrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <MetricItem {...metric} />
          </div>
        ))}
      </div>
    </section>
  );
}