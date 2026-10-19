"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Eye, Users, Bell, Zap } from "lucide-react";

export default function DarshanAISection() {
  const features = [
    { title: "PPE Compliance", desc: "Automated monitoring of safety gear and protocols.", icon: <ShieldAlert className="w-5 h-5" /> },
    { title: "Hazard Detection", desc: "Real-time identification of unsafe conditions.", icon: <Eye className="w-5 h-5" /> },
    { title: "Worker Safety", desc: "Behavior analytics to prevent workplace incidents.", icon: <Users className="w-5 h-5" /> },
    { title: "Proactive Alerts", desc: "Instant notifications before accidents occur.", icon: <Bell className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 px-6 bg-[#010206] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-video flex items-center justify-center">
               <p className="text-gray-500 font-bold uppercase tracking-widest text-center px-6">Vision AI Safety Monitoring<br/>(Construction Site Visual)</p>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#FE9A00] font-bold tracking-wider uppercase text-sm mb-4">DarshanAI™ – Vision AI Co-Pilot</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforming Industrial <span className="text-[#FE9A00]">EHS</span> with AI Intelligence
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              DarshanAI™ is the world’s first AI-powered industrial safety co-pilot, designed to monitor industrial environments in real time and ensure proactive safety compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <div key={i} className="relative group">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-lg bg-[#FE9A00]/10 border border-[#FE9A00]/20 text-[#FE9A00]">
                      {feat.icon}
                    </div>
                    <h4 className="text-white font-bold">{feat.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FE9A00]/20 to-transparent border-l-4 border-[#FE9A00]">
               <Zap className="w-8 h-8 text-[#FE9A00] shrink-0" />
               <p className="text-white font-medium italic">&quot;Intelligence for a safer, sustainable, industrial planet.&quot;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
