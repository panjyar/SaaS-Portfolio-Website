import React from "react";
import HeroBackgroundGrid from "./HeroBackgroundGrid";
import { Leaf, Eye, Hash, Shield, BookOpen } from "lucide-react";
import Link from "next/link";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#010206] text-white pt-24 pb-20 overflow-hidden" aria-label="About LivNSense and products overview">
      <HeroBackgroundGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Top Section */}
        {/* <div className="max-w-4xl mb-32">
          <div className="inline-block px-3 py-1 mb-8 text-xs font-semibold tracking-wider text-[#00A755] uppercase border border-[#00A755]/30 rounded-sm bg-[#00A755]/10">
            About LivNSense
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Building the AI intelligence layer for industrial operations.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
            LivNSense is a B2B climate-tech company enabling heavy industries to operate safer, more efficiently, and with lower emissions.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-200 border border-white/20 hover:bg-white hover:text-black rounded-sm">
            Book a Demo
          </Link>
        </div> */}

        {/* Feature Cards Grid (Carbon Re inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
          {/* Card 1 */}
          <div className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-white/10 transition-colors group">
            <BookOpen className="w-8 h-8 text-[#00A755] opacity-80 mb-8 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-semibold mb-6">The Inspiration</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We started LivNSense to solve two of the world’s hardest problems, protecting human lives and decarbonizing industry, and realized that the answer to both is intelligence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-white/10 transition-colors group">
            <Leaf className="w-8 h-8 text-[#00A755] opacity-80 mb-8 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-semibold mb-6">GreenOps™</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              An AI-driven deep decarbonization platform that optimizes industrial energy balance and process efficiency using digital twins.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-white/10 transition-colors group">
            <Eye className="w-8 h-8 text-[#00A755] opacity-80 mb-8 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-semibold mb-6">VICAS™</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              An AI vision platform that enables real-time safety intelligence by detecting worker–machine risks and near-miss incidents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 4 */}
          <div className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
            <Hash className="w-8 h-8 text-[#00A755] opacity-80 mb-8 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-semibold mb-6">Why LivNSense? </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base md:pr-8">
              Most industrial systems today still only monitor operations — they don’t make industry intelligent. If Palantir Technologies created the intelligence layer for enterprise data, LivNSense is building the AI brain for industry.
            </p>
            <div className="mt-12">
              <Link href="/technology" className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#00A755] transition-colors inline-flex items-center">
                Our Technology <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-white/10 transition-colors group">
            <Shield className="w-8 h-8 text-[#00A755] opacity-80 mb-8 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-semibold mb-6">The Vision</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base md:pr-8">
              Our mission is to improve the safety and well-being of 100 million people by the end of this decade through transformative technology solutions powered by LivNSense.
            </p>
            <div className="mt-12">
              <Link href="/company/vision" className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#00A755] transition-colors inline-flex items-center">
                Discover More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
