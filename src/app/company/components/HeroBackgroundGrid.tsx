import React from 'react';

const HeroBackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#0a0a0a]">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Subtle glowing orbs to mimic the dynamic squares */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FE9A00]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FE9A00]/5 rounded-full blur-[120px]" />

      {/* A few green decorative squares with animations */}
      <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-[#FE9A00] opacity-60 shadow-[0_0_10px_#FE9A00] animate-pulse" />
      <div className="absolute top-[50%] right-[30%] w-2 h-2 bg-[#FE9A00] opacity-60 shadow-[0_0_10px_#FE9A00] animate-pulse" />
      <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-[#FE9A00] opacity-40 shadow-[0_0_10px_#FE9A00] animate-subtle-spin" />
      <div className="absolute bottom-[20%] right-[40%] w-2.5 h-2.5 bg-[#FE9A00] opacity-50 shadow-[0_0_10px_#FE9A00] animate-bounce" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-[#FE9A00]/40 shadow-[0_0_8px_#FE9A00]/20" />

      {/* Gradient to fade out the grid at the edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010206] via-transparent to-[#010206]/40" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#010206] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#010206] via-[#010206]/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#010206] to-transparent" />
    </div>
  );
};

export default HeroBackgroundGrid;
