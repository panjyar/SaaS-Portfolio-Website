"use client";

import VicasHero from "./components/VicasHero";
import MetricsSection from "./components/MetricsSection";
import VicasExists from "./components/WhyVicasExists";
import ProblemInVicas from "./components/ProblemInVicas";
import VisualRisk from "./components/VisualRisk";
import FeatureStack from "./components/FeatureStack";
import MultiEnvironment from "./components/MultiEnviroment";
import ProvenImpact from "./components/ProvenImpact";
import RiskIntelligenceCTA from "./components/RiskIntelligenceCTA";
import VicasAIArchitectureDiagram from "./components/VicasAIArchitectureDiagram";

export default function VicasLanding() {
  return (
    <>
      {/* Hero stays sticky so content scrolls OVER it like a shutter */}
      <div
        className="sticky top-0 z-0"
        style={{ height: "100vh" }}
      >
        <VicasHero />
      </div>

      {/* Everything below scrolls over the hero */}
      <div className="relative z-20">
        {/* Master container for all sections below hero, with curved top */}
        <div
          className="rounded-t-[100px] relative flex flex-col"
          style={{ backgroundColor: "var(--vicas-page-bg)" }}
        >
          {/*
            ============================================================
            SINGLE PAGE-LEVEL BACKGROUND LAYER
            All gradients are defined here as one continuous composition.
            No individual section should have its own background gradient.
            ============================================================
          */}
          <div
            className="absolute inset-0 pointer-events-none rounded-t-[100px] overflow-hidden"
            style={{ zIndex: 0 }}
          >
            {/* 
              ZONE 1 — Top transition (rounded top edge)
              A subtle horizontal gradient matching the curved top edge
            */}
            <div
              className="absolute top-0 left-0 right-0 rounded-t-[100px]"
              style={{
                height: "400px",
                background: "linear-gradient(90deg, rgba(42, 42, 42, 1) 0%, rgba(8, 11, 13, 1) 100%)",
                opacity: 0.6,
              }}
            />

            {/* 
              ZONE 2 — Metrics → Why VICAS Exists green glow
              A large soft radial gradient that starts subtly at the Metrics section
              and peaks through the Why VICAS Exists section, then fades out.
              Positioned at ~600px from top (where Metrics is) spreading down.
            */}
            <div
              className="absolute"
              style={{
                top: "100px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "140%",
                height: "1200px",
                background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0, 120, 60, 0.08), transparent 70%)",
              }}
            />

            {/* Subtle secondary glow — slightly offset for organic feel */}
            <div
              className="absolute"
              style={{
                top: "250px",
                left: "30%",
                transform: "translateX(-50%)",
                width: "100%",
                height: "900px",
                background: "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(0, 100, 50, 0.06), transparent 65%)",
              }}
            />

            {/* 
              ZONE 3 — Risk Intelligence CTA green glow
              Re-appears near the bottom of the page around the CTA section.
              This uses the same color/opacity/spread as Zone 2 for visual consistency.
            */}
            <div
              className="absolute"
              style={{
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "140%",
                height: "1100px",
                background: "radial-gradient(ellipse 70% 50% at 50% 65%, rgba(0, 120, 60, 0.08), transparent 70%)",
              }}
            />

            {/* Subtle secondary glow near CTA — offset for depth */}
            <div
              className="absolute"
              style={{
                bottom: "100px",
                left: "60%",
                transform: "translateX(-50%)",
                width: "100%",
                height: "800px",
                background: "radial-gradient(ellipse 55% 40% at 50% 50%, rgba(0, 100, 50, 0.05), transparent 60%)",
              }}
            />
          </div>

          {/* Metrics Section */}
          <div className="relative z-10 pt-8">
            <div
              className="mx-auto h-1 w-[200px] rounded-full mb-8"
              style={{ backgroundColor: "var(--vicas-metrics-divider)" }}
            />
            <MetricsSection />
          </div>

          {/* All sections below — no individual background gradients */}
          <VicasExists />
          <ProblemInVicas />
          <VisualRisk />
          <FeatureStack />
          <VicasAIArchitectureDiagram/>
          <MultiEnvironment />
          <ProvenImpact />
          <RiskIntelligenceCTA />
        </div>
      </div>
    </>
  );
}
