"use-client"

export default function VicasHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="https://vicasinfo.livnsense.com/media/herovideo11.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl xl:text-5xl">
            See Risks Before They Become Incidents
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-gray-300 md:text-lg">
            VICAS is an AI-powered vision intelligence platform that helps
            industrial organizations detect hazards, automate safety compliance,
            and respond to risks in real time.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="border border-white px-6 py-2.5 text-sm transition hover:bg-white hover:text-black">
              Watch Demo
            </button>

            <button className="bg-[#00A755] px-6 py-2.5 text-sm transition hover:bg-[#008f48]">
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
