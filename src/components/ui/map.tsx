"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  animationDuration?: number;
  loop?: boolean;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  showLabels = true,
  animationDuration = 2,
  loop = true,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: "#FFFFFF40", // Force dark mode colors
        shape: "circle",
        backgroundColor: "transparent",
      }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // ── Deduplicate all unique locations for rendering dots/labels once ──
  const uniqueLocations = useMemo(() => {
    const seen = new Map<string, { lat: number; lng: number; label?: string }>();
    dots.forEach((dot) => {
      const sk = `${dot.start.lat},${dot.start.lng}`;
      const ek = `${dot.end.lat},${dot.end.lng}`;
      if (!seen.has(sk)) seen.set(sk, dot.start);
      if (!seen.has(ek)) seen.set(ek, dot.end);
    });
    return Array.from(seen.values());
  }, [dots]);

  const staggerDelay = 0.4;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;

  // Clamp label x so it never goes off-canvas (SVG viewBox 0–800)
  const clampLabelX = (x: number) => Math.min(Math.max(x - 50, 2), 698);
  // Flip label below the dot if it's near the top edge
  const labelY = (y: number) => (y < 40 ? y + 10 : y - 35);

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-transparent rounded-lg relative font-sans overflow-hidden">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        priority
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Animated paths + travelling dot (pure SVG, no offsetPath) ── */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const pathD = createCurvedPath(startPoint, endPoint);

          const startTime = (i * staggerDelay) / fullCycleDuration;
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
          const resetTime = totalAnimationTime / fullCycleDuration;

          return (
            <g key={`path-group-${i}`}>
              {/* Glowing arc */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={
                  loop
                    ? { pathLength: [0, 0, 1, 1, 0] }
                    : { pathLength: 1 }
                }
                transition={
                  loop
                    ? {
                        duration: fullCycleDuration,
                        times: [0, startTime, endTime, resetTime, 1],
                        ease: "easeInOut",
                        repeat: Infinity,
                      }
                    : {
                        duration: animationDuration,
                        delay: i * staggerDelay,
                        ease: "easeInOut",
                      }
                }
              />

              {/* Travelling dot — uses animateMotion (pure SVG, universal support) */}
              {loop && (
                <circle r="3.5" fill={lineColor} filter="url(#glow)">
                  <animateMotion
                    dur={`${fullCycleDuration}s`}
                    begin={`${i * staggerDelay}s`}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1"
                    keyTimes="0;0.01;0.99;1"
                    path={pathD}
                  >
                    <mpath href={`#path-${i}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.05;0.95;1"
                    dur={`${animationDuration}s`}
                    begin={`${i * staggerDelay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Hidden path for mpath reference */}
              <path id={`path-${i}`} d={pathD} fill="none" stroke="none" />
            </g>
          );
        })}

        {/* ── Deduplicated location dots + labels ── */}
        {uniqueLocations.map((loc, i) => {
          const pt = projectPoint(loc.lat, loc.lng);
          return (
            <g key={`loc-${i}`}>
              {/* Hover target */}
              <motion.g
                onHoverStart={() => setHoveredLocation(loc.label || "")}
                onHoverEnd={() => setHoveredLocation(null)}
                className="cursor-pointer"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Solid dot */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="3"
                  fill={lineColor}
                  filter="url(#glow)"
                />

                {/* Single pulsing ring per location */}
                <circle cx={pt.x} cy={pt.y} r="3" fill={lineColor} opacity="0.5">
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="2.5s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2.5s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </motion.g>

              {/* Label — rendered once per unique location, edge-safe */}
              {showLabels && loc.label && (
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i + 0.3, duration: 0.4 }}
                  className="pointer-events-none"
                >
                  <foreignObject
                    x={clampLabelX(pt.x)}
                    y={labelY(pt.y)}
                    width="100"
                    height="28"
                  >
                    <div
                      // @ts-expect-error — xmlns required for foreignObject HTML
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "2px 6px",
                          borderRadius: "5px",
                          background: "#0a0a0a",
                          color: "#fff",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.5)",
                          whiteSpace: "nowrap",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {loc.label}
                      </span>
                    </div>
                  </foreignObject>
                </motion.g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Mobile hover tooltip */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-white/10"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}