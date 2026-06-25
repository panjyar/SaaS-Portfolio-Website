"use client"

import VicasHero from "./components/VicasHero";
import ImageSlider from "./components/image-slider";
import MetricItem from "./components/Metrix"
import VicasExits from "./components/whyVicasExists"
import ProblemInVicas from "./components/ProblemInVicas"
import VisualRisk from "./components/VisualRisk"
export default function VicasLanding(){
  return(
  <>
  <VicasHero/>
  <div className="pt-16 md:pt-24 pb-8 md:pb-12 ">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-900">
      <MetricItem
        target={95}
        suffix="%+"
        label="Detection Accuracy"
      />

            <MetricItem
              target={50000}
              suffix="+"
              label="Safety Events Detected"
              // type="up"
            />

            <MetricItem
              target={5}
              suffix="B+"
              label="Video Frames Analyzed"
              // type="up"
            />

            <MetricItem
        target={24}
        suffix="×7"
        label="Real-Time Monitoring"
      />
    </div>

    <VicasExits/>
    <ProblemInVicas/>
    <VisualRisk/>
    </div>
    
  {/* <ImageSlider/> */}
  </>
  )
}