'use client';

import React from "react";

type Position = {
  id: string;
  title: string;
  workType: string;
  locationType: string;
  location: string;
  jobType: string;
};

type OpenPositionsProps = {
  positions: Position[];
};

const primary = "#FE9A00";
const cardBg = "#181818";
const cardBorder = "#222";
const highlight = "#181818";
const textMain = "#fff";
const textSub = "#ededed";
const accent = "#b9ffdd";

const OpenPositions: React.FC<OpenPositionsProps> = ({ positions }) => {
  return (
    <section
      style={{
        padding: "42px 0 0",
      }}
    >
      <h2
        style={{
          fontSize: "2.7rem",
          fontWeight: 700,
          color: textMain,
          marginBottom: 40,
          paddingLeft: 24,
          letterSpacing: 1,
        }}
      >
        Our Open Positions
      </h2>

      {positions.length === 0 ? (
        <div
          style={{
            padding: "48px",
            textAlign: "center",
            background: cardBg,
            borderRadius: 22,
            color: textSub,
            fontWeight: 500,
            fontSize: "1.35rem",
            width: "96vw",
            maxWidth: 568,
            margin: "48px auto 0",
          }}
        >
          There are currently no open positions. Please check back soon!
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 32,
            padding: "0 24px",
            maxWidth: 1400,
            margin: "0 auto 54px",
          }}
        >
          {positions.map((pos) => (
            <div
              key={pos.id}
              style={{
                borderRadius: 20,
                background: cardBg,
                border: `1.5px solid ${cardBorder}`,
                minHeight: 170,
                maxWidth: 480,
                color: textMain,
                boxShadow: "0 2px 12px #0003",
                padding: "30px 32px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border 0.2s",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: primary,
                  marginBottom: 12,
                  letterSpacing: 0.2,
                }}
              >
                {pos.title}
              </div>
              <div
                style={{
                  color: accent,
                  fontSize: 17,
                  fontWeight: 500,
                  marginBottom: 8,
                  display: "flex",
                  gap: 16,
                }}
              >
                <span>• {pos.workType}</span>
                <span>• {pos.locationType}</span>
              </div>
              <div
                style={{
                  color: textSub,
                  fontSize: 16,
                  fontWeight: 400,
                  marginBottom: 22,
                }}
              >
                • {pos.location}
              </div>
              <a
                href={`/careers/${pos.id}`}
                style={{
                  color: primary,
                  fontWeight: 600,
                  textDecoration: "underline",
                  fontSize: 17,
                  letterSpacing: 0.1,
                  paddingBottom: 3,
                }}
              >
                View detail &gt;
              </a>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", paddingBottom: 64 }}>
        <button
          style={{
            background: accent,
            border: 0,
            color: highlight,
            borderRadius: 32,
            padding: "0.7em 2.3em",
            fontWeight: 600,
            fontSize: 17,
            boxShadow: "0 1px 8px #0002",
            cursor: "pointer",
            margin: "0 auto",
            transition: "background .2s",
          }}
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default OpenPositions;
