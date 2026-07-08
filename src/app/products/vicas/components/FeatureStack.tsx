"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

      cards.forEach((card, index) => {
        const scale = 1 - (cards.length - index) * 0.04;

        gsap.to(card, {
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative max-w-[1340px] mx-auto flex flex-col items-center"
    >
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className="stack-card sticky top-14 mb-14"
          style={{
            zIndex: index + 1,
            padding: "5rem 5rem",
          }}
        >
          <FeatureCard {...feature} />
        </div>
      ))}
    </section>
  );
}