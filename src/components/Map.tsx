"use client";
import { WorldMap } from "@/components/ui/map";

export default function Map() {
  return (
    <div className="py-20 bg-transparent w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white">
          Global{" "}
          Destination Network
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          YatraGen connects travelers to destinations worldwide, delivering
          real-time AI insights, optimized routes, and predictive safety globally.
        </p>
      </div>
      <WorldMap
        lineColor="#FE9A00"
        dots={[
          // ── India Hubs ──
          {
            start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
            end:   { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
          },

          // ── Bangalore → Middle East (Dubai) ──
          {
            start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
            end:   { lat: 25.2048, lng: 55.2708, label: "Dubai" },
          },

          // ── Bangalore → Southeast Asia ──
          {
            start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
            end:   { lat: 1.3521, lng: 103.8198, label: "Singapore" },
          },

          // ── Bangalore → Europe ──
          {
            start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
            end:   { lat: 51.5074, lng: -0.1278, label: "London" },
          },
          {
            start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
            end:   { lat: 40.4168, lng: -3.7038, label: "Madrid" },
          },

          // ── Japan Office → Asia / Middle East ──
          {
            start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
            end:   { lat: 1.3521, lng: 103.8198, label: "Singapore" },
          },
          {
            start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
            end:   { lat: 25.2048, lng: 55.2708, label: "Dubai" },
          },

          // ── Americas → Europe & Asia ──
          {
            start: { lat: 41.8781, lng: -87.6298, label: "Chicago" },
            end:   { lat: 32.7767, lng: -96.7970, label: "Dallas" },
          },
          {
            start: { lat: 41.8781, lng: -87.6298, label: "Chicago" },
            end:   { lat: 51.5074, lng: -0.1278,  label: "London" },
          },
          {
            start: { lat: 41.8781, lng: -87.6298, label: "Chicago" },
            end:   { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
          },
        ]}
      />
    </div>
  );
}