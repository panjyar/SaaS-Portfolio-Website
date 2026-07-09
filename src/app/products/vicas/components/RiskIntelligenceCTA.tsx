"use client";

export default function RiskIntelligenceCTA() {
  return (
    <section className="relative overflow-hidden pb-24 pt-28">
      <div
        className="w-full rounded-b-[82px] pb-24 pt-20"
        style={{
          background:
            "linear-gradient(180deg, var(--vicas-cta-bg) 0%, var(--vicas-cta-bg-dark) 100%)",
        }}
      >
        <div className="vicas-container flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2
            className="max-w-[560px] text-[42px] font-bold leading-[1.15] tracking-[-0.04em] md:text-[48px]"
            style={{ color: "var(--vicas-text-primary)" }}
          >
            Move from Monitoring
            <br />
            to Risk Intelligence
          </h2>

          <div className="flex flex-wrap gap-4 md:pb-3">
            <button
              className="rounded-[12px] border px-6 py-3 text-[13px] font-semibold text-white transition bg-transparent hover:bg-white/5 cursor-pointer"
              style={{
                borderColor: "var(--vicas-cta-btn-secondary-border)",
              }}
            >
              Watch Demo
            </button>

            <button
              className="rounded-[12px] px-6 py-3 text-[13px] font-semibold text-white cursor-pointer transition-all duration-300  hover:brightness-110"
              style={{
                background:
                  "linear-gradient(180deg, var(--vicas-cta-btn-primary) 0%, var(--vicas-cta-btn-primary-dark) 100%)",
              }}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}