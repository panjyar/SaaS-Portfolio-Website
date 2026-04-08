import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Avnish Kumar",
    role: "Co-Founder & Chairman",
    description: "Visionary leader driving the strategic direction of LivNSense.",
    // Using an abstract placeholder since actual images aren't provided
    image: "https://vicasinfo.livnsense.com/media/Avnish.png",
    clipId: "clip-another1"
  },
  {
    name: "Priyanka Kumar",
    role: "Co-Founder & COO",
    description: "Focuses on operational excellence and scaling product delivery.",
    image: "https://vicasinfo.livnsense.com/media/team/PriyankaKumar-1.jpg",
    clipId: "clip-another2"
  },
  {
    name: "Amith Singh",
    role: "Chief Business Officer US",
    description: "Leading market expansion and enterprise sales in the Chicago hub.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    clipId: "clip-another3"
  },
  { 
    name: "Rajaram Kamat",
    role: "Director – R&D and Engineering",
    description: "Heading advanced engineering and product innovation in Bangalore.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    clipId: "clip-another1"
  }
];

const OurTeamSection = () => {
  return (
    <>
      {/* SVG definitions for the custom clip paths */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-another1" clipPathUnits="objectBoundingBox">
            <path
              d="M0 0.0417599C0 0.0186966 0.0250721 0 0.056 0H0.6105C0.641428 0 0.6665 0.0186965 0.6665 0.0417599V0.148024C0.6665 0.171087 0.691572 0.189784 0.7225 0.189784H0.944C0.974928 0.189784 1 0.20848 1 0.231544V0.95824C1 0.981303 0.974928 1 0.944 1H0.056C0.0250721 1 0 0.981303 0 0.95824V0.0417599Z"
              fill="#D9D9D9"
            />
          </clipPath>
          <clipPath id="clip-another2" clipPathUnits="objectBoundingBox">
            <path
              d="M0.1145 0.139138L0.235656 0.0147291C0.244771 0.0053695 0.257945 0 0.271794 0H0.5H0.96C0.982091 0 1 0.016076 1 0.0359066V0.964093C1 0.983924 0.982091 1 0.96 1H0.04C0.0179086 1 0 0.983924 0 0.964093V0.5V0.265845C0 0.255659 0.00428628 0.24585 0.0120005 0.238381L0.1145 0.139138Z"
              fill="#D9D9D9"
            />
          </clipPath>
          <clipPath id="clip-another3" clipPathUnits="objectBoundingBox">
            <path
              d="M0 0.0351351C0 0.0157306 0.0174609 0 0.039 0H0.5H0.727414C0.741798 0 0.755513 0.00547207 0.765179 0.0150678L0.858 0.107207L0.98622 0.236143C0.995093 0.245066 1 0.256625 1 0.268605V0.5V0.964865C1 0.984269 0.982539 1 0.961 1H0.039C0.0174609 1 0 0.984269 0 0.964865V0.0351351Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>

      <section className="bg-[#010206] py-24 sm:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet the Team
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                We are a team of passionate innovators, engineers, and visionaries dedicated to accelerating the transition to a sustainable industrial future.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 lg:gap-x-16 max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group relative max-w-[280px] mx-auto w-full">
                {/* Image Container with SVG clipPath */}
                <div 
                  className="relative w-full aspect-[4/5] bg-[#0a0a0a] rounded-xl overflow-hidden mb-6 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,167,85,0.15)]"
                  style={{ clipPath: `url(#${member.clipId})` }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010206] via-[#010206]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Subtle inner border using box-shadow inside the clip path isn't possible directly,
                      but the clipPath itself defines the border edge cleanly now. */}
                </div>
                
                {/* Text Content */}
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00A755] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#00A755] mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeamSection;
