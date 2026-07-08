"use client"

export default function VicasHero() {
  return (
    <>
      <style>{`
        @keyframes diskPulse {
          0%, 100% { transform: scale(0.92) rotateX(0deg); opacity: 0.7; }
          50%       { transform: scale(1.04) rotateX(8deg); opacity: 1; }
        }
        @keyframes sweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blipPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.5); opacity: 0.6; }
        }
        @keyframes blipRing {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .vicas-disk-pulse { animation: diskPulse 3.5s ease-in-out infinite; }
        .vicas-sweep      { animation: sweep 3s linear infinite; }
        .vicas-blip-pulse { animation: blipPulse 1.2s ease-in-out infinite; }
        .vicas-blip-ring  { animation: blipRing 1.6s ease-out infinite; }
      `}</style>

      <section
        className="relative min-h-screen w-full overflow-hidden"
        style={{ backgroundColor: "var(--vicas-page-bg-alt)" }}
      >

        {/* Radar disk — right side */}
        <div className="absolute left-1/2 top-1/2 w-[720px] h-[720px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 vicas-disk-pulse" style={{ transformOrigin: "center center" }}>
            {/* Concentric rings */}
            {[240, 360, 480 , 600].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: size,
                  height: size,
                  border: "1px solid var(--vicas-radar-ring-border)",
                  background: `rgba(0,120,50,${(0.20 - i * 0.03).toFixed(2)})`,
                }}
              />
            ))}

            {/* Center dot */}
            <div
              className="absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ backgroundColor: "var(--vicas-radar-center-dot)" }}
            />

            {/* Blip ring */}
            <div
              className="absolute w-2.5 h-2.5 rounded-full vicas-blip-ring z-10"
              style={{
                top: "calc(50% - 90px)",
                left: "calc(50% + 60px)",
                border: "1px solid var(--vicas-radar-blip-border)",
              }}
            />

            {/* Red blip dot */}
            <div
              className="absolute w-2.5 h-2.5 rounded-full vicas-blip-pulse z-40"
              style={{
                top: "calc(50% - 90px)",
                left: "calc(50% + 60px)",
                backgroundColor: "var(--vicas-radar-blip)",
                boxShadow: "0 0 8px 2px rgba(255,60,60,0.7)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-screen items-center vicas-container">
          <div className="py-14">
            <h1
              className="mb-5 text-[42px] font-extrabold leading-[1.12] tracking-tight"
              style={{ color: "var(--vicas-text-primary)" }}
            >
              See Risks Before
              <br />
              They Become{" "}
              <span style={{ color: "var(--vicas-hero-green)" }}>Incidents</span>
            </h1>

            <p className="mb-9 max-w-[500px] text-[15px] leading-relaxed text-white/60">
              VICAS is an AI-powered vision intelligence platform that helps
              industrial organizations detect hazards, automate safety
              compliance, and respond to risks in real time.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/5 cursor-pointer">
                Watch Demo
              </button>
              <button
                className="rounded-md px-5 py-2.5 text-sm font-medium text-white transition cursor-pointer"
                style={{
                  backgroundColor: "var(--vicas-hero-btn-primary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--vicas-hero-btn-primary-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--vicas-hero-btn-primary)")
                }
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
