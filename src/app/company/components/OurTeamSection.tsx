import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Avnish Kumar",
    role: "Co-Founder & Chairman",
    description: "Visionary leader driving the strategic direction of LivNSense.",
    // Using an abstract placeholder since actual images aren't provided
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Priyanka Kumar",
    role: "Co-Founder & COO",
    description: "Focuses on operational excellence and scaling product delivery.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Amith Singh",
    role: "Chief Business Officer US",
    description: "Leading market expansion and enterprise sales in the Chicago hub.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Rajaram Kamat",
    role: "Director – R&D and Engineering",
    description: "Heading advanced engineering and product innovation in Bangalore.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const OurTeamSection = () => {
  return (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group relative">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-[#0a0a0a] rounded-xl overflow-hidden mb-6 border border-white/5 transition-all duration-500 group-hover:border-[#00A755]/30 group-hover:shadow-[0_0_30px_rgba(0,167,85,0.15)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010206] via-[#010206]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              
              {/* Text Content */}
              <div>
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
  );
};

export default OurTeamSection;
