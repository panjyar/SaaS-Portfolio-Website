import dynamic from "next/dynamic";
import AboutHero from "../components/AboutHero";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

// Lazy load below-fold sections
const AboutLivnsense = dynamic(() => import("../components/AboutLivnsense"));
const CompanyValues = dynamic(() => import("../components/CompanyValues"));
const OurTeamSection = dynamic(() => import("../components/OurTeamSection"));
const ElegantCarousel = dynamic(() => import("@/components/ui/elegant-carousel"));
const OurApproach = dynamic(() => import("../components/OurApproach"));
// const PartnerMarquee = dynamic(() => import("@/components/PartnerMarquee"));

export default function AboutPage() {
  return (
    <>
      <AboutLivnsense />
      <AboutHero />
      <CompanyValues />
      <div id="leadership"></div><OurTeamSection />
      <ElegantCarousel />
      <OurApproach />
      {/* <PartnerMarquee /> */}
      <div>
        <h3 className="text-center text-lg font-medium tracking-tight md:text-2xl mb-6" style={{ color: "#b8b8b8" }}>
          Companies we{" "}
          <span className="font-semibold" style={{ color: "#00A755" }}>
            collaborate
          </span>{" "}
          with.
        </h3>
        <img src="/partners/allpartners.png" alt="" className="w-[80%] mx-auto object-cover" />
      </div>
      <div id="contact"> </div><SolutionsCTA />
    </>
  );
}
