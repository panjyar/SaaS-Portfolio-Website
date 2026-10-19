"use client";

import AirFlowEffect from "./AirFlowEffect";

type CaptureItem = {
  image: string;
  title: string;
  lines?: string[];
};

const captureTop: CaptureItem[] = [
  {
    image: `https://api.iconify.design/lucide/camera.svg?color=white`,
    title: "IP Cameras",
    lines: ["RTSP Cameras", "Multi-USB Cameras", "PoE Cameras"],
  },
  {
    image: `https://api.iconify.design/lucide/video.svg?color=white`,
    title: "5G/4G Cameras",
  },
];

const captureBottom: CaptureItem[] = [
  {
    image: `https://api.iconify.design/lucide/navigation.svg?color=white`,
    title: "IMU/Tilt Sensor",
  },
  {
    image: `https://api.iconify.design/lucide/map-pin.svg?color=white`,
    title: "GPS Sensor",
  },
  {
    image: `https://api.iconify.design/lucide/cpu.svg?color=white`,
    title: "Other Site Sensors",
  },
];

const integrateTop = [
  { image: `https://api.iconify.design/lucide/ticket.svg?color=white`, title: "Ticketing Systems" },
  { image: `https://api.iconify.design/lucide/door-open.svg?color=white`, title: "Access Control" },
  { image: `https://api.iconify.design/lucide/users.svg?color=white`, title: "CRM" },
  { image: `https://api.iconify.design/lucide/database.svg?color=white`, title: "ERP" },
  { image: `https://api.iconify.design/lucide/monitor.svg?color=white`, title: "Digital Signage" },
];

const integrateBottom = [
  { image: `https://api.iconify.design/lucide/network.svg?color=white`, title: "REST API" },
  { image: `https://api.iconify.design/lucide/shield-check.svg?color=white`, title: "OPC UA" },
  { image: `https://api.iconify.design/lucide/rss.svg?color=white`, title: "MQTT" },
  { image: `https://api.iconify.design/lucide/cloud.svg?color=white`, title: "Azure" },
];

const actItems = [
  "Live Crowd\nDashboards",
  "Capacity\nAlerts",
  "Flow\nManagement",
  "Footfall\nAnalytics",
  "Visitor\nExperience",
  "Trend\nAnalysis &\nInsights",
];

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`absolute text-[12px] font-semibold uppercase tracking-[-0.02em] ${className}`}
      style={{ color: "var(--darshanai-green, #009c5b)" }}
    >
      {children}
    </p>
  );
}

function DarkPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[32px] border border-white/[0.02] ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 62, 35, 0.3) 0%, rgba(0, 47, 28, 0.3) 100%)",
      }}
    >
      {children}
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[30px] text-white/80">
      {children}
    </div>
  );
}

function CaptureRow({ item }: { item: CaptureItem }) {
  return (
    <div className="flex gap-5">
      <IconBadge>
        <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
      </IconBadge>

      <div>
        <p className="text-[14px] font-medium text-white">{item.title}</p>

        {item.lines && (
          <div className="mt-5 space-y-1">
            {item.lines.map((line) => (
              <p key={line} className="text-[12px] font-medium text-white/45">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function IntegrationRow({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[24px] font-bold text-white/70">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <p className="text-[14px] font-medium text-white">{title}</p>
    </div>
  );
}

export default function DarshanAIArchitectureDiagram() {
  return (
    <section className="relative overflow-hidden bg-[#050b0b] px-6 py-10">
      <div className="mx-auto max-w-[1128px]">
        <div
          className="relative min-h-[620px] overflow-hidden rounded-[2px]"
          // style={{
          //   backgroundColor: "#050b0b",
          //   backgroundImage:
          //     "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          //   backgroundSize: "36px 53px",
          // }}
        >
          {/* subtle fade edges */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_55%,rgba(5,11,11,0.65)_100%)]" />

          <AirFlowEffect />
          {/* CAPTURE */}
          <SectionLabel className="left-[68px] top-[28px]">Capture</SectionLabel>

          <DarkPanel className="absolute left-[38px] top-[70px] flex h-[250px] w-[202px] flex-col justify-between px-5 py-8">
            {captureTop.map((item) => (
              <CaptureRow key={item.title} item={item} />
            ))}
          </DarkPanel>

          <DarkPanel className="absolute left-[38px] top-[345px] flex h-[250px] w-[202px] flex-col justify-between px-5 py-8">
            {captureBottom.map((item) => (
              <CaptureRow key={item.title} item={item} />
            ))}
          </DarkPanel>

          {/* DETECT */}
          <SectionLabel className="left-[290px] top-[170px]">Detect</SectionLabel>

          <DarkPanel className="absolute left-[258px] top-[200px] flex h-[300px] w-[198px] flex-col items-center justify-center gap-8">
            {/* <div className="flex h-[94px] w-[112px] items-center justify-center rounded-[12px] border border-white/10 bg-white/5"> */}
              {/* <div className="h-16 w-20 rounded-md border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),rgba(255,255,255,0.08))]" /> */}
              <img src="https://api.iconify.design/lucide/server.svg?color=white" alt="AI Box" width={100} height={100} />
            {/* </div> */}

            <p className="-mt-6 text-[11px] font-medium text-white/45">
              Edge Gateway
            </p>

            <div className="flex h-[96px] w-[164px] items-center justify-center rounded-[18px] border border-[#00a45e]/20 bg-[#062a1d]/40">
              <div className="text-center">
                <img src="https://api.iconify.design/lucide/cpu.svg?color=white" alt="NVIDIA" width={90} height={90} />
                {/* <p className="mt-1 text-[20px] font-black leading-none text-white">
                  nvidia
                </p> */}
              </div>
            </div>
          </DarkPanel>

          {/* ANALYZE */}
          <SectionLabel className="left-[520px] top-[250px]">Analyze</SectionLabel>

          <div
            className="absolute left-[475px] top-[278px] flex h-[146px] w-[146px] items-center justify-center rounded-full border border-white/[0.02]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 76, 43, 0.72) 0%, rgba(0, 49, 31, 0.62) 100%)",
            }}
          >
            <p className="text-center text-[16px] font-semibold leading-[1.45] text-white">
              DarshanAI AI
              <br />
              PLATFORM
            </p>
          </div>

          {/* INTEGRATE */}
          <SectionLabel className="left-[668px] top-[12px]">Integrate</SectionLabel>

          <DarkPanel className="absolute left-[636px] top-[46px] flex h-[300px] w-[198px] flex-col justify-between px-5 py-3">
            {integrateTop.map((item) => (
              <IntegrationRow key={item.title} {...item} />
            ))}
          </DarkPanel>

          <DarkPanel className="absolute left-[636px] top-[367px] flex h-[254px] w-[198px] flex-col justify-between px-8 py-7">
            {integrateBottom.map((item) => (
              <IntegrationRow key={item.title} {...item} />
            ))}
          </DarkPanel>

          {/* ACT */}
          <SectionLabel className="right-[203px] top-[51px]">Act</SectionLabel>

          <div className="absolute right-[80px] top-[78px] flex w-[196px] flex-col gap-5">
  {actItems.map((item) => (
    <div
      key={item}
      className="flex h-[68px] items-center justify-center rounded-full text-center text-[14px] font-medium leading-[1.35] text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 55, 34, 0.3) 0%, rgba(0, 43, 29, 0.3) 100%)",
      }}
    >
      <span className="whitespace-pre-line">{item}</span>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}