"use client";
import {envGroups} from "../data/envGroups";

export default function MultiEnviroment() {
  return (
    <>
      <style>{`
        @keyframes vicasEnvMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .vicas-env-track-slow {
          animation: vicasEnvMarquee 30s linear infinite;
        }

        .vicas-env-track-fast {
          animation: vicasEnvMarquee 26s linear infinite;
        }

        .vicas-env-panel:hover .vicas-env-track {
          animation-play-state: paused;
        }

        // .vicas-env-fade-left {
        //   background: linear-gradient(
        //     90deg,
        //     var(--vicas-env-panel-bg) 0%,
        //     rgba(20, 24, 26, 0) 100%
        //   );
        // }

        // .vicas-env-fade-right {
        //   background: linear-gradient(
        //     270deg,
        //     var(--vicas-env-panel-bg) 0%,
        //     rgba(20, 24, 26, 0) 100%
        //   );
        // }
      `}</style>

      <section className="relative overflow-hidden py-4">
        <div className="vicas-container">
          <p
            className="mb-10 text-center text-[12px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "var(--vicas-section-label)" }}
          >
            One Platform. Multiple Environments
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {envGroups.map((group) => {
              const loopCards = [...group.cards, ...group.cards];

              return (
                <div
                  key={group.label}
                  className="vicas-env-panel relative overflow-hidden rounded-[22px] border px-5 pb-7 pt-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--vicas-env-panel-bg) 0%, var(--vicas-env-panel-bg-dark) 100%)",
                    borderColor: "var(--vicas-env-panel-border)",
                  }}
                >
                  <h3
                    className="mb-4 pl-2 text-[12px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: "var(--vicas-section-label)" }}
                  >
                    {group.label}
                  </h3>

                  <div className="relative overflow-hidden">
                    <div className="vicas-env-fade-left pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12" />
                    <div className="vicas-env-fade-right pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16" />

                    <div
                      className={`vicas-env-track flex w-max gap-5 pr-5 ${group.speedClass}`}
                    >
                      {loopCards.map((card, index) => (
                        <article
                          key={`${card.title}-${index}`}
                          className="group/card flex h-[200px] w-[145px] shrink-0 flex-col items-center justify-between rounded-[20px] px-4 pb-7 pt-5 transition duration-300  md:h-[210px] md:w-[165px]"
                          style={{
                            backgroundColor: "var(--vicas-env-card-bg)",
                            border: "1px solid var(--vicas-env-card-border)",
                          }}
                        >
                          <div className="h-[112px] w-[112px] overflow-hidden rounded-full md:h-[120px] md:w-[120px]">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="h-full w-full object-cover transition duration-300 group-hover/card:grayscale-0"
                              loading="lazy"
                            />
                          </div>

                          <p
                            className="max-w-[120px] text-center text-[12px] font-semibold leading-snug"
                            style={{ color: "var(--vicas-text-primary)" }}
                          >
                            {card.title}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}