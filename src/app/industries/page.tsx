import React from "react";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { IndustriesCTA } from "@/components/industries/IndustriesCTA";

export const metadata = {
  title: "Industries | LivNSense",
  description:
    "From cement to construction, oil & gas to manufacturing — discover how LivNSense AI solutions transform operations across the world's biggest industries.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#010206] text-white flex flex-col">
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesCTA />
    </main>
  );
}
