import dynamic from "next/dynamic";
import AboutHero from "../components/AboutHero";

// Lazy load below-fold sections
const AboutLivnsense = dynamic(() => import("../components/AboutLivnsense"));
const CompanyValues = dynamic(() => import("../components/CompanyValues"));
const OurTeamSection = dynamic(() => import("../components/OurTeamSection"));
const ElegantCarousel = dynamic(() => import("@/components/ui/elegant-carousel"));
const OurApproach = dynamic(() => import("../components/OurApproach"));
const PartnerMarquee = dynamic(() => import("@/components/PartnerMarquee"));

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLivnsense />
      <CompanyValues />
      <OurTeamSection />
      <ElegantCarousel />
      <OurApproach />
      <PartnerMarquee />
    </>
  );
}
