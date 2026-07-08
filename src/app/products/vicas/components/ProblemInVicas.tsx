"use client";

import React, { useState, useRef } from "react";
import { vicasProblems } from "../data/vicasProblems";

/**
 * Card positions matching the original design exactly.
 * Positions are calculated relative to an 1100px × 550px container.
 */
const cardPositions = [
  { left: "4%", top: "32%", width: "280px" },  // Limited Visibility
  { left: "30%", top: "5%", width: "280px" },  // Reactive Risk Management
  { left: "62%", top: "12%", width: "280px" },  // Untapped Operational Data
  { left: "38%", top: "58%", width: "280px" },  // Manual Compliance Monitoring
];

function ProblemCard({
  problem,
  index,
}: {
  problem: (typeof vicasProblems)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse follow highlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const showBullets = isHovered;

  return (
    <div
      className="absolute group z-10 hover:z-50"
      style={{
        left: cardPositions[index].left,
        top: cardPositions[index].top,
        animation: `vicasFloat ${3 + index * 0.5}s ease-in-out infinite`,
        animationDelay: `${index * 0.8}s`,
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-[1.25rem] p-5 transition-transform duration-500 ease-out cursor-default vicas-glass-card"
        style={{
          width: cardPositions[index].width,
          transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0)",
        }}
      >
        {/* The mouse-follow glow layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-100"
          style={{
            opacity: isHovered ? 1 : 0,
            background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.08), transparent 40%)",
          }}
        />

        {/* Content layer (relative z-10 so it sits above the background glow) */}
        <div className="relative z-10">
          {/* Red dot indicator + Title */}
          <div className="flex items-center gap-2.5 mb-2">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{
                backgroundColor: "var(--vicas-accent-red)",
                boxShadow: "0 0 8px var(--vicas-accent-red-glow)",
              }}
            />
            <h4
              className="text-sm font-semibold tracking-tight"
              style={{ color: "var(--vicas-text-primary)" }}
            >
              {problem.title}
            </h4>
          </div>

          {/* Description */}
          <p
            className="text-[13px] leading-relaxed mb-0"
            style={{ color: "var(--vicas-text-secondary)" }}
          >
            {problem.description}
          </p>

          {/* Bullet points — hover-expand only */}
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: showBullets ? "200px" : "0px",
              opacity: showBullets ? 1 : 0,
              marginTop: showBullets ? "14px" : "0px",
            }}
          >
            <ul className="space-y-2.5">
              {problem.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-[13px] flex items-center gap-2.5"
                  style={{
                    color: "var(--vicas-text-primary)",
                    transform: showBullets ? "translateX(0)" : "translateX(-10px)",
                    opacity: showBullets ? 1 : 0,
                    transition: `all 0.4s ease-out ${idx * 0.1}s`,
                  }}
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full shrink-0"
                    style={{ backgroundColor: "var(--vicas-text-secondary)" }}
                  />
                  <span className="font-medium tracking-tight">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProblemInVicas() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
    sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <style>{`
        @keyframes vicasFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        /* Figma Glassmorphism Classes */
        .vicas-glass-card {
          background: rgba(255, 255, 255, 0.03); /* Slight transparent white */
          backdrop-filter: blur(40px);          /* Heavy background blur */
          border: 1px solid rgba(255, 255, 255, 0.08); /* Thin glass border */
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),       /* Outer drop shadow */
            inset 4px 4px 41.5px -13px rgba(0, 176, 80, 0.22); /* Inner shadow */
        }

        .vicas-glass-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4), 
            inset 4px 4px 41.5px -13px rgba(0, 176, 80, 0.35); /* Enhance green glow on hover */
        }
      `}</style>

      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden py-16 lg:py-10"
      >
        {/* Glow layer for the entire section */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent 40%)",
            zIndex: 0,
          }}
        />

        {/* Desktop: absolute-positioned cards over grid background */}
        <div
          className="hidden lg:block relative vicas-container"
          style={{
            height: "580px",
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center top",
          }}
        >
          {vicasProblems.map((problem, index) => (
            <ProblemCard key={problem.id} problem={problem} index={index} />
          ))}
        </div>

        {/* Mobile: stacked layout */}
        <div className="lg:hidden flex flex-col items-center gap-6 vicas-container">
          {vicasProblems.map((problem, index) => (
            <div
              key={problem.id}
              className="w-full max-w-[340px]"
              style={{
                animation: `vicasFloat ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.8}s`,
              }}
            >
              <MobileProblemCard problem={problem} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function MobileProblemCard({
  problem,
}: {
  problem: (typeof vicasProblems)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-xl p-5 transition-transform duration-500 ease-out cursor-default vicas-glass-card"
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onTouchStart={(e) => {
        setIsHovered((prev) => !prev);
        handleTouchMove(e);
      }}
      onTouchMove={handleTouchMove}
    >
      {/* Glow layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.08), transparent 40%)",
        }}
      />

      <div className="relative z-10">
        {/* Red dot + Title */}
        <div className="flex items-center gap-2.5 mb-2">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{
              backgroundColor: "var(--vicas-accent-red)",
              boxShadow: "0 0 6px var(--vicas-accent-red-glow)",
            }}
          />
          <h4
            className="text-sm font-semibold tracking-tight"
            style={{ color: "var(--vicas-text-primary)" }}
          >
            {problem.title}
          </h4>
        </div>

        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--vicas-text-secondary)" }}
        >
          {problem.description}
        </p>

        {/* Expand bullets */}
        <div
          className="overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: isHovered ? "160px" : "0px",
            opacity: isHovered ? 1 : 0,
            marginTop: isHovered ? "12px" : "0px",
          }}
        >
          <ul className="space-y-2">
            {problem.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="text-[12px] flex items-center gap-2"
                style={{
                  color: "var(--vicas-text-primary)",
                  transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                  opacity: isHovered ? 1 : 0,
                  transition: `all 0.3s ease-out ${idx * 0.08}s`,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--vicas-text-secondary)" }}
                />
                <span className="font-medium tracking-tight">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
