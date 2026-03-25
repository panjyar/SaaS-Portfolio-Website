"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SmoothTextRevealProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

export default function SmoothTextReveal({ text, className, containerClassName }: SmoothTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 60%"],
  });

  const words = text.split(" ");

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "flex flex-wrap items-center gap-x-[0.25em] gap-y-[0.15em]", 
        "text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-[#f5f5f0]", 
        containerClassName
      )}
    >
      {words.map((word, i) => {
        // Distribute animation sequence evenly over scroll length
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word 
            key={i} 
            word={word} 
            progress={scrollYProgress} 
            range={[start, end]} 
            className={className}
          />
        );
      })}
    </div>
  );
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}

function Word({ word, progress, range, className }: WordProps) {
  // Translate from bottom up like a mask reveal
  const y = useTransform(progress, range, ["120%", "0%"]);
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative overflow-hidden inline-flex pt-[0.1em] pb-[0.1em] px-[0.05em]">
      <motion.span 
        style={{ y, opacity }} 
        className={cn("inline-block will-change-transform", className)}
      >
        {word}
      </motion.span>
    </span>
  );
}
