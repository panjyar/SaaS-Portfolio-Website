"use client";

import React from "react";
import { motion } from "framer-motion";

type FlowPath = {
  path: string;
  delay?: number;
  duration?: number;
  baseWidth?: number;
  glowWidth?: number;
};

const flowPaths: FlowPath[] = [
  /**
   * CAPTURE -> DETECT
   * Individual item flow.
   * Mostly straight, L-shape where the item is above/below Detect.
   */

  // IP Cameras -> Detect
  {
    path: "M240 150 H248 V235 H258",
    delay: 0,
    duration: 2.2,
  },

  // 5G/4G Cameras -> Detect
  {
    path: "M240 272 H258",
    delay: 0.2,
    duration: 2,
  },

  // IMU/Tilt Sensor -> Detect
  {
    path: "M240 410 H258",
    delay: 0.4,
    duration: 2,
  },

  // GPS Sensor -> Detect
  {
    path: "M240 482 H258",
    delay: 0.6,
    duration: 2,
  },

  // Other Industrial Sensors -> Detect
  {
    path: "M240 560 H248 V465 H258",
    delay: 0.8,
    duration: 2.2,
  },

  /**
   * DETECT -> ANALYZE
   * Straight center flow.
   */
  {
    path: "M456 351 H475",
    delay: 1,
    duration: 2.2,
  },

  /**
   * ANALYZE -> INTEGRATE
   * Analyze splits into top and bottom integration panels.
   */

  // Analyze -> Integrate top
  {
    path: "M621 351 H628 V196 H636",
    delay: 1.2,
    duration: 2.6,
  },

  // Analyze -> Integrate bottom
  {
    path: "M621 351 H628 V494 H636",
    delay: 1.5,
    duration: 2.6,
  },

  /**
   * INTEGRATE -> ACT
   * One vertical trunk with branches.
   */

  // Top integration panel -> trunk
  {
    path: "M834 196 H844",
    delay: 1.8,
    duration: 2,
  },

  // Bottom integration panel -> trunk
  {
    path: "M834 494 H844",
    delay: 2,
    duration: 2,
  },

  // Main vertical trunk
  {
    path: "M844 112 V552",
    delay: 2.2,
    duration: 3,
    baseWidth: 1.35,
    glowWidth: 2.4,
  },

  // Trunk -> Act items
  {
    path: "M844 112 H852",
    delay: 2.4,
    duration: 1.8,
  },
  {
    path: "M844 200 H852",
    delay: 2.6,
    duration: 1.8,
  },
  {
    path: "M844 288 H852",
    delay: 2.8,
    duration: 1.8,
  },
  {
    path: "M844 376 H852",
    delay: 3,
    duration: 1.8,
  },
  {
    path: "M844 464 H852",
    delay: 3.2,
    duration: 1.8,
  },
  {
    path: "M844 552 H852",
    delay: 3.4,
    duration: 1.8,
  },
];

type AirFlowEffectProps = {
  className?: string;
};

export default function AirFlowEffect({ className = "" }: AirFlowEffectProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-[1] ${className}`}>
      <svg
        viewBox="0 0 1128 620"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="air-flow-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {flowPaths.map((flow, index) => (
          <React.Fragment key={index}>
            {/* Static base line */}
            <path
              d={flow.path}
              stroke="rgba(0, 156, 91, 0.22)"
              strokeWidth={flow.baseWidth ?? 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Moving glow line */}
            <motion.path
              d={flow.path}
              pathLength={100}
              stroke="#5BFFC1"
              strokeWidth={flow.glowWidth ?? 2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="18 82"
              filter="url(#air-flow-glow)"
              initial={{
                strokeDashoffset: 0,
              }}
              animate={{
                strokeDashoffset: -100,
              }}
              transition={{
                duration: flow.duration ?? 2.2,
                repeat: Infinity,
                ease: "linear",
                delay: flow.delay ?? 0,
              }}
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
}