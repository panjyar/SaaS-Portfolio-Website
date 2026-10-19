"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: React.ReactNode;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title,
  description,
  items,
}: Gallery4Props) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start measuring when the top of the section hits the top of the viewport
    offset: ["start start", "end end"] 
  });

  // Calculate translation. We use "-60%" to shift the long row to the left, 
  // revealing the right-most cards as the user scrolls down the long height.
  // Using standard percentage interpolation based on scroll completion.
  const xPercent = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]); 

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-[#010206] text-white">
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden pt-12 sm:pt-24 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-8 mb-4 md:mb-10 lg:mb-12 shrink-0 relative z-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-white tracking-tight">
              {title}
            </h2>
            <div className="max-w-2xl text-gray-400 text-lg/relaxed">{description}</div>
          </div>
        </div>
        
        <div className="flex w-full overflow-visible shrink-0 items-center justify-start flex-1 px-6 lg:px-8 pb-16 md:pb-24">
          {/* Framer motion wrapper moves left linearly with page scroll */}
          <motion.div 
            style={{ x: xPercent }} 
            className="flex gap-6 w-max items-center"
          >
            {items.map((item) => (
               <div
                key={item.id}
                className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"
              >
                <div className="group relative h-[55vh] min-h-[320px] max-h-[550px] w-full max-w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#0a0f14]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-60 grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 h-full bg-gradient-to-t from-[#010206] via-[#010206]/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8 pointer-events-none">
                    <div className="mb-2 pt-4 text-2xl font-semibold md:mb-3 md:pt-4 text-white tracking-tight drop-shadow-lg">
                      {item.title}
                    </div>
                    <div className="mb-4 text-gray-300 drop-shadow-md text-base/relaxed">
                      {item.description}
                    </div>
                    <a href={item.href || "#"} className="flex items-center text-sm font-medium text-[#FE9A00] pointer-events-auto">
                      Read more{" "}
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* Added spacer to let it scroll all the way */}
            <div className="w-[10vw] shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
