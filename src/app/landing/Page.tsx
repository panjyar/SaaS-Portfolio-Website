"use client";

import dynamic from "next/dynamic";
import Landinghero from "./components/Landinghero";
import PartnerMarquee from "@/components/PartnerMarquee";

// Lazy load below-fold sections
const ProductSection = dynamic(() => import("./components/ProductSection"));
const WhatWeSolve = dynamic(() => import("./components/WhatWeSolve"));
const VehicleDetectionSection = dynamic(() => import("./components/VehicleDetectionSection"));
const HowPlatformWorks = dynamic(() => import("./components/HowPlatformWorks"));
const TestimonialCarousel = dynamic(() => import("./components/TestimonialSection"));
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Landing() {
  return (
    <>
    <Landinghero />
      <PartnerMarquee />
      <ProductSection />
      <WhatWeSolve />
      <VehicleDetectionSection />
      <HowPlatformWorks />
      <TestimonialCarousel />
      <Map />
    </>
  );
}
