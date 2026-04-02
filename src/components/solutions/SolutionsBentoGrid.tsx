"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Settings, Eye, Factory, Droplet, Cpu } from "lucide-react";

const solutions = [
    {
        title: "AI for Decarbonization",
        description: "Reduce carbon footprint and achieve net-zero targets using AI-driven continuous intelligence.",
        icon: <Leaf className="w-8 h-8 text-green-500" />,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        gradient: "from-green-500/10 to-transparent border-green-500/20"
    },
    {
        title: "Safety Monitoring",
        description: "Real-time hazard detection and collision avoidance for a zero-harm environment.",
        icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        gradient: "from-blue-500/10 to-transparent border-blue-500/20"
    },
    {
        title: "Quality Inspection",
        description: "Computer vision and Edge AI to detect defects instantly on the production line.",
        icon: <Eye className="w-8 h-8 text-purple-500" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-2",
        gradient: "from-purple-500/10 to-transparent border-purple-500/20"
    },
    {
        title: "Digital Twin",
        description: "Dynamic simulation of industrial processes to predict and optimize outcomes.",
        icon: <Factory className="w-8 h-8 text-orange-500" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        gradient: "from-orange-500/10 to-transparent border-orange-500/20"
    },
    {
        title: "Energy Efficiency",
        description: "Optimize energy consumption and reduce waste across heavy industry operations.",
        icon: <Settings className="w-8 h-8 text-yellow-500" />,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        gradient: "from-yellow-500/10 to-transparent border-yellow-500/20"
    },
    {
        title: "Leakage Detection",
        description: "Identify leaks in pipelines instantly using intelligent vision and sensory data.",
        icon: <Droplet className="w-8 h-8 text-cyan-500" />,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        gradient: "from-cyan-500/10 to-transparent border-cyan-500/20"
    },
    {
        title: "PPE Non-Compliance",
        description: "Automated alert systems for workers lacking proper safety gear on the site.",
        icon: <Cpu className="w-8 h-8 text-red-500" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        gradient: "from-red-500/10 to-transparent border-red-500/20"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const SolutionsBentoGrid: React.FC = () => {
    return (
        <section id="solutions-grid" className="py-24 bg-background relative z-10" style={{ backgroundColor: "var(--background)", color: "var(--foreground)"}}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Solutions Hub</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A comprehensive suite of intelligent solutions designed to tackle the most complex challenges in continuous and discrete manufacturing.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[250px]"
                >
                    {solutions.map((solution, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between group border bg-gradient-to-br bg-card/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(5,136,33,0.15)] transition-all duration-300 ${solution.colSpan} ${solution.rowSpan} ${solution.gradient}`}
                            style={{ borderColor: "var(--border)" }}
                        >
                            {/* Hover Reveal Background */}
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="p-3 bg-background/80 rounded-lg inline-block mb-4 shadow-sm border border-border">
                                    {solution.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                                    {solution.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>

                            {/* Decorative Arrow */}
                            <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
