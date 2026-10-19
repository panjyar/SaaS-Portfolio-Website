"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface AboutSectionProps {
  tagline: string;
  heroImage?: string;
  heroVideo?: string;
  // statsRow: StatItem[];
  // statHighlight: { value: string; label: string };
  // statExtra: StatItem;
  headline: string;
  descriptionLeft: string;
  descriptionRight?: string;
  productName: string;
  productSubtitle: string;
  ctaText: string;
  ctaMessage: string;
  ctaHref?: string;
  accentColor?: string;
}

export default function AboutSection({
  tagline,
  heroImage,
  heroVideo,
  // statsRow,
  // statHighlight,
  // statExtra,
  headline,
  descriptionLeft,
  descriptionRight,
  productName,
  productSubtitle,
  ctaText,
  ctaMessage,
  ctaHref = "#",
  accentColor = "#FE9A00",
}: AboutSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className="py-8 px-4" style={{ backgroundColor: "#0a0e17" }} ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header with tagline */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span style={{ color: accentColor }} className="animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium"
                style={{ color: "#94a3b8", fontSize: "40px" }}
              >
                {tagline}
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={1}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group w-full"
            style={{ aspectRatio: "100 / 40" }}
          >
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits="objectBoundingBox"
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                  />
                </clipPath>
              </defs>
            </svg>
            {heroVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", clipPath: "url(#clip-inverted)", WebkitClipPath: "url(#clip-inverted)" }}
                src={heroVideo}
              />
            ) : heroImage ? (
              <img
                src={heroImage}
                style={{ width: "100%", height: "100%", objectFit: "cover", clipPath: "url(#clip-inverted)", WebkitClipPath: "url(#clip-inverted)" }}
                alt="Hero banner"
              />
            ) : null}
          </TimelineContent>

          {/* Stats */}
          {/* <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              {statsRow.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                  <span style={{ color: accentColor }} className="font-bold">{stat.value}</span>
                  <span style={{ color: "#94a3b8" }}>{stat.label}</span>
                  {idx < statsRow.length - 1 && (
                    <span style={{ color: "#334155" }}>|</span>
                  )}
                </div>
              ))}
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span style={{ color: accentColor }} className="font-semibold">{statHighlight.value}</span>
                <span style={{ color: "#94a3b8" }} className="uppercase">{statHighlight.label}</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span style={{ color: accentColor }} className="font-bold">{statExtra.value}</span>
                <span style={{ color: "#94a3b8" }}>{statExtra.label}</span>
                <span className="lg:hidden block" style={{ color: "#334155" }}>|</span>
              </TimelineContent>
            </div>
          </div> */}
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold mb-8" style={{ color: "#f1f5f9" }}>
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 1,
                }}
              >
                {headline}
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify" style={{ color: "#94a3b8" }}>
                  {descriptionLeft}
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify" style={{ color: "#94a3b8" }}>
                  {descriptionRight}
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={8}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-2xl font-bold mb-2"
                style={{ color: accentColor }}
              >
                {productName}
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={9}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm mb-8"
                style={{ color: "#94a3b8" }}
              >
                {productSubtitle}
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="font-medium mb-4" style={{ color: "#f1f5f9" }}>
                  {ctaMessage}
                </p>
              </TimelineContent>

              <TimelineContent
                as="a"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href={ctaHref}
                className="flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-lg cursor-pointer font-semibold"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 10px 30px ${accentColor}40`,
                }}
              >
                {ctaText} <ArrowRight />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
