"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const SolutionsCTA: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Dark background with subtle grid */}
            <div 
                className="absolute inset-0 opacity-10" 
                style={{
                    backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }}
            />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Ready to transform your travel offerings?
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto"
                >
                    Join the leading agencies and modern travelers deploying YatraGen to build perfectly optimized itineraries.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link 
                        href="/company/contact" 
                        className="px-8 py-4 w-full sm:w-auto rounded-full bg-accent text-white font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(5,136,33,0.4)] hover:shadow-[0_0_30px_rgba(5,136,33,0.6)]"
                    >
                        Book a Demo
                    </Link>
                    <Link 
                        href="/#products" 
                        className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
                    >
                        Explore Platforms
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
