"use client";

import VicasHero from "./components/VicasHero";
import MetricsSection from "./components/MetricsSection";
import VicasExits from "./components/WhyVicasExists";
import ProblemInVicas from "./components/ProblemInVicas";
import VisualRisk from "./components/VisualRisk";
import FeatureStack from "./components/FeatureStack";

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
        {/* Master container for all sections below hero, with curved top and gradient */}
        <div
          className="rounded-t-[100px] relative flex flex-col"
          style={{ backgroundColor: "var(--vicas-page-bg)" }}
        >
          {/* Subtle gradient overlay at the top — does NOT affect content opacity */}
          <div
            className="absolute top-0 left-0 right-0 h-[400px] pointer-events-none rounded-t-[100px]"
            style={{
              background: "linear-gradient(90deg, rgba(42, 42, 42, 1) 0%, rgba(8, 11, 13, 1) 100%)",
              opacity: 0.6,
            }}
          />

          {/* Metrics Section */}
          <div className="relative z-10 pt-8">
            <div
              className="mx-auto h-1 w-[200px] rounded-full mb-8"
              style={{ backgroundColor: "var(--vicas-metrics-divider)" }}
            />
            <MetricsSection />
          </div>

          {/* Other sections — they should not have background colors that cover the master container */}
          <VicasExits />
          <ProblemInVicas />
          <VisualRisk />
          <FeatureStack />
        </div>
      </div>
    </>
  );
}
