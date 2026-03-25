import React from 'react';
import { cn } from '@/lib/utils';

interface ValueCardProps {
  title: string;
  description?: string;
  className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, className }) => {
  return (
    <div className={cn(
      "group relative flex flex-col justify-center items-center text-center p-8 md:p-12 min-h-[300px] transition-colors duration-500 overflow-hidden cursor-pointer",
      "bg-[#0a0a0a] hover:bg-[#00A755]",
      className
    )}>
      <h3 className="text-2xl font-semibold text-[#00A755] group-hover:text-[#010206] transition-colors duration-500 max-w-[250px] z-10">
        {title}
      </h3>
      {description && (
        <p className="mt-6 text-sm md:text-base text-gray-300 group-hover:text-[#010206] transition-colors duration-500 z-10 max-w-sm">
          {description}
        </p>
      )}

      {/* Geometric Line Motif at Bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center pointer-events-none z-0">
        {/* Left Line */}
        <div className="flex-1 h-px bg-[#00A755] group-hover:bg-[#010206] transition-colors duration-500 opacity-50" />
        {/* Circles */}
        <div className="flex items-center -mx-1">
           <div className="w-8 h-8 rounded-full border border-[#00A755] group-hover:border-[#010206] flex items-end justify-center overflow-hidden transition-colors duration-500">
             <div className="w-full h-1/2 bg-[#00A755] group-hover:bg-[#010206] transition-colors duration-500" />
           </div>
           <div className="w-8 h-8 rounded-full border border-[#00A755] group-hover:border-[#010206] -ml-4 flex items-start justify-center overflow-hidden transition-colors duration-500">
             <div className="w-full h-1/2 bg-transparent" />
           </div>
        </div>
        {/* Right Line */}
        <div className="flex-1 h-px bg-[#00A755] group-hover:bg-[#010206] transition-colors duration-500 opacity-50" />
      </div>
    </div>
  );
};

const CompanyValues = () => {
  return (
    <section className="bg-[#e4e4e4] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f232b]">
            About our Company Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard 
            title="Act with integrity" 
          />
          <ValueCard 
            title="Make a difference for our customers" 
          />
          <ValueCard 
            title="PlaceHolder for now"
            description="here will be description"/>
            
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
