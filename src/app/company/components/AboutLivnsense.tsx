import React from 'react';

const AboutLivnsense = () => {
  return (
    <section className="relative bg-[#010206] text-white overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {/* Hello, we&apos;re */}
               <span className="text-[#FE9A00]">LivNSense</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
              We&apos;re building the AI brain for industry
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
              LivNSense is a industrial AI company enabling heavy industries to operate safer, more efficiently, and with lower emissions. By combining Artificial Intelligence, Digital Twins, Industrial IoT, and Vision Intelligence, it transforms fragmented industrial data into real-time operational intelligence creating a unified intelligence layer that drives safer, autonomous, and net-zero operations.
            </p>
            {/* <h1 className="pt-4">Together, they create a unified intelligence layer that helps industries transition toward safe, autonomous, and net-zero operations.</h1> */}
          </div>

          {/* Right Graphics (Intersecting Circles) */}
          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center z-10">
            {/* Circle 1: Nodes */}
            <div className="absolute left-0 w-64 h-64 rounded-full border border-[#FE9A00] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen">
              <div className="w-full h-full relative">
                {/* Decorative vertical lines with dots */}
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#FE9A00]/40" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FE9A00]/40" />
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#FE9A00]/40" />
                <div className="absolute left-1/4 top-[20%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
                <div className="absolute left-1/2 top-[40%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
                <div className="absolute left-3/4 top-[60%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
                <div className="absolute left-1/4 top-[80%] w-3 h-3 rounded-full bg-[#FE9A00] -ml-1.5" />
              </div>
            </div>

            {/* Circle 2: Industrial Background */}
            <div className="absolute left-32 z-10 w-72 h-72 rounded-full border border-[#FE9A00] flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(254, 154, 0,0.2)]">
              <div className="w-full h-full bg-gradient-to-tr from-[#FE9A00]/20 to-transparent relative">
                {/* Simulated industrial image effect */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
                <div className="absolute inset-0 bg-[#FE9A00] mix-blend-color opacity-20" />
              </div>
            </div>

            {/* Circle 3: Concentric Arcs */}
            <div className="absolute left-72 w-64 h-64 rounded-full border border-[#FE9A00] opacity-80 flex items-center justify-center overflow-hidden mix-blend-screen">
              <div className="w-full h-full relative flex items-center">
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-90" />
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-75" />
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-50" />
                <div className="absolute w-full h-full border border-[#FE9A00] rounded-full scale-25" />
                {/* Vertical blocker to make them look like arcs on the left side of the circle */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#010206]" />
                <div className="absolute right-1/2 top-0 bottom-0 w-px bg-[#FE9A00]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom "About Us" blurred section */}
      <div className="w-full mt-32 relative py-24 overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/career5.jpg"
          alt="about us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay (IMPORTANT for readability) */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Motion blur / effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-gradient-to-r from-transparent via-[#FE9A00]/10 to-transparent blur-3xl -skew-y-3" />
          <div className="absolute inset-x-0 top-0 border-t border-white/5" />
          <div className="absolute inset-x-0 bottom-0 border-b border-white/5" />
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base text-gray-300 font-light">

          <div>
            <h3 className="text-3xl font-semibold text-white mb-6">About Us</h3>
            <p className="mb-6 leading-relaxed">
              LivNSense is a global Industrial AI company headquartered in Bengaluru, India, and incorporated as a Delaware C-Corp in the United States. The company develops advanced AI, Vision AI, and Digital Twin platforms to help industrial enterprises improve safety, sustainability, and operational efficiency.
            </p>
          </div>

          <div className="space-y-6 pt-1 md:pt-14">
            <p className="leading-relaxed">
Its proprietary platforms, YatraGen and Darshan AI and DarshanAI, deliver real-time intelligence, predictive insights, and optimization across manufacturing, oil & gas, mining, construction, logistics, and infrastructure, enabling customers worldwide to achieve measurable improvements in performance, reliability, and decarbonization.
 
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutLivnsense;
