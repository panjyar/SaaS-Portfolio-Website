import React from 'react';

const AboutLivnsense = () => {
  return (
    <section className="relative bg-[#010206] text-white overflow-hidden py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Hello, we&apos;re <span className="text-[#00A755]">LivNSense.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
              We&apos;re a company on a mission to accelerate the industrial intelligence journey to a modern AI-driven, sustainable industrial future.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
              LivNSense is a trusted global leader in advanced industrial AI, digital twin insights, and enterprise monitoring software, empowering heavy industries to unlock the full value of their fragmented data. 
              Founded with the vision to save human lives and the planet, LivNSense partners with companies across manufacturing, chemicals, and energy to accelerate digital transformation. 
              As a recognized provider of AI-driven Industrial platforms, LivNSense enables operators, engineers, and executives to collaborate in real-time, improve operational efficiency, drive innovation, and achieve measurable business outcomes for a more sustainable future.
            </p>
          </div>

          {/* Right Graphics (Intersecting Circles) */}
          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center z-10">
            {/* Circle 1: Nodes */}
            <div className="absolute left-0 w-64 h-64 rounded-full border border-[#00A755] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen">
               <div className="w-full h-full relative">
                 {/* Decorative vertical lines with dots */}
                 <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#00A755]/40" />
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#00A755]/40" />
                 <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#00A755]/40" />
                 <div className="absolute left-1/4 top-[20%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
                 <div className="absolute left-1/2 top-[40%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
                 <div className="absolute left-3/4 top-[60%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
                 <div className="absolute left-1/4 top-[80%] w-3 h-3 rounded-full bg-[#00A755] -ml-1.5" />
               </div>
            </div>

            {/* Circle 2: Industrial Background */}
            <div className="absolute left-32 z-10 w-72 h-72 rounded-full border border-[#00A755] flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,167,85,0.2)]">
               <div className="w-full h-full bg-gradient-to-tr from-[#00A755]/20 to-transparent relative">
                 {/* Simulated industrial image effect */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-60 grayscale" />
                 <div className="absolute inset-0 bg-[#00A755] mix-blend-color opacity-20" />
               </div>
            </div>

            {/* Circle 3: Concentric Arcs */}
            <div className="absolute left-72 w-64 h-64 rounded-full border border-[#00A755] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen">
               <div className="w-full h-full relative flex items-center">
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-90" />
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-75" />
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-50" />
                 <div className="absolute w-full h-full border border-[#00A755] rounded-full scale-25" />
                 {/* Vertical blocker to make them look like arcs on the left side of the circle */}
                 <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#010206]" />
                 <div className="absolute right-1/2 top-0 bottom-0 w-px bg-[#00A755]" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom "About Us" blurred section */}
      <div className="w-full mt-32 relative py-24">
        {/* Motion blur background simulation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-gradient-to-r from-transparent via-[#00A755]/10 to-transparent blur-3xl transform -skew-y-3" />
          <div className="absolute inset-x-0 top-0 border-t border-white/5" />
          <div className="absolute inset-x-0 bottom-0 border-b border-white/5" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base text-gray-300 font-light">
          <div>
            <h3 className="text-3xl font-semibold text-white mb-6">About Us</h3>
            <p className="mb-6 leading-relaxed">
              LivNSense is a global leader in advanced industrial analytics, AI, and enterprise monitoring. We&apos;re transforming the way companies do business by harnessing the power of unused data to generate faster insights and better business outcomes.
            </p>
          </div>
          <div className="space-y-6 pt-1 md:pt-14">
            <p className="leading-relaxed">
              LivNSense is a dynamic company with employees dedicated across the United States, India, and other global hubs.
            </p>
            <p className="leading-relaxed">
              Recognized for our customer-centric approach, we provide deep industry expertise, expert support, and a collaborative ecosystem that ensures long-term success. By combining AI innovation with industrial trust, LivNSense continues to advance the future of digital transformation and sustainable operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLivnsense;
