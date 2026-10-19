"use client";

import React from "react";
import { motion } from "framer-motion";

type FlowPath = {
  path: string;
  delay?: number;
  duration?: number;
  baseWidth?: number;
  glowWidth?: number;
  staticOnly?: boolean; // If true, only render static base line (no animated glow)
  dashLength?: number; // Controls glow size: default 18 (18% of path). Use 9 for sequential "two-two" animation
};

const flowPaths: FlowPath[] = [
  // ═══════════════════════════════════════════════
  // CAPTURE → DETECT
  // 5 paths from capture items to Detect panel
  // ═══════════════════════════════════════════════

  // IP Cameras (y≈126) → routes down into Detect panel
  { path: "M232 126 H248 V230 H266", delay: 0, duration: 2 },

  // 5G/4G Cameras (y≈264) → straight into Detect
  { path: "M232 264 H266", delay: 0.4, duration: 1.5 },

  // IMU/Tilt Sensor (y≈401) → straight into Detect
  { path: "M232 401 H266", delay: 0.8, duration: 1.5 },

  // GPS Sensor (y≈470) → straight into Detect
  { path: "M232 470 H266", delay: 1.2, duration: 1.5 },

  // Other Sensors (y≈539) → routes up into Detect panel
  { path: "M232 539 H248 V480 H266", delay: 1.6, duration: 2 },

  // ═══════════════════════════════════════════════
  // DETECT → ANALYZE
  // Extended into both panels for clear visibility
  // ═══════════════════════════════════════════════
  // AI Box (y≈274) to Analyze (y=351)
  { path: "M448 274 H460 V351 H483", delay: 1.0, duration: 1.5 },
  // NVIDIA Box (y≈428) to Analyze (y=351)
  { path: "M448 428 H460 V351 H483", delay: 2.0, duration: 1.5 },

  // ═══════════════════════════════════════════════
  // VERTICAL BUS (Analyze → Integrate)
  // Two directional paths from Analyze circle to bus,
  // one flowing up, one flowing down — "two flow"
  // ═══════════════════════════════════════════════

  // Analyze right edge → bus → top of integrate area
  { path: "M621 351 H628 V78", delay: 2.0, duration: 1.5 },

  // Analyze right edge → bus → bottom of integrate area
  { path: "M621 351 H628 V573", delay: 2.5, duration: 1.5 },

  // ═══════════════════════════════════════════════
  // THROUGH-INTEGRATE FLOWS ("two two" sequential)
  //
  // Each path goes: bus (x=628) → horizontal through
  // integrate panel → trunk (x=844) → vertical to Act → Act item
  //
  // Uses dashLength=9 (small glow, 9% visible) with a
  // long 12.5s cycle. Pairs are staggered by 2.5s so only
  // 2 glow dots are visible at any given moment.
  // ═══════════════════════════════════════════════

  // Pair 1: top + bottom
  // SCADA → Real-time Dashboards
  { path: "M628 78 H644", delay: 0, duration: 1.0 },
  { path: "M826 78 H844 V112 H856", delay: 1.0, duration: 1.5 },
  // REST API → Trend Analysis
  { path: "M628 415 H644", delay: 0, duration: 1.0 },
  { path: "M826 415 H844 V552 H856", delay: 1.0, duration: 1.5 },

  // Pair 2
  // PLC/DCS → Alerts & Notifications
  { path: "M628 137 H644", delay: 1.5, duration: 1.0 },
  { path: "M826 137 H844 V200 H856", delay: 2.5, duration: 1.5 },
  // OPC UA → Reports & Analytics
  { path: "M628 468 H644", delay: 1.5, duration: 1.0 },
  { path: "M826 468 H844 V376 H856", delay: 2.5, duration: 1.5 },

  // Pair 3
  // MES → Incident Management
  { path: "M628 196 H644", delay: 3.0, duration: 1.0 },
  { path: "M826 196 H844 V288 H856", delay: 4.0, duration: 1.5 },
  // MQTT → Audit & Compliance
  { path: "M628 520 H644", delay: 3.0, duration: 1.0 },
  { path: "M826 520 H844 V464 H856", delay: 4.0, duration: 1.5 },

  // Pair 4
  // ERP → Reports & Analytics
  { path: "M628 255 H644", delay: 4.5, duration: 1.0 },
  { path: "M826 255 H844 V376 H856", delay: 5.5, duration: 1.5 },
  // Azure → Trend Analysis
  { path: "M628 573 H644", delay: 4.5, duration: 1.0 },
  { path: "M826 573 H844 V552 H856", delay: 5.5, duration: 1.5 },

  // Solo (pair 5)
  // CMMS → Audit & Compliance
  { path: "M628 314 H644", delay: 6.0, duration: 1.0 },
  { path: "M826 314 H844 V464 H856", delay: 7.0, duration: 1.5 },

  // ═══════════════════════════════════════════════
  // VERTICAL TRUNK (structural, always animated)
  // Provides visual continuity between Integrate & Act
  // ══════════════════════════════════════════════
  { path: "M844 78 V573", delay: 3.0, duration: 3.5, baseWidth: 1.35, glowWidth: 2.4 },
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
            {/* Static base line — always visible */}
            <path
              d={flow.path}
              stroke="rgba(0, 156, 91, 0.22)"
              strokeWidth={flow.baseWidth ?? 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Moving glow line — skip if staticOnly */}
            {!flow.staticOnly && (
              <motion.path
                d={flow.path}
                pathLength={100}
                stroke="#5BFFC1"
                strokeWidth={flow.glowWidth ?? 2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={`${flow.dashLength ?? 18} ${100 - (flow.dashLength ?? 18)}`}
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
            )}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
}