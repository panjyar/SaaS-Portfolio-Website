"use client";
import { WorldMap } from "@/components/ui/map";

export default function Map() {
  return (
    <div className="py-20 bg-transparent w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white">
          Global{" "}
          Intelligence Network
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          LivNSense connects industrial assets across continents, delivering
          real-time AI insights and predictive safety worldwide.
        </p>
      </div>
      <WorldMap
        lineColor="#00A755"
        dots={[
          // ── Bangalore Office → India connections ──
          {
            start: { lat: 1.99999, lng: 77.590082, label: "Bangalore" },
            end:   { lat: 28.613939, lng: 77.209023, label: "New Delhi" },
          },
          {
            start: { lat: 1.99999, lng: 77.590082, label: "Bangalore" },
            end:   { lat: 11.001812, lng: 76.962842, label: "Coimbatore" },
          },

          // ── Bangalore Office → Middle East ──
          {
            start: { lat: 1.99999, lng: 77.590082, label: "Bangalore" },
            end:   { lat: 24.000249, lng: 53.999483, label: "UAE" },
          },
          {
            start: { lat: 1.99999, lng: 77.590082, label: "Bangalore" },
            end:   { lat: 24.453835, lng: 54.377401, label: "Abu Dhabi" },
          },
          {
            start: { lat: 1.99999, lng: 77.590082, label: "Bangalore" },
            end:   { lat: 21.000029, lng: 57.003690, label: "Oman" },
          },

          // ── Bangalore Office → Europe ──
          {
            start: { lat: 1.99999, lng: 77.590082, label: "Bangalore" },
            end:   { lat: 51.507446, lng: -0.127765, label: "London" },
          },
          {
            start: { lat: 1.99999, lng: 77.590082, label: "Bangalore" },
            end:   { lat: 39.326068, lng: -4.837979, label: "Spain" },
          },

          // ── Japan Office → Asia / Middle East ──
          {
            start: { lat: 36.574844, lng: 139.239418, label: "Japan" },
            end:   { lat: 1.99999, lng: 77.590082,  label: "Bangalore" },
          },
          {
            start: { lat: 36.574844, lng: 139.239418, label: "Japan" },
            end:   { lat: 24.000249, lng: 53.999483,  label: "UAE" },
          },

          // ── Chicago / Woods Office → Americas & Europe ──
          {
            start: { lat: 41.875562, lng: -87.624421, label: "Chicago" },
            end:   { lat: 32.776272, lng: -96.796856, label: "Dallas" },
          },
          {
            start: { lat: 41.875562, lng: -87.624421, label: "Chicago" },
            end:   { lat: 51.507446, lng: -0.127765,  label: "London" },
          },
          {
            start: { lat: 41.875562, lng: -87.624421, label: "Chicago" },
            end:   { lat: 1.99999, lng: 77.590082,  label: "Bangalore" },
          },
        ]}
      />
    </div>
  );
}