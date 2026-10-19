"use client";

import React from "react";
import { motion } from "framer-motion";

export const SolutionsImpact: React.FC = () => {
    const metrics = [
        { label: "Reduction in Planning Time", value: "80%" },
        { label: "Preference Matching Accuracy", value: "99.9%" },
        { label: "Faster Group Coordination", value: "5x" },
        { label: "Agency Revenue Lift", value: "35%" },
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-accent/5 backdrop-blur-sm border-y border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center text-center p-6"
                        >
                            <h4 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 mb-4 drop-shadow-sm">
                                {metric.value}
                            </h4>
                            <p className="text-lg text-muted-foreground font-medium uppercase tracking-wider">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Background decor */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full pointer-events-none -translate-x-[20%] opacity-10">
                 <div className="w-[1000px] h-[1000px] bg-accent rounded-full blur-[120px] mix-blend-screen" />
            </div>
        </section>
    );
};
