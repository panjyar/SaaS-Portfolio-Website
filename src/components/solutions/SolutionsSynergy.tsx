"use client";

import React from "react";
import { motion } from "framer-motion";

export const SolutionsSynergy: React.FC = () => {
    return (
        <section className="py-24 bg-background relative z-10" style={{ backgroundColor: "var(--background)", color: "var(--foreground)"}}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Powered by Our Core Platforms</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our intelligent solutions are seamlessly integrated and driven by LivNSense's flagship AI platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative mt-20">
                    {/* Background Connector Line */}
                    <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-orange-500/50 via-transparent to-blue-500/50 -translate-y-1/2 z-0">
                        <motion.div 
                            className="w-1/4 h-full bg-accent blur-sm"
                            animate={{ x: ["0%", "400%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        />
                    </div>

                    {/* YatraGen and Darshan AI Side */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div 
                            className="w-32 h-32 rounded-3xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-black text-orange-500 tracking-wider">YatraGen and Darshan AI</h3>
                        </motion.div>
                        <ul className="text-left space-y-4">
                            {[
                                "AI for Decarbonization",
                                "Energy Efficiency",
                                "Carbon Intelligence",
                                "Predictive Emissions"
                            ].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-muted-foreground"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* DarshanAI Side */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div 
                            className="w-32 h-32 rounded-3xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-black text-blue-500 tracking-wider">DarshanAI</h3>
                        </motion.div>
                        <ul className="text-left space-y-4">
                            {[
                                "Safety Monitoring",
                                "PPE Non-Compliance",
                                "Quality Inspection",
                                "Leakage Detection",
                                "Digital Twin"
                            ].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-muted-foreground"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
