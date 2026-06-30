"use client";

import React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type MenuItem, type AnimationDirection } from "./navbar-data";

interface DesktopDropdownProps {
    isOpen: boolean;
    activeIndex: number | null;
    menuItems: MenuItem[];
    animationDirection: AnimationDirection;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onAnimationComplete: () => void;
}

const containerVariants: Variants = {
    closed: { opacity: 0, pointerEvents: "none" as const },
    open: { opacity: 1, pointerEvents: "auto" as const },
};

export const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
    isOpen,
    activeIndex,
    menuItems,
    animationDirection,
    onMouseEnter,
    onMouseLeave,
    onAnimationComplete,
}) => {
    const contentVariants: { [key in AnimationDirection]: Variants } = {
        "right-to-left": {
            initial: { opacity: 0, x: 100 },
            animate: {
                opacity: 1,
                x: 0,
                transition: {
                    opacity: { duration: 0.2 },
                    x: { duration: 0.3, ease: "easeOut" },
                },
            },
            exit: {
                opacity: 0,
                x: -100,
                transition: {
                    opacity: { duration: 0.2 },
                    x: { duration: 0.3, ease: "easeIn" },
                },
            },
        },
        "left-to-right": {
            initial: { opacity: 0, x: -100 },
            animate: {
                opacity: 1,
                x: 0,
                transition: {
                    opacity: { duration: 0.2 },
                    x: { duration: 0.3, ease: "easeOut" },
                },
            },
            exit: {
                opacity: 0,
                x: 100,
                transition: {
                    opacity: { duration: 0.2 },
                    x: { duration: 0.3, ease: "easeIn" },
                },
            },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && activeIndex !== null && (
                <motion.div
                    key="desktop-dropdown-container"
                    className="hidden lg:block absolute top-[64px] left-0 right-0 shadow-2xl border-t"
                    style={{
                        borderColor: "var(--nav-border)",
                        backgroundColor: "#010206",
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={containerVariants}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onAnimationComplete={onAnimationComplete}
                >
                    <AnimatePresence mode="wait">
                        {menuItems[activeIndex]?.dropdownData && (
                            <motion.div
                                key={`desktop-dropdown-content-${activeIndex}`}
                                variants={contentVariants[animationDirection]}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="relative z-10 max-w-screen-xl mx-auto p-8 flex gap-8"
                            >
                                {/* Left side: Navigation Links */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-8 border-b pb-4" style={{ borderColor: "var(--border)" }}>
                                        <h2 className="text-xl font-bold uppercase tracking-tighter italic" style={{ color: "var(--foreground)" }}>
                                            {menuItems[activeIndex]?.label}
                                        </h2>
                                        <Link
                                            href={menuItems[activeIndex]?.href ?? "#"}
                                            className="text-xs font-bold uppercase tracking-widest hover:opacity-80 no-underline transition-opacity flex items-center gap-2"
                                            style={{ color: "#00A755" }}
                                        >
                                            Explore All <span className="text-lg leading-none">→</span>
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                        {menuItems[activeIndex]?.dropdownData?.map(
                                            (column, colIndex) => (
                                                <div key={`desktop-col-${colIndex}`}>
                                                    <h3
                                                        className="mb-4 text-[0.65rem] font-extrabold uppercase tracking-widest"
                                                        style={{ color: "var(--muted-foreground)" }}
                                                    >
                                                        {column.heading}
                                                    </h3>
                                                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                                                        {column.links?.map((link, linkIndex) => (
                                                            <li
                                                                key={`desktop-link-${colIndex}-${linkIndex}`}
                                                            >
                                                                <Link
                                                                    href={link.href}
                                                                    className="block py-1 text-sm font-medium no-underline transition-all duration-200 hover:translate-x-1"
                                                                    style={{ color: "var(--foreground)"}}
                                                                    onMouseEnter={(e) =>
                                                                    (e.currentTarget.style.color =
                                                                        "var(--accent)")
                                                                    }
                                                                    onMouseLeave={(e) =>
                                                                    (e.currentTarget.style.color =
                                                                        "var(--foreground)")
                                                                    }
                                                                >
                                                                    {link.text}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Right side: Preview Image */}
                                {menuItems[activeIndex]?.previewImage && (
                                    <div className="hidden lg:block w-[300px] xl:w-[400px] shrink-0 border rounded-lg overflow-hidden relative" style={{ borderColor: "var(--border)" }}>
                                        <div className="absolute inset-0 bg-accent/10 z-10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                            <span className="bg-background text-foreground px-4 py-2 rounded-full text-[0.65rem] font-bold uppercase tracking-widest">
                                                View {menuItems[activeIndex]?.label}
                                            </span>
                                        </div>
                                        <Image
                                            src={menuItems[activeIndex]?.previewImage ?? ""}
                                            alt={`${menuItems[activeIndex]?.label} preview`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1280px) 300px, 400px"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
