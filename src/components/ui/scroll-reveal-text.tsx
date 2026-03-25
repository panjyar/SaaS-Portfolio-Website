"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

export default function ScrollRevealText({ text, className, containerClassName }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Observe the container's scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 45%"], // Starts revealing when top of text hits 90% of screen, finishes near center
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={cn("flex flex-wrap gap-x-[0.25em] gap-y-1 justify-center relative", containerClassName)}>
      {words.map((word, i) => {
        // Space out the animation of each word across the full scroll progress
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
  // Translate up from 120% to 0% and fade in
  const y = useTransform(progress, range, ["120%", "0%"]);
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative overflow-hidden inline-flex leading-tight">
      <motion.span 
        style={{ y, opacity }} 
        className={cn("inline-block will-change-transform", className)}
      >
        {word}
      </motion.span>
    </span>
  );
}
