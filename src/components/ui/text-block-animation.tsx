"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextBlockAnimationProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
  className?: string;
}

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#FE9A00", // Changed default to LivNSense green
  duration = 0.6,
  className,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });
  
  // We only care about triggering animation if animateOnScroll is false, OR if it's true and in view
  const shouldAnimate = animateOnScroll ? isInView : true;

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden inline-block", className)}>
      {/* Background Block Revealer */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ backgroundColor: blockColor, transformOrigin: "left center" }}
        initial={{ scaleX: 0 }}
        animate={shouldAnimate ? { scaleX: [0, 1, 0] } : { scaleX: 0 }}
        transition={{
          duration: duration * 2, // Multiply by 2 since we do two steps (in then out)
          times: [0, 0.5, 1], // 0% -> 50% -> 100% of duration
          ease: "easeInOut",
          delay: delay,
        }}
        onAnimationStart={() => {
           // We could change the transformOrigin halfway through, but Framer Motion handles it gracefully 
           // if we define the keyframes. However, a simpler scaleX: [0, 1, 0] animates from center by default.
           // To do left-to-right then left-to-right out, it's easier to use a sweeping left property.
        }}
      />
      
      {/* Alternative sweeping block approach for better directional control */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 bg-transparent z-20 pointer-events-none"
        style={{ backgroundColor: blockColor }}
        initial={{ width: "0%", left: "0%" }}
        animate={shouldAnimate ? { width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] } : {}}
        transition={{
          duration: duration * 1.5,
          times: [0, 0.5, 1],
          ease: "circInOut",
          delay: delay,
        }}
      />

      {/* Actual Text Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.1, delay: delay + (duration * 0.7) }} // Reveal text when block covers it
      >
        {children}
      </motion.div>
    </div>
  );
}
