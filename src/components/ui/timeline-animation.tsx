"use client";

import React, { useRef, ElementType, ComponentPropsWithoutRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type TimelineContentProps<T extends ElementType = "div"> = {
  as?: T;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export function TimelineContent<T extends ElementType = "div">({
  as,
  animationNum,
  timelineRef,
  customVariants,
  className,
  children,
  ...rest
}: TimelineContentProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-10%" });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const variants = customVariants || defaultVariants;
  const Component = as || "div";
  const MotionComponent = motion.create(Component as ElementType);

  return (
    <MotionComponent
      ref={ref}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
