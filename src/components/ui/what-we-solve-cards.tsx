"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function WhatWeSolveCards({
  features,
}: {
  features: {
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
    image?: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  image,
  index,
}: {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  image?: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800 transition-all duration-300",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800",
        "overflow-hidden"
      )}
    >
      {/* Background Image Layer */}
      {image && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 opacity-40 group-hover/feature:opacity-70 transition-opacity duration-500" 
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Always-on dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#010206] via-[#010206]/80 to-transparent z-0 pointer-events-none" />
        </>
      )}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-xl font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-[#FE9A00] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <div className="text-sm text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed font-normal">
        {description}
      </div>
    </div>
  );
};
