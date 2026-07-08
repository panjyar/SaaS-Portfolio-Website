"use client";

export default function ProvenImpact() {
  return (
    <section className="relative overflow-hidden pb-24 pt-12">
      <div className="vicas-container">
        <p
          className="mb-8 text-center text-[12px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--vicas-section-label)" }}
        >
          Proven Impact
        </p>

        <article
          className="group relative overflow-hidden rounded-[18px] border p-3 md:p-3"
          style={{
            background:
              "linear-gradient(180deg, var(--vicas-impact-card-bg) 0%, var(--vicas-impact-card-bg-dark) 100%)",
            borderColor: "var(--vicas-impact-card-border)",
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.38)",
          }}
        >
          <div className="grid min-h-[220px] gap-6 md:grid-cols-[1.18fr_0.82fr] md:gap-8">
            <div className="overflow-hidden rounded-[10px] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="Aerial view of an industrial plant area"
                className="h-[190px] w-full object-cover grayscale-[25%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 md:h-full"
                loading="lazy"
              />
            </div>

            <div className="relative flex min-h-[150px] flex-col px-2 pb-4 pt-2 md:px-3 md:pb-4 md:pt-4">
              <div>
                <h2
                  className="mb-3 text-[24px] font-semibold leading-tight md:text-[26px]"
                  style={{ color: "var(--vicas-text-primary)" }}
                >
                  Austin Plant
                </h2>

                <p
                  className="max-w-[390px] text-[14px] leading-relaxed md:text-[15px]"
                  style={{ color: "var(--vicas-text-secondary)" }}
                >
                  We achieved measurable ROI, safer workflows, and stronger
                  impact metrics across daily plant operations in Austin.
                </p>
              </div>

              <button
                aria-label="View Austin Plant impact case study"
                className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 group-hover:scale-105 md:bottom-5 md:right-5 cursor-pointer"
                style={{
                  backgroundColor: "var(--vicas-impact-arrow-bg)",
                  borderColor: "var(--vicas-impact-arrow-border)",
                  color: "var(--vicas-section-label)",
                }}
              >
                <span className="text-[28px] leading-none transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
