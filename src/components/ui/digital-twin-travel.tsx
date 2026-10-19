"use client";
import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

/* ─────────────────────────────────────────
   TYPES & INITIAL SENSOR STATE
───────────────────────────────────────── */
interface TravelMetrics {
  flightsScanned: number;
  hotelsScanned: number;
  activeUsers: number;
  latencyMs: number;
  itinerariesGenerated: number;
  satisfactionScore: number;
  bookingConversion: number;
  apiRequests: number;
}

const INIT: TravelMetrics = {
  flightsScanned: 15420,
  hotelsScanned: 8250,
  activeUsers: 1420,
  latencyMs: 124,
  itinerariesGenerated: 542,
  satisfactionScore: 94.2,
  bookingConversion: 12.4,
  apiRequests: 43200,
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

/** Database/API Node */
function DatabaseNode({ x, y, w, h, label, color = "#FE9A00" }: {
  x: number; y: number; w: number; h: number; label: string; color?: string;
}) {
  const ry = h * 0.15;
  return (
    <g>
      <rect x={x} y={y+ry} width={w} height={h-ry*2} fill="#1a2744" stroke={color} strokeWidth={1.5} />
      {/* Top cap */}
      <ellipse cx={x+w/2} cy={y+ry} rx={w/2} ry={ry} fill="#263555" stroke={color} strokeWidth={1.5} />
      {/* Bottom cap */}
      <ellipse cx={x+w/2} cy={y+h-ry} rx={w/2} ry={ry} fill="#141d30" stroke={color} strokeWidth={1.5} />
      {/* Internal disks */}
      <ellipse cx={x+w/2} cy={y+ry+10} rx={w/2-2} ry={ry-1} fill="none" stroke={color} strokeWidth={0.5} opacity={0.5} />
      <ellipse cx={x+w/2} cy={y+ry+20} rx={w/2-2} ry={ry-1} fill="none" stroke={color} strokeWidth={0.5} opacity={0.5} />
      
      <text x={x+w/2} y={y+h+20} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="'JetBrains Mono',monospace" fontWeight="600">{label}</text>
    </g>
  );
}

/** AI Processing Core */
function AIEngine({ x, y, size, active }: { x: number; y: number; size: number; active: boolean }) {
  const points = [
    [x, y - size],
    [x + size * 0.866, y - size * 0.5],
    [x + size * 0.866, y + size * 0.5],
    [x, y + size],
    [x - size * 0.866, y + size * 0.5],
    [x - size * 0.866, y - size * 0.5],
  ].map(p => p.join(",")).join(" ");

  return (
    <g>
      {/* Glow outer ring */}
      <circle cx={x} cy={y} r={size * 1.4} fill={active ? "rgba(254, 154, 0,0.05)" : "transparent"} 
        style={{ animation: active ? "pulse 2s infinite" : "none" }} />
      <circle cx={x} cy={y} r={size * 1.1} fill="none" stroke="#FE9A00" strokeWidth={1} opacity={0.3} strokeDasharray="5 5" style={{ animation: active ? "spin 10s linear infinite" : "none", transformOrigin: `${x}px ${y}px` }} />
      
      {/* Core Hexagon */}
      <polygon points={points} fill="#0d1b2a" stroke="#FE9A00" strokeWidth={2} />
      
      {/* Inner Hexagon */}
      <polygon points={points} fill="#1a365d" stroke="#22d3ee" strokeWidth={1} transform={`scale(0.7) translate(${x*0.42} ${y*0.42})`} />
      
      {/* Central Core */}
      <circle cx={x} cy={y} r={size * 0.3} fill={active ? "#FE9A00" : "#334155"} />
      
      <text x={x} y={y+size+24} textAnchor="middle" fill="#e2e8f0" fontSize={14} fontWeight="bold" fontFamily="'JetBrains Mono',monospace">YatraGen Core</text>
      <text x={x} y={y+size+38} textAnchor="middle" fill="#FE9A00" fontSize={9} fontFamily="'JetBrains Mono',monospace">AI Itinerary Engine</text>
    </g>
  );
}

/** Cloud Node */
function CloudNode({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <path d={`M${x},${y} a10,10 0 0,1 0,-20 a15,15 0 0,1 30,-5 a10,10 0 0,1 20,5 a10,10 0 0,1 0,20 z`} fill="#1e293b" stroke="#38bdf8" strokeWidth={1.5} />
      <text x={x+25} y={y+20} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="'JetBrains Mono',monospace" fontWeight="600">{label}</text>
    </g>
  );
}

/** Output Document Node */
function DocumentNode({ x, y, label, active }: { x: number; y: number; label: string; active: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={50} height={60} rx={4} fill="#0f172a" stroke="#f59e0b" strokeWidth={1.5} />
      <line x1={x+10} y1={y+15} x2={x+40} y2={y+15} stroke="#f59e0b" strokeWidth={2} />
      <line x1={x+10} y1={y+25} x2={x+40} y2={y+25} stroke="#f59e0b" strokeWidth={2} />
      <line x1={x+10} y1={y+35} x2={x+30} y2={y+35} stroke="#f59e0b" strokeWidth={2} />
      
      {active && (
        <circle cx={x+40} cy={y+50} r={6} fill="#10b981" />
      )}
      <text x={x+25} y={y+75} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="'JetBrains Mono',monospace" fontWeight="600">{label}</text>
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
      <span className={`text-[11px] font-mono font-bold whitespace-nowrap ${highlight ? "text-orange-400" : "text-slate-200"}`}>
        {value}{unit ? <span className="text-slate-500 text-[9px] font-normal ml-0.5">{unit}</span> : null}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function DigitalTwinTravel() {
  const [metrics, setMetrics] = useState<TravelMetrics>(INIT);
  const [online, setOnline] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
      if (online) {
        setMetrics(m => ({
          flightsScanned: Math.round(jitter(m.flightsScanned, 500)),
          hotelsScanned: Math.round(jitter(m.hotelsScanned, 300)),
          activeUsers: Math.round(jitter(m.activeUsers, 20)),
          latencyMs: Math.max(45, Math.round(jitter(m.latencyMs, 15))),
          itinerariesGenerated: m.itinerariesGenerated + Math.round(Math.random() * 3),
          satisfactionScore: Math.min(99.9, jitter(m.satisfactionScore, 0.5)),
          bookingConversion: Math.min(45, jitter(m.bookingConversion, 0.4)),
          apiRequests: Math.round(jitter(m.apiRequests, 1000)),
        }));
      }
    }, 2000);
    return () => clearInterval(id);
  }, [online]);

  const f = (n: number, d = 2) => n.toFixed(d);

  // Colors
  const BLUE = "#3b82f6";
  const TEAL = "#14b8a6";
  const INDIGO = "#6366f1";
  const AMBER = "#f59e0b";
  const GREEN = "#10b981";

  return (
    <div className="relative rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[700px] w-full bg-[#060c1a] shadow-2xl" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      
      {/* ── SECURITY / SIMULATION BANNER ── */}
      <div className="absolute top-0 left-0 right-0 py-1.5 flex justify-center items-center gap-2 bg-amber-500 text-black font-semibold uppercase tracking-widest text-[10px] z-50">
        <ShieldAlert className="w-3.5 h-3.5" />
        Interactive AI Simulation — Data is Representational
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');
        @keyframes flow    { to { stroke-dashoffset: -32; } }
        @keyframes flowRev { to { stroke-dashoffset:  32; } }
        @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:.5} }
        @keyframes pulse   { 0%,100%{transform: scale(1); opacity: 0.1;} 50%{transform: scale(1.1); opacity: 0.3;} }
        @keyframes spin    { to{transform:rotate(360deg)} }
      `}</style>

      {/* ── HEADER ── */}
      <header className="flex items-center justify-between px-5 py-2.5 bg-[#07101f] border-b border-slate-700/60 mt-7">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FE9A00] rounded flex items-center justify-center text-xs font-black text-white">YG</div>
          <div>
            <div className="text-[9px] text-slate-500 uppercase tracking-[0.15em]">YatraGen Intelligence</div>
            <div className="text-[13px] font-bold text-white tracking-wide">Live Route Optimization Model</div>
          </div>
        </div>

        <div className="text-center hidden md:block">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">EXAMPLE AGENCY ENVIRONMENT</div>
          <div className="text-sm font-bold text-white tracking-wider">Automated Booking Pipeline</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-[9px] text-slate-500 uppercase tracking-wider">System Time</div>
            <div className="text-[10px] text-orange-400 font-mono">{time.toLocaleTimeString()}</div>
          </div>
          <button
            onClick={() => setOnline(o => !o)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all ${
              online ? "bg-red-500/10 border-red-500/40 text-red-400" : "bg-orange-500/10 border-orange-500/40 text-orange-400"
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
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0 opacity-[0.03]">
           <div className="text-[150px] font-black text-white rotate-[-15deg] whitespace-nowrap">DEMO MODE</div>
        </div>

        {/* ══ PROCESS FLOW CANVAS ══ */}
        <div className="flex-1 relative overflow-hidden bg-[#06101e] z-10">
          <div className="absolute top-3 left-4 bg-[#0d1b30]/80 border border-slate-700/50 rounded px-3 py-2 z-20 shadow-lg backdrop-blur-sm">
            <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1.5 font-bold">Data Visualization:</div>
            {[
              { color: BLUE,   label: "Flights API Data" },
              { color: TEAL,   label: "Hotels & Stays Data" },
              { color: INDIGO, label: "User Preferences" },
              { color: AMBER,  label: "Generated Itineraries" },
            ].map(p => (
              <div key={p.label} className="flex items-center gap-2 mb-1">
                <span className="w-7 h-0.5 inline-block rounded" style={{ background: p.color }}/>
                <span className="text-[9px] text-slate-400">{p.label}</span>
              </div>
            ))}
          </div>

          <svg viewBox="0 0 1100 600" width="100%" height="100%" style={{ display: "block" }}>
            <defs>
              <pattern id="g" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="1100" height="600" fill="url(#g)"/>

            {/* ══════════════════════════════
                DATA PIPELINES
            ══════════════════════════════ */}
            
            {/* APIs -> Engine (Flights) */}
            <Pipe d="M 200 150 L 350 150 L 350 300 L 480 300" color={BLUE} w={2} active={online} speed="1.5s" />
            <Pipe d="M 200 250 L 280 250 L 280 320 L 480 320" color={TEAL} w={2} active={online} speed="2s" />
            
            {/* User -> Engine (Preferences) */}
            <Pipe d="M 200 450 L 350 450 L 350 340 L 480 340" color={INDIGO} w={2} dash active={online} speed="1.2s" />
            
            {/* External Weather -> Engine */}
            <Pipe d="M 300 100 L 550 100 L 550 250" color="#38bdf8" w={1.5} dash active={online} speed="2.5s" />

            {/* Engine -> Itineraries Output */}
            <Pipe d="M 620 320 L 800 320" color={AMBER} w={3} active={online} speed="1s" />
            <Pipe d="M 620 320 L 700 320 L 700 180 L 800 180" color={GREEN} w={2} active={online} speed="1.8s" />
            <Pipe d="M 620 320 L 700 320 L 700 450 L 800 450" color={GREEN} w={2} active={online} speed="1.8s" />

            {/* Loopback (Learning/Analytics) */}
            <Pipe d="M 820 480 L 820 540 L 550 540 L 550 390" color="#a855f7" w={1.5} dash rev active={online} speed="4s" />


            {/* ARROWS */}
            <Arrow x={460} y={300} dir="right" color={BLUE} />
            <Arrow x={460} y={320} dir="right" color={TEAL} />
            <Arrow x={460} y={340} dir="right" color={INDIGO} />
            <Arrow x={550} y={240} dir="down" color="#38bdf8" />
            <Arrow x={780} y={320} dir="right" color={AMBER} />
            <Arrow x={780} y={180} dir="right" color={GREEN} />
            <Arrow x={780} y={450} dir="right" color={GREEN} />

            {/* ══════════════════════════════
                NODES & EQUIPMENT
            ══════════════════════════════ */}

            {/* Data Sources */}
            <DatabaseNode x={100} y={120} w={100} h={60} label="Global Flights API" color={BLUE} />
            <DatabaseNode x={100} y={220} w={100} h={60} label="Hotel Inventory DB" color={TEAL} />
            
            <CloudNode x={280} y={80} label="Weather API" />

            {/* User Interface Nodes */}
            <rect x={100} y={420} width={100} height={60} rx={8} fill="#1e1b4b" stroke={INDIGO} strokeWidth={2} />
            <circle cx={150} cy={440} r={12} fill="none" stroke={INDIGO} strokeWidth={2} />
            <circle cx={150} cy={436} r={4} fill={INDIGO} />
            <path d="M 140 448 Q 150 440 160 448" fill="none" stroke={INDIGO} strokeWidth={2} />
            <text x={150} y={498} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="'JetBrains Mono',monospace" fontWeight="600">Client Profiles</text>

            {/* Core AI Engine */}
            <AIEngine x={550} y={320} size={70} active={online} />

            {/* Output Nodes */}
            <DocumentNode x={800} y={290} label="Generated Itinerary" active={online} />
            
            <rect x={800} y={160} width={80} height={40} rx={4} fill="#064e3b" stroke={GREEN} strokeWidth={1.5} />
            <text x={840} y={184} textAnchor="middle" fill="#10b981" fontSize={10} fontFamily="'JetBrains Mono',monospace" fontWeight="600">Ticketing</text>
            
            <rect x={800} y={430} width={80} height={40} rx={4} fill="#064e3b" stroke={GREEN} strokeWidth={1.5} />
            <text x={840} y={454} textAnchor="middle" fill="#10b981" fontSize={10} fontFamily="'JetBrains Mono',monospace" fontWeight="600">CRM Sync</text>

            {/* ══════════════════════════════
                SENSOR BADGES
            ══════════════════════════════ */}
            <Badge x={80} y={50} label="Flights Indexed" value={metrics.flightsScanned.toLocaleString()} status={online?"ok":"off"} w={180}/>
            <Badge x={80} y={350} label="Active Users" value={metrics.activeUsers.toLocaleString()} status={online?"ok":"off"} w={180}/>
            <Badge x={500} y={180} label="Engine Latency" value={`${metrics.latencyMs} ms`} status={metrics.latencyMs > 60 ? "warn" : "ok"} w={180}/>
            <Badge x={780} y={100} label="Bookings Today" value={metrics.itinerariesGenerated.toString()} status={online?"ok":"off"} w={180}/>
            
          </svg>
        </div>

        {/* ══ RIGHT PANEL ══ */}
        <aside className="w-64 bg-[#08111f] border-l border-slate-700/50 flex flex-col text-xs overflow-y-auto shrink-0 z-20">

          <div className="px-3 pt-3 pb-2 bg-[#0c1929] border-b border-slate-700/50">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Platform Metrics</div>
            <StatRow label="Active Agencies" value="45" highlight/>
            <StatRow label="Processing Latency" value={metrics.latencyMs.toString()} unit="ms"/>
            <StatRow label="API Requests/hr" value={metrics.apiRequests.toLocaleString()}/>
            <StatRow label="Satisfaction Score" value={f(metrics.satisfactionScore)} unit="%" highlight/>
          </div>

          <div className="px-3 py-2 bg-[#091629] border-b border-slate-700/50">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Live Inventory</div>
            <StatRow label="Flights Tracked" value={metrics.flightsScanned.toLocaleString()}/>
            <StatRow label="Hotels Indexed" value={metrics.hotelsScanned.toLocaleString()}/>
          </div>

          <div className="px-3 py-2 bg-[#0c1929] border-b border-slate-700/50">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Conversion Funnel</div>
            <StatRow label="Itineraries Built" value={metrics.itinerariesGenerated.toLocaleString()} highlight/>
            <StatRow label="Booking Conversion" value={f(metrics.bookingConversion)} unit="%"/>
          </div>

          <div className="px-3 py-2 bg-[#0c1929]">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">AI Optimization Impact</div>
            <div className="flex justify-between text-[8.5px] text-slate-600 uppercase tracking-wide pb-1 border-b border-slate-800 mb-1">
              <span className="flex-1">Metric</span>
              <span className="w-14 text-right">Manual</span>
              <span className="w-16 text-right">AI YatraGen</span>
            </div>
            {[
              { label: "Plan Time", base: "2.4 hrs", opt: "1.2 sec" },
              { label: "Margin",  base: "12%", opt: "18%" },
              { label: "Re-routes", base: "Manual", opt: "Auto" },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="flex-1 text-[9px] text-amber-400/80 leading-tight pr-1">{r.label}</span>
                <span className="w-14 text-right font-mono text-[10px] text-slate-400">{r.base}</span>
                <span className="w-16 text-right font-mono text-[10px] text-orange-400 font-bold">{r.opt}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto px-3 py-4 text-[9px] text-slate-500 border-t border-slate-700/40 bg-[#060e18]">
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> Architecture, data flows, and latency metrics are stylized simulations demonstrating the YatraGen recommendation engine.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
