"use client";

import React, { useRef } from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Cloud,
  AlertTriangle,
  Thermometer,
  ShieldAlert,
  TrendingDown,
  AlertOctagon,
  Wind,
  Droplets,
  Zap,
  ClipboardCheck,
  Users,
  Wrench,
  Clock,
  Package,
  Leaf,
  Car,
  Activity,
  X,
  ShieldCheck,
  ArrowDown,
  Truck,
} from "lucide-react";
import { getIndustryBySlug, industries } from "@/utils/industries-data";
import type { Industry, IndustryChallenge, IndustrySolution } from "@/utils/industries-data";

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  Thermometer: <Thermometer className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  TrendingDown: <TrendingDown className="w-5 h-5" />,
  AlertOctagon: <AlertOctagon className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Beaker: <Flame className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Package: <Package className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  X: <X className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  ArrowDown: <ArrowDown className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
};

// ─── Hero Section ─────────────────────────────────────
function IndustryHero({ industry }: { industry: Industry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] w-full items-end overflow-hidden"
    >
      {/* Background */}
      <Image
        src={industry.heroImage}
        alt={industry.name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#010206] via-[#010206]/60 to-[#010206]/30" />

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid w-full grid-cols-12 divide-x divide-white/[0.04] h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-white/50">
            <Link
              href="/industries"
              className="hover:text-[#FE9A00] transition-colors"
            >
              Industries
            </Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white/80">{industry.name}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            {industry.name}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light">
            {industry.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Description Section ─────────────────────────────
function IndustryDescription({ industry }: { industry: Industry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#010206]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-[#FE9A00]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE9A00]">
              Overview
            </span>
          </div>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl">
            {industry.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Challenges Section ──────────────────────────────
function IndustryChallenges({
  challenges,
}: {
  challenges: IndustryChallenge[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#060810] relative overflow-hidden"
    >
      {/* Separator */}
      <div className="absolute top-0 inset-x-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#FE9A00]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE9A00]">
              Industry Challenges
            </span>
            <div className="w-8 h-[2px] bg-[#FE9A00]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Key Challenges
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl border border-white/[0.06] bg-[#0a0f14] p-8 overflow-hidden hover:border-[#FE9A00]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE9A00]/0 group-hover:bg-[#FE9A00]/5 blur-3xl rounded-full transition-all duration-700" />

              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FE9A00]/10 border border-[#FE9A00]/20 text-[#FE9A00] mb-6">
                  {iconMap[challenge.icon] || (
                    <AlertTriangle className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {challenge.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Solutions Section ───────────────────────────────
function IndustrySolutions({
  solutions,
}: {
  solutions: IndustrySolution[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#010206] relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#FE9A00]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE9A00]">
              Our Solutions
            </span>
            <div className="w-8 h-[2px] bg-[#FE9A00]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-5">
            How LivNSense
            <br />
            <span className="text-white/30">Transforms This Industry</span>
          </h2>
        </motion.div>

        {/* Alternating solution rows */}
        <div className="flex flex-col gap-20 md:gap-32">
          {solutions.map((solution, idx) => (
            <SolutionRow key={idx} solution={solution} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionRow({
  solution,
  index,
}: {
  solution: IndustrySolution;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;

  return (
    <div ref={ref}>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
      >
        {/* Text */}
        <motion.div
          className={`flex flex-col ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#FE9A00]/30 text-sm font-bold text-[#FE9A00] bg-[#FE9A00]/10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight mb-4">
            {solution.title}
          </h3>

          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            {solution.description}
          </p>

          <ul className="space-y-3 mb-6">
            {solution.keyPoints.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm md:text-base text-white/70"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FE9A00] shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          className={`relative ${isReversed ? "lg:order-1" : "lg:order-2"}`}
          initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden group aspect-[16/10]">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010206]/60 via-transparent to-[#010206]/20 pointer-events-none" />

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: `inset 0 0 0 1px rgba(254, 154, 0,0.2), 0 0 30px rgba(254, 154, 0,0.08)`,
              }}
            />
          </div>

          {/* Decorative glow */}
          <div
            className="absolute -z-10 w-32 h-32 rounded-full bg-[#FE9A00] blur-[80px] opacity-15"
            style={{
              top: isReversed ? "auto" : "-20px",
              bottom: isReversed ? "-20px" : "auto",
              right: isReversed ? "auto" : "-20px",
              left: isReversed ? "-20px" : "auto",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Stats Section ───────────────────────────────────
function IndustryStats({ industry }: { industry: Industry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-[#FE9A00]/5 backdrop-blur-sm border-y border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industry.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 md:p-6"
            >
              <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-3 tracking-tighter">
                {stat.value}
              </h4>
              <p className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Products Section ────────────────────────────────
function IndustryProducts({ industry }: { industry: Industry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#060810]">
      <div className="absolute top-0 inset-x-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
            Powered by LivNSense Platforms
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Explore the platforms driving transformation in {industry.name}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {industry.products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={product.href}
                className="group block rounded-2xl border border-white/[0.06] bg-[#0a0f14] p-8 hover:border-[#FE9A00]/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#FE9A00]">
                    {product.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#FE9A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {product.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industry CTA ────────────────────────────────────
function IndustryCTA({ name }: { name: string }) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #FE9A00 1px, transparent 1px), linear-gradient(to bottom, #FE9A00 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Ready to Transform Your {name} Operations?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
        >
          Talk to our experts and discover how LivNSense can drive measurable
          impact for your operations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/company/contact"
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-[#FE9A00] text-white font-bold text-lg hover:bg-[#E68A00] transition-all duration-300 shadow-[0_0_20px_rgba(254, 154, 0,0.3)] hover:shadow-[0_0_30px_rgba(254, 154, 0,0.5)]"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/industries"
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Explore Other Industries
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Related Industries ──────────────────────────────
function RelatedIndustries({ currentSlug }: { currentSlug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const related = industries
    .filter((ind) => ind.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#010206]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Explore Other Industries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group relative block rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.06] hover:border-[#FE9A00]/30 transition-all duration-500"
              >
                <Image
                  src={industry.cardImage}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-all duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {industry.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#FE9A00] transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page Component ──────────────────────────────────
export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#010206] text-white">
      <IndustryHero industry={industry} />
      <IndustryDescription industry={industry} />
      <IndustryChallenges challenges={industry.challenges} />
      <IndustrySolutions solutions={industry.solutions} />
      <IndustryStats industry={industry} />
      <IndustryProducts industry={industry} />
      <IndustryCTA name={industry.name} />
      <RelatedIndustries currentSlug={slug} />
    </main>
  );
}
