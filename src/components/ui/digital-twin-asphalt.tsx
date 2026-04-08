"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { ShieldAlert } from "lucide-react";

/* ─────────────────────────────────────────
   TYPES & INITIAL SENSOR STATE
───────────────────────────────────────── */
interface Sensors {
  bitumenTemp: number;
  drumshellTemp: number;
  bhExhaust: number;
  bhInlet: number;
  mixTemp: number;
  gasFlow: number;
  moisture: number;
  ambientTemp: number;
  aggregateFeed: number;
  efficiency: number;
  boilerPressure: number;
}

const INIT: Sensors = {
  bitumenTemp: 203.36,
  drumshellTemp: 64.04,
  bhExhaust: 52.52,
  bhInlet: 54.86,
  mixTemp: 0,
  gasFlow: 1336287,
  moisture: 3.02,
  ambientTemp: 55.35,
  aggregateFeed: 142,
  efficiency: 87.4,
  boilerPressure: 4.2,
};

const jitter = (v: number, r = 0.5) => v + (Math.random() - 0.5) * r;

/* ─────────────────────────────────────────
   SVG PRIMITIVES
───────────────────────────────────────── */

/** Animated pipe segment */
function Pipe({
  d, color, w = 2.5, dash = false, speed = "2s", rev = false, active = true,
}: { d: string; color: string; w?: number; dash?: boolean; speed?: string; rev?: boolean; active?: boolean }) {
  return (
    <path
      d={d} fill="none" stroke={color} strokeWidth={w}
      strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray={active ? "10 6" : "4 6"}
      style={active ? {
        animation: `${rev ? "flowRev" : "flow"} ${speed} linear infinite`,
        strokeDasharray: dash ? "4 4" : "10 6",
      } : { strokeDasharray: "3 5", opacity: 0.4 }}
    />
  );
}

/** Arrow head at a point */
function Arrow({ x, y, dir = "right", color = "#94a3b8" }: { x: number; y: number; dir?: "right"|"left"|"up"|"down"; color?: string }) {
  const pts: Record<string, string> = {
    right: `${x},${y-5} ${x+10},${y} ${x},${y+5}`,
    left:  `${x},${y-5} ${x-10},${y} ${x},${y+5}`,
    up:    `${x-5},${y} ${x},${y-10} ${x+5},${y}`,
    down:  `${x-5},${y} ${x},${y+10} ${x+5},${y}`,
  };
  return <polygon points={pts[dir]} fill={color} />;
}

/** Industrial cylindrical silo / tank (tall, with scaffolding legs) */
function Silo({ x, y, w, h, label, fillColor = "#facc15", fillPct = 0.55 }: {
  x: number; y: number; w: number; h: number;
  label?: string; fillColor?: string; fillPct?: number;
}) {
  const ry = w * 0.18;
  const bodyTop = y + ry;
  const bodyBot = y + h - ry;
  const bodyH = bodyBot - bodyTop;
  const fillH = bodyH * fillPct;
  const fillY = bodyBot - fillH;

  return (
    <g>
      {/* scaffolding legs */}
      {[-w*0.3, 0, w*0.3].map((dx, i) => (
        <line key={i} x1={x + w/2 + dx} y1={bodyBot} x2={x + w/2 + dx} y2={y + h + 16}
          stroke="#475569" strokeWidth={1.5} />
      ))}
      <line x1={x + w/2 - w*0.32} y1={y+h+8} x2={x + w/2 + w*0.32} y2={y+h+8} stroke="#475569" strokeWidth={1} />
      {/* body */}
      <rect x={x} y={bodyTop} width={w} height={bodyH} fill="#1a2744" stroke="#4a5c7a" strokeWidth={1} />
      {/* liquid fill */}
      {fillPct > 0 && (
        <rect x={x+1} y={fillY} width={w-2} height={fillH} fill={fillColor} opacity={0.3} />
      )}
      {/* top ellipse cap */}
      <ellipse cx={x+w/2} cy={bodyTop} rx={w/2} ry={ry} fill="#263555" stroke="#4a5c7a" strokeWidth={1} />
      {/* bottom ellipse cap */}
      <ellipse cx={x+w/2} cy={bodyBot} rx={w/2} ry={ry} fill="#141d30" stroke="#4a5c7a" strokeWidth={1} />
      {/* cone bottom */}
      <path d={`M ${x} ${bodyBot} L ${x+w/2} ${y+h} L ${x+w} ${bodyBot}`}
        fill="#141d30" stroke="#4a5c7a" strokeWidth={1} />
      {/* label */}
      {label && (
        <text x={x+w/2} y={y+h+28} textAnchor="middle" fill="#94a3b8" fontSize={9}
          fontFamily="'JetBrains Mono',monospace">{label}</text>
      )}
    </g>
  );
}

/** Horizontal pressure vessel / boiler */
function Vessel({ x, y, w, h, label, sublabel, active = false }: {
  x: number; y: number; w: number; h: number;
  label?: string; sublabel?: string; active?: boolean;
}) {
  const rx = h / 2;
  return (
    <g>
      {/* body */}
      <rect x={x+rx} y={y} width={w-rx*2} height={h} fill="#1e2d48" stroke="#4a5c7a" strokeWidth={1.2} />
      {/* left cap */}
      <ellipse cx={x+rx} cy={y+h/2} rx={rx} ry={h/2} fill="#223050" stroke="#4a5c7a" strokeWidth={1.2} />
      {/* right cap */}
      <ellipse cx={x+w-rx} cy={y+h/2} rx={rx} ry={h/2} fill="#1a2640" stroke="#4a5c7a" strokeWidth={1.2} />
      {/* highlight stripe */}
      <rect x={x+rx} y={y+4} width={w-rx*2} height={4} fill="rgba(255,255,255,0.06)" />
      {/* nozzles on top */}
      {[0.3,0.5,0.7].map((t,i)=>(
        <g key={i}>
          <rect x={x+rx+(w-rx*2)*t-4} y={y-10} width={8} height={12} fill="#1e2d48" stroke="#4a5c7a" strokeWidth={1}/>
          <ellipse cx={x+rx+(w-rx*2)*t} cy={y-10} rx={5} ry={3} fill="#263555" stroke="#4a5c7a" strokeWidth={1}/>
        </g>
      ))}
      {label && (
        <text x={x+w/2} y={y+h+14} textAnchor="middle" fill="#94a3b8" fontSize={9}
          fontFamily="'JetBrains Mono',monospace">{label}</text>
      )}
      {sublabel && (
        <text x={x+w/2} y={y+h+24} textAnchor="middle" fill="#64748b" fontSize={8}
          fontFamily="'JetBrains Mono',monospace">{sublabel}</text>
      )}
    </g>
  );
}

/** Rotary drum — elongated with band rings */
function Drum({ x, y, w, h, label, active }: {
  x: number; y: number; w: number; h: number; label: string; active: boolean;
}) {
  const rx = h / 2;
  const bandColor = active ? "#00A755" : "#334155";
  return (
    <g>
      <rect x={x+rx} y={y} width={w-rx*2} height={h} fill="#1a2744" stroke={bandColor} strokeWidth={1.5}/>
      <ellipse cx={x+rx} cy={y+h/2} rx={rx} ry={h/2} fill="#1e2d48" stroke={bandColor} strokeWidth={1.5}/>
      <ellipse cx={x+w-rx} cy={y+h/2} rx={rx} ry={h/2} fill="#172038" stroke={bandColor} strokeWidth={1.5}/>
      {/* band rings */}
      {[0.22, 0.78].map((t, i) => (
        <ellipse key={i} cx={x+rx+(w-rx*2)*t} cy={y+h/2} rx={6} ry={h/2+3}
          fill="none" stroke="#374f6e" strokeWidth={5}/>
      ))}
      {/* roller support */}
      {[0.25, 0.75].map((t, i) => (
        <g key={i}>
          <rect x={x+rx+(w-rx*2)*t-10} y={y+h} width={20} height={10} rx={2} fill="#263555" stroke="#374f6e" strokeWidth={1}/>
          <rect x={x+rx+(w-rx*2)*t-14} y={y+h+8} width={28} height={5} rx={1} fill="#1a2744" stroke="#374f6e" strokeWidth={0.8}/>
        </g>
      ))}
      <text x={x+w/2} y={y+h/2+4} textAnchor="middle" fill="#e2e8f0" fontSize={10}
        fontFamily="'JetBrains Mono',monospace" fontWeight={600}>{label}</text>
    </g>
  );
}

/** Hopper/storage silo with rings */
function Hopper({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  const cylinderH = h * 0.62;
  const coneH = h * 0.28;
  const legH = h * 0.1;
  const rx = w * 0.14;
  return (
    <g>
      {/* cylinder */}
      <rect x={x} y={y} width={w} height={cylinderH} fill="#1a2744" stroke="#4a5c7a" strokeWidth={1}/>
      <ellipse cx={x+w/2} cy={y} rx={w/2} ry={rx} fill="#263555" stroke="#4a5c7a" strokeWidth={1}/>
      <ellipse cx={x+w/2} cy={y+cylinderH} rx={w/2} ry={rx} fill="#141d30" stroke="#4a5c7a" strokeWidth={1}/>
      {/* band rings on cylinder */}
      {[0.2,0.4,0.6,0.8].map((t,i)=>(
        <rect key={i} x={x} y={y+cylinderH*t-2} width={w} height={4} fill="none" stroke="#374f6e" strokeWidth={3}/>
      ))}
      {/* cone */}
      <path d={`M ${x} ${y+cylinderH} L ${x+w/2-8} ${y+cylinderH+coneH} L ${x+w/2+8} ${y+cylinderH+coneH} L ${x+w} ${y+cylinderH} Z`}
        fill="#141d30" stroke="#4a5c7a" strokeWidth={1}/>
      {/* legs */}
      {[w*0.2, w*0.8].map((dx,i)=>(
        <line key={i} x1={x+dx} y1={y+cylinderH+coneH} x2={x+dx} y2={y+cylinderH+coneH+legH}
          stroke="#374f6e" strokeWidth={3}/>
      ))}
      <line x1={x+w*0.1} y1={y+cylinderH+coneH+legH} x2={x+w*0.9} y2={y+cylinderH+coneH+legH}
        stroke="#374f6e" strokeWidth={2}/>
      {/* conveyor belt */}
      <rect x={x-30} y={y+cylinderH+coneH+legH-4} width={60} height={8} rx={4}
        fill="#1a2744" stroke="#4a5c7a" strokeWidth={1}/>
      <text x={x+w/2} y={y-12} textAnchor="middle" fill="#94a3b8" fontSize={9}
        fontFamily="'JetBrains Mono',monospace">{label}</text>
    </g>
  );
}

/** Natural Gas horizontal tanks */
function GasTank({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const ry = h/2;
  return (
    <g>
      <rect x={x+ry} y={y} width={w-ry*2} height={h} fill="#1a2744" stroke="#4a5c7a" strokeWidth={1}/>
      <ellipse cx={x+ry} cy={y+h/2} rx={ry} ry={h/2} fill="#1e2d48" stroke="#4a5c7a" strokeWidth={1}/>
      <ellipse cx={x+w-ry} cy={y+h/2} rx={ry} ry={h/2} fill="#172038" stroke="#4a5c7a" strokeWidth={1}/>
      {/* legs */}
      {[0.3,0.7].map((t,i)=>(
        <g key={i}>
          <line x1={x+w*t} y1={y+h} x2={x+w*t-6} y2={y+h+16} stroke="#374f6e" strokeWidth={2}/>
          <line x1={x+w*t} y1={y+h} x2={x+w*t+6} y2={y+h+16} stroke="#374f6e" strokeWidth={2}/>
        </g>
      ))}
      {/* figure */}
      <circle cx={x+w-ry-6} cy={y+h+10} r={4} fill="#ef4444"/>
      <rect x={x+w-ry-8} y={y+h+14} width={5} height={10} rx={1} fill="#64748b"/>
    </g>
  );
}

/** Small aggregate bin (trapezoid) */
function AggregateBin({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <polygon points={`${x},${y} ${x+w},${y} ${x+w-6},${y+h} ${x+6},${y+h}`}
        fill="#1a2744" stroke="#4a5c7a" strokeWidth={1}/>
    </g>
  );
}

/** Flame effect */
function Flames({ x, y, scale = 1, active }: { x: number; y: number; scale?: number; active: boolean }) {
  if (!active) return null;
  return (
    <g style={{ animation: "flicker 0.4s ease-in-out infinite alternate" }}>
      <path d={`M${x} ${y} Q${x-12*scale} ${y-28*scale} ${x} ${y-44*scale} Q${x+9*scale} ${y-30*scale} ${x+14*scale} ${y-16*scale} Q${x+5*scale} ${y-8*scale} ${x} ${y}`}
        fill="#f97316"/>
      <path d={`M${x+4*scale} ${y} Q${x-2*scale} ${y-16*scale} ${x+6*scale} ${y-28*scale} Q${x+12*scale} ${y-18*scale} ${x+16*scale} ${y-6*scale} Z`}
        fill="#fbbf24" opacity={0.85}/>
    </g>
  );
}

/** Sensor badge with colored indicator dot */
function Badge({ x, y, label, value, status = "ok", w = 160 }: {
  x: number; y: number; label: string; value: string;
  status?: "ok"|"warn"|"off"; w?: number;
}) {
  const dotColor = { ok: "#00d97e", warn: "#f59e0b", off: "#ef4444" }[status];
  const borderColor = { ok: "rgba(0,217,126,0.4)", warn: "rgba(245,158,11,0.4)", off: "rgba(239,68,68,0.5)" }[status];
  const bgColor = { ok: "rgba(0,217,126,0.07)", warn: "rgba(245,158,11,0.07)", off: "rgba(239,68,68,0.1)" }[status];
  return (
    <g style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}>
      <rect x={x} y={y} width={w} height={26} rx={4} fill={bgColor} stroke={borderColor} strokeWidth={0.8}/>
      <circle cx={x+11} cy={y+13} r={4}
        fill={dotColor}
        style={{ animation: status === "ok" ? "blink 2.5s ease-in-out infinite" : "none" }}/>
      <text x={x+22} y={y+13.5} dominantBaseline="middle"
        fill="#94a3b8" fontSize={8.5} fontFamily="'JetBrains Mono',monospace">{label}</text>
      <text x={x+w-6} y={y+13.5} dominantBaseline="middle" textAnchor="end"
        fill="#e2e8f0" fontSize={10} fontWeight={700} fontFamily="'JetBrains Mono',monospace">{value}</text>
    </g>
  );
}

/** Stat row in right panel */
function StatRow({ label, value, highlight, unit }: { label: string; value: string; highlight?: boolean; unit?: string }) {
  return (
    <div className="flex justify-between items-center py-[7px] border-b border-slate-800">
      <span className="text-[10px] text-amber-400/80 leading-tight pr-2">{label}</span>
      <span className={`text-[11px] font-mono font-bold whitespace-nowrap ${highlight ? "text-emerald-400" : "text-slate-200"}`}>
        {value}{unit ? <span className="text-slate-500 text-[9px] font-normal ml-0.5">{unit}</span> : null}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function DigitalTwinAsphalt() {
  const [sensors, setSensors] = useState<Sensors>(INIT);
  const [online, setOnline] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
      if (online) {
        setSensors(s => ({
          bitumenTemp:    jitter(s.bitumenTemp, 0.8),
          drumshellTemp:  jitter(s.drumshellTemp, 0.4),
          bhExhaust:      jitter(s.bhExhaust, 0.6),
          bhInlet:        jitter(s.bhInlet, 0.5),
          mixTemp:        online ? jitter(s.mixTemp || 0, 1.2) : 0,
          gasFlow:        Math.round(jitter(s.gasFlow, 60)),
          moisture:       jitter(s.moisture, 0.06),
          ambientTemp:    jitter(s.ambientTemp, 0.2),
          aggregateFeed:  Math.round(jitter(s.aggregateFeed, 4)),
          efficiency:     jitter(s.efficiency, 0.3),
          boilerPressure: jitter(s.boilerPressure, 0.1),
        }));
      }
    }, 2000);
    return () => clearInterval(id);
  }, [online]);

  const f = (n: number, d = 2) => n.toFixed(d);

  // Pipe colors
  const GREEN  = "#00d97e";
  const YELLOW = "#facc15";
  const GREY   = "#94a3b8";
  const CYAN   = "#22d3ee";

  return (
    <div className="relative rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[700px] w-full bg-[#060c1a] shadow-2xl" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      
      {/* ── SECURITY / SIMULATION BANNER ── */}
      <div className="absolute top-0 left-0 right-0 py-1.5 flex justify-center items-center gap-2 bg-amber-500 text-black font-semibold uppercase tracking-widest text-[10px] z-50">
        <ShieldAlert className="w-3.5 h-3.5" />
        Interactive Simulation Mode — Data is Anonymized and Representational
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');
        @keyframes flow    { to { stroke-dashoffset: -32; } }
        @keyframes flowRev { to { stroke-dashoffset:  32; } }
        @keyframes flicker { from{opacity:.8} to{opacity:1} }
        @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:.5} }
        @keyframes pulse   { 0%,100%{r:4} 50%{r:5.5} }
        @keyframes spin    { to{transform:rotate(360deg)} }
      `}</style>

      {/* ── HEADER ── */}
      <header className="flex items-center justify-between px-5 py-2.5 bg-[#07101f] border-b border-slate-700/60 mt-7">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-xs font-black text-black">S</div>
          <div>
            <div className="text-[9px] text-slate-500 uppercase tracking-[0.15em]">LivNSense AI Lab</div>
            <div className="text-[13px] font-bold text-white tracking-wide">Digital Twin Demo</div>
          </div>
        </div>

        <div className="text-center hidden md:block">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">EXAMPLE PLANT ENVIRONMENT</div>
          <div className="text-sm font-bold text-white tracking-wider">Asphalt Process Model</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-[9px] text-slate-500 uppercase tracking-wider">System Time</div>
            <div className="text-[10px] text-amber-400 font-mono">{time.toLocaleTimeString()}</div>
          </div>
          <button
            onClick={() => setOnline(o => !o)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all ${
              online ? "bg-red-500/10 border-red-500/40 text-red-400" : "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ background: online ? "#ef4444" : "#00d97e", animation: "blink 1.5s infinite" }}/>
            {online ? "Stop Sim" : "Start Sim"}
          </button>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* DEMO WATERMARK */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0 opacity-[0.03]">
           <div className="text-[150px] font-black text-white rotate-[-15deg] whitespace-nowrap">DEMO MODE</div>
        </div>

        {/* ══ PROCESS FLOW CANVAS ══ */}
        <div className="flex-1 relative overflow-hidden bg-[#06101e] z-10">

          {/* Pipe legend */}
          <div className="absolute top-3 left-4 bg-[#0d1b30]/80 border border-slate-700/50 rounded px-3 py-2 z-20 shadow-lg backdrop-blur-sm">
            <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1.5 font-bold">Flow Visualization:</div>
            {[
              { color: GREEN,  label: "Fuel/Gas Supply" },
              { color: YELLOW, label: "Raw Material (Bitumen)" },
              { color: GREY,   label: "Thermal Fluid" },
              { color: CYAN,   label: "Recycled Input" },
            ].map(p => (
              <div key={p.label} className="flex items-center gap-2 mb-1">
                <span className="w-7 h-0.5 inline-block rounded" style={{ background: p.color }}/>
                <span className="text-[9px] text-slate-400">{p.label}</span>
              </div>
            ))}
          </div>

          <svg viewBox="0 0 1100 600" width="100%" height="100%" style={{ display: "block" }}>

            {/* ── GRID BACKGROUND ── */}
            <defs>
              <pattern id="g" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="1100" height="600" fill="url(#g)"/>

            {/* ══════════════════════════════
                PIPE NETWORK
            ══════════════════════════════ */}

            {/* Bitumen Tanks → Boiler (YELLOW vertical + horizontal) */}
            <Pipe d="M 132 178 L 132 100 L 600 100 L 600 185" color={YELLOW} w={2.5} active={online} speed="1.8s"/>
            <Pipe d="M 232 178 L 232 118 L 600 118" color={YELLOW} w={2} active={online} speed="2.2s"/>
            <Pipe d="M 332 178 L 332 128 L 600 128" color={YELLOW} w={2} active={online} speed="2s"/>
            <Pipe d="M 432 178 L 432 110 L 600 110" color={YELLOW} w={2} active={online} speed="1.6s"/>

            {/* Boiler → Drum (GREY hot oil) */}
            <Pipe d="M 700 215 L 700 250 L 490 250 L 490 350" color={GREY} w={2} dash active={online} speed="2.5s"/>

            {/* Natural Gas → Drum (GREEN) */}
            <Pipe d="M 120 530 L 120 420 L 440 420 L 440 370" color={GREEN} w={3} active={online} speed="1.4s"/>

            {/* Aggregate Bins → Drum conveyor (GREEN) */}
            <Pipe d="M 200 440 L 440 440 L 440 390" color={GREEN} w={2} active={online} speed="2s"/>

            {/* RAP Bin → Drum (CYAN) */}
            <Pipe d="M 665 300 L 600 300 L 600 355" color={CYAN} w={2.5} active={online} speed="1.9s"/>

            {/* Drum → Mixer (GREY) */}
            <Pipe d="M 750 380 L 810 380" color={GREY} w={3} active={online} speed="1.5s"/>

            {/* Mixer → Hopper conveyor belt (GREY) */}
            <Pipe d="M 940 380 L 985 380 L 985 300" color={GREY} w={2.5} active={online} speed="1.7s"/>

            {/* Hopper return loop top (GREY dashed) */}
            <Pipe d="M 985 185 L 985 80 L 600 80 L 600 100" color={GREY} w={1.5} dash active={online} speed="3s" rev/>

            {/* Bitumen loop return */}
            <Pipe d="M 132 100 L 50 100 L 50 430 L 120 430" color={YELLOW} w={1.5} dash active={online} speed="3.5s" rev/>

            {/* ══════════════════════════════
                ARROWS on pipes
            ══════════════════════════════ */}
            <Arrow x={600} y={140} dir="down" color={YELLOW}/>
            <Arrow x={700} y={280} dir="down" color={GREY}/>
            <Arrow x={440} y={430} dir="right" color={GREEN}/>
            <Arrow x={750} y={380} dir="right" color={GREY}/>
            <Arrow x={985} y={240} dir="up" color={GREY}/>
            <Arrow x={600} y={310} dir="down" color={CYAN}/>

            {/* ══════════════════════════════
                EQUIPMENT
            ══════════════════════════════ */}

            {/* 4 × Bitumen Silos */}
            <Silo x={90}  y={95}  w={85} h={120} label="Storage Tank 1" fillColor={YELLOW} fillPct={0.6}/>
            <Silo x={190} y={95}  w={85} h={120} label="Storage Tank 2" fillColor={YELLOW} fillPct={0.45}/>
            <Silo x={290} y={95}  w={85} h={120} label="Storage Tank 3" fillColor={YELLOW} fillPct={0.55}/>
            <Silo x={390} y={95}  w={85} h={120} label="Storage Tank 4" fillColor={YELLOW} fillPct={0.38}/>

            {/* Boiler / horizontal vessel */}
            <Vessel x={560} y={185} w={200} h={75} label="Boiler Unit" active={online}/>
            {/* Flames on boiler */}
            <Flames x={590} y={185} scale={0.9} active={online}/>
            <Flames x={614} y={185} scale={0.8} active={online}/>
            <Flames x={638} y={185} scale={1.0} active={online}/>

            {/* RAP Bin Feed */}
            <rect x={620} y={258} width={180} height={46} rx={4} fill="#0f2040" stroke={CYAN} strokeWidth={1}/>
            <text x={710} y={275} textAnchor="middle" fill="#22d3ee" fontSize={8.5} fontFamily="'JetBrains Mono',monospace">Recycled Input</text>
            <text x={710} y={288} textAnchor="middle" fill="#22d3ee" fontSize={8.5} fontFamily="'JetBrains Mono',monospace">Feeder</text>
            {/* RAP sub-bins */}
            {[630,655,680,705,730].map((bx,i)=>(
              <g key={i}>
                <AggregateBin x={bx} y={304} w={22} h={28}/>
              </g>
            ))}

            {/* Aggregate Bin Feed (left bottom) */}
            <text x={155} y={422} textAnchor="middle" fill="#94a3b8" fontSize={8.5} fontFamily="'JetBrains Mono',monospace">Base Material Feed</text>
            {[60,90,120,150,180,210].map((bx,i)=>(
              <AggregateBin key={i} x={bx} y={426} w={24} h={30}/>
            ))}
            {/* Conveyor belt */}
            <rect x={90} y={456} width={350} height={10} rx={5} fill="#1a2744" stroke="#334155" strokeWidth={1}/>
            {[110,140,170,200,230,260,290,320,350,380].map((bx,i)=>(
              <circle key={i} cx={bx} cy={461} r={5} fill="#263555" stroke="#374f6e" strokeWidth={1}/>
            ))}

            {/* Excavator */}
            <g>
              {/* body */}
              <rect x={200} y={394} width={45} height={26} rx={3} fill="#b45309" stroke="#78350f" strokeWidth={1}/>
              {/* cab */}
              <rect x={218} y={384} width={26} height={14} rx={2} fill="#92400e" stroke="#78350f" strokeWidth={1}/>
              {/* arm */}
              <line x1={244} y1={391} x2={270} y2={375} stroke="#78350f" strokeWidth={3} strokeLinecap="round"/>
              <line x1={270} y1={375} x2={280} y2={390} stroke="#78350f" strokeWidth={3} strokeLinecap="round"/>
              {/* tracks */}
              <rect x={196} y={418} width={55} height={8} rx={4} fill="#451a03"/>
              {[202,216,230,238].map((cx,i)=>(
                <circle key={i} cx={cx} cy={422} r={4} fill="#1e293b" stroke="#475569" strokeWidth={1}/>
              ))}
            </g>

            {/* Moisture Probe */}
            <rect x={398} y={390} width={80} height={26} rx={3} fill="#0f1e30" stroke="#475569" strokeWidth={1}/>
            <text x={438} y={400} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="'JetBrains Mono',monospace">Moisture</text>
            <text x={438} y={410} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="'JetBrains Mono',monospace">Sensor</text>

            {/* Rotary Drum */}
            <Drum x={450} y={352} w={300} h={55} label="Rotary Drum / Kiln" active={online}/>
            {/* Drum flames */}
            <Flames x={464} y={352} scale={0.75} active={online}/>
            <Flames x={482} y={352} scale={0.85} active={online}/>

            {/* Minerals & Additive */}
            <rect x={760} y={330} width={80} height={40} rx={3} fill="#111827" stroke="#374151" strokeWidth={1}/>
            <text x={800} y={344} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="'JetBrains Mono',monospace">Minerals &</text>
            <text x={800} y={356} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="'JetBrains Mono',monospace">Additives</text>
            {/* small vessel */}
            <ellipse cx={793} cy={373} rx={16} ry={10} fill="#1a2744" stroke="#374f6e" strokeWidth={1}/>

            {/* Mixer */}
            <Vessel x={810} y={355} w={130} h={50} label="Mixer" active={online}/>
            {/* Mixer internals (ball mills) */}
            {[840,860,880,900].map((cx,i)=>(
              <circle key={i} cx={cx} cy={380} r={7} fill="#263555" stroke="#4a5c7a" strokeWidth={1}/>
            ))}

            {/* Hopper */}
            <Hopper x={950} y={155} w={80} h={145} label="Output Hopper"/>

            {/* Natural Gas tanks */}
            <GasTank x={60} y={505} w={130} h={44}/>
            <text x={125} y={566} textAnchor="middle" fill="#94a3b8" fontSize={9} fontFamily="'JetBrains Mono',monospace">Fuel Reserve</text>

            {/* Dump truck */}
            <g>
              <rect x={900} y={498} width={90} height={38} rx={4} fill="#b45309" stroke="#78350f" strokeWidth={1}/>
              <rect x={900} y={484} width={44} height={18} rx={3} fill="#92400e" stroke="#78350f" strokeWidth={1}/>
              {/* dump bed tipped */}
              <polygon points="944,484 944,498 990,498 990,488" fill="#9a3412" stroke="#78350f" strokeWidth={1}/>
              {/* wheels */}
              {[918,940,962,984].map((cx,i)=>(
                <circle key={i} cx={cx} cy={536} r={10} fill="#1e293b" stroke="#4a5c7a" strokeWidth={2}/>
              ))}
              {/* material pile */}
              <ellipse cx={970} cy={498} rx={20} ry={7} fill="#92400e" opacity={0.7}/>
            </g>

            {/* ══════════════════════════════
                SENSOR BADGES
            ══════════════════════════════ */}
            {/* Bitumen Temp on tank 1 */}
            <Badge x={78} y={55} label="Material Temp" value={`${f(sensors.bitumenTemp)}°F`} status={online?"ok":"off"} w={180}/>
            {/* BH Exhaust */}
            <Badge x={445} y={298} label="Exhaust Temp" value={`${f(sensors.bhExhaust)}°F`} status={online?"warn":"off"} w={180}/>
            {/* BH Inlet */}
            <Badge x={445} y={324} label="Inlet Temp" value={`${f(sensors.bhInlet)}°F`} status={online?"ok":"off"} w={180}/>
            {/* Drumshell */}
            <Badge x={530} y={416} label="Drumshell Temp" value={`${f(sensors.drumshellTemp)}°F`} status={online?"ok":"off"} w={180}/>
            {/* Mix Temp */}
            <Badge x={800} y={415} label="Output Mix Temp" value={`${f(sensors.mixTemp)}°F`} status={online?"off":"off"} w={180}/>
            {/* Gas Meter */}
            <Badge x={60} y={472} label="Fuel Flow Meter" value={`${sensors.gasFlow.toLocaleString()} CCF`} status={online?"ok":"off"} w={180}/>

          </svg>
        </div>

        {/* ══ RIGHT PANEL ══ */}
        <aside className="w-64 bg-[#08111f] border-l border-slate-700/50 flex flex-col text-xs overflow-y-auto shrink-0 z-20">

          <div className="px-3 pt-3 pb-2 bg-[#0c1929] border-b border-slate-700/50">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Simulated Process Metrics</div>
            <StatRow label="Final Output Temp (°F)" value={f(sensors.mixTemp)} highlight/>
            <StatRow label="Drumshell Temp (°F)" value={f(sensors.drumshellTemp)} highlight/>
            <StatRow label="Base Feed Rate (TPH)" value={`${sensors.aggregateFeed}`}/>
            <StatRow label="Current Fuel (CCF)" value={sensors.gasFlow.toLocaleString()}/>
          </div>

          <div className="px-3 py-2 bg-[#091629] border-b border-slate-700/50">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Environmental Inputs</div>
            <StatRow label="Moisture (%)" value={f(sensors.moisture, 2)}/>
            <StatRow label="Ambient Temp (°F)" value={f(sensors.ambientTemp)}/>
          </div>

          <div className="px-3 py-2 bg-[#0c1929] border-b border-slate-700/50">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Calculated Variables</div>
            <StatRow label="Fuel Consump/Min" value={online ? f(sensors.gasFlow/60/1000,3) : "0"}/>
            <StatRow label="Boiler Pressure (bar)" value={f(sensors.boilerPressure,1)} highlight/>
          </div>

          <div className="px-3 py-2 bg-[#091629] border-b border-slate-700/50">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">GreenOps Recommendations</div>
            <StatRow label="Target Fuel Flow" value={online ? f(sensors.aggregateFeed * 0.82) : "---"}/>
            <StatRow label="Target Air Flow" value={online ? f(sensors.aggregateFeed * 1.15) : "---"}/>
          </div>

          <div className="px-3 py-2 bg-[#0c1929]">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">AI Predictive Impact</div>
            <div className="flex justify-between text-[8.5px] text-slate-600 uppercase tracking-wide pb-1 border-b border-slate-800 mb-1">
              <span className="flex-1">Metric</span>
              <span className="w-14 text-right">Baseline</span>
              <span className="w-16 text-right">Optimized</span>
            </div>
            {[
              { label: "Output Temp (°F)", base: f(sensors.mixTemp-3.8), opt: f(sensors.mixTemp+2.1) },
              { label: "Stability Index",  base: f(sensors.drumshellTemp-1.2), opt: f(sensors.drumshellTemp+0.8) },
              { label: "Yield Yield (T)",     base: f(sensors.aggregateFeed*0.87,0), opt: f(sensors.aggregateFeed*1.08,0) },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="flex-1 text-[9px] text-amber-400/80 leading-tight pr-1">{r.label}</span>
                <span className="w-14 text-right font-mono text-[10px] text-slate-400">{online ? r.base : "---"}</span>
                <span className="w-16 text-right font-mono text-[10px] text-emerald-400 font-bold">{online ? r.opt : "---"}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto px-3 py-4 text-[9px] text-slate-500 border-t border-slate-700/40 bg-[#060e18]">
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> Process flows, sensor data, and structural logic are anonymized and stylized. Actual client implementations are uniquely configured and kept strictly confidential.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
