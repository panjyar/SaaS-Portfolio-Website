import React from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

export default function PartnerMarquee() {
  return (
    <div style={{ padding: "65px 0" }}>
      <h3
        className="text-center text-lg font-medium tracking-tight md:text-2xl mb-6"
        style={{ color: "#b8b8b8" }}
      >
        Companies we{" "}
        <span className="font-semibold" style={{ color: "#00A755" }}>
          collaborate
        </span>{" "}
        with.
      </h3>

      <div className="relative mx-auto max-w-5xl px-4">
        <LogoCloud />
      </div>
    </div>
  );
}
