"use client";
import { useEffect, useRef, useState } from "react";

// Hook: animates a number from 0 to `target` when the element enters view
function useCountUp(target: number, duration = 700) {
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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Metric item component
export default function MetricItem({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(target);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="text-5xl md:text-6xl font-medium flex items-center justify-center text-white">
        {count.toLocaleString()}
        {suffix}
      </p>

      <p className="text-sm mt-1 text-white font-medium">{label}</p>
    </div>
  );
}