"use client";
import { useEffect, useRef, useState } from "react";


// Hook: animates a number from 0 to `target` when the element enters view
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const update = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
            setCount(Math.round(ease * target));
            if (t < 1) requestAnimationFrame(update);
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Metric item component
function MetricItem({
  target,
  suffix,
  label,
  type = "up"
}: {
  target: number;
  suffix: string;
  label: string;
  type?: "up" | "down" | "neutral";
}) {
  const { count, ref } = useCountUp(target);

  const arrow = {
    up: "↑",
    down: "↓",
    neutral: "●"
  };

  return (
    <div ref={ref} className="flex flex-col items-start">
      <p className="text-4xl md:text-5xl font-semibold flex items-center gap-2">
        {type !== "neutral" && (
          <span className={type === "up" ? "text-green-400" : "text-green-400"}>
            {arrow[type]}
          </span>
        )}
        {count}{suffix}
      </p>

      <p className="text-sm mt-2 text-white/70">{label}</p>
    </div>
  );
}

export default function Landinghero() {
  return (
    <section className="w-full overflow-hidden relative">

      {/* Background Video */}
      <div className="relative w-full h-[650px] bg-black overflow-hidden">
        <video
          src="https://vicasinfo.livnsense.com/media/herovideo11.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-white">

          <h1 className="text-[34px] md:text-[56px] font-semibold leading-tight max-w-4xl">
            The World’s First AI-Powered Industrial Intelligence Platform
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-gray-300 max-w-3xl">
            Improve the safety and well-being of 100 million people by the end of this decade through transformative technology solutions powered by LivNSense™.
          </p>

          <a href="/company/about">
            <button className="mt-8 bg-[#00A755] hover:bg-green-700 px-8 py-3 rounded-full text-white font-medium transition">
              Explore LivNSense
            </button>
          </a>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12 text-[#C6D9B7]">

            <MetricItem
              target={160}
              suffix="+"
              label="AI Models"
              type="up"
            />

            <MetricItem
              target={30}
              suffix="%"
              label="Energy Efficiency"
              type="up"
            />

            <MetricItem
              target={20}
              suffix="%"
              label="CO₂ Reduction"
              type="down"
            />

            <MetricItem
              target={0}
              suffix="%"
              label="Fatalities"
              type="neutral"
            />



          </div>

        </div>
      </div>
    </section>
  );
}