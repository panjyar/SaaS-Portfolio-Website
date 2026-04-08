"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { menuItems, type AnimationDirection } from "./navbar-data";
import { DesktopDropdown } from "./navbar-desktop-dropdown";
import { MobileMenu } from "./navbar-mobile-menu";

// ─── Navbar Component ───────────────────────────────────────

export const Navbar: React.FC = () => {
    const [activeMenuItemIndex, setActiveMenuItemIndex] = useState<number | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [animationDirection, setAnimationDirection] = useState<AnimationDirection>("right-to-left");
    const closeTimeoutRef = useRef<number | null>(null);
    const prevActiveMenuItemIndex = useRef<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        if (activeMenuItemIndex !== null && prevActiveMenuItemIndex.current !== null) {
            if (activeMenuItemIndex > prevActiveMenuItemIndex.current) {
                setAnimationDirection("right-to-left");
            } else {
                setAnimationDirection("left-to-right");
            }
        } else {
            setAnimationDirection("right-to-left");
        }
        prevActiveMenuItemIndex.current = activeMenuItemIndex;
    }, [activeMenuItemIndex]);

    const openDropdown = (index: number) => {
        if (closeTimeoutRef.current !== null) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveMenuItemIndex(index);
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        if (closeTimeoutRef.current !== null) {
            clearTimeout(closeTimeoutRef.current);
        }
        closeTimeoutRef.current = window.setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };

    const handleDropdownTransitionEnd = () => {
        if (!isDropdownOpen) {
            setActiveMenuItemIndex(null);
            prevActiveMenuItemIndex.current = null;
        }
    };

    const handleDropdownMouseEnter = () => {
        if (closeTimeoutRef.current !== null) clearTimeout(closeTimeoutRef.current);
    };

    return (
        <motion.nav className="relative z-50 border-b bg-background/50 backdrop-blur-md" style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
            {/* Diagonal Fade Grid Background - Top Left */}
            <div className="h-[64px] overflow-hidden -z-10 w-[50%] bg-transparent absolute top-0 left-0 pointer-events-none">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundSize: "32px 32px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 80% at 0% 0%, #05972e 50%, transparent 90%)",
                        maskImage:
                            "radial-gradient(ellipse 80% 80% at 0% 0%, #05972e 50%, transparent 90%)",
                    }}
                />
            </div>

            <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto px-4 relative z-10">
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <Image
                        src="https://vicasinfo.livnsense.com/media/images/lnslogo.png"
                        alt="LivNSense Logo"
                        width={60}
                        height={20}
                        className="object-contain"
                        draggable={false}
                    />
                </Link>

                {/* Desktop Menu Items */}
                <ul
                    className="hidden lg:flex mx-6 list-none p-0 m-0 h-full border-x"
                    style={{ borderColor: "var(--border)" }}
                    onMouseLeave={closeDropdown}
                >
                    {menuItems.map((item, index) => {
                        const isActive = activeMenuItemIndex === index && isDropdownOpen;
                        return (
                            <li
                                key={`desktop-menu-${index}`}
                                className={`flex items-center justify-center h-full relative cursor-pointer font-extrabold uppercase tracking-widest transition-colors shrink-0 ${isActive
                                    ? "bg-accent/10 text-foreground"
                                    : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                                    }`}
                                style={{
                                    borderRight: index !== menuItems.length - 1 ? "1px solid var(--border)" : "none",
                                }}
                                onMouseEnter={() => openDropdown(index)}
                            >
                                <Link
                                    href={item.href}
                                    className="px-3 xl:px-5 w-full h-full flex items-center justify-center text-[0.6rem] xl:text-[0.65rem] no-underline transition-colors duration-200 whitespace-nowrap relative"
                                >
                                    {item.label}
                                </Link>

                                {/* Green Indicator Dot */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                                        style={{ background: "#058821ff" }}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </li>
                        )
                    })}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3 shrink-0 pl-6 h-full border-l" style={{ borderColor: "var(--border)" }}>
                    <Link
                        href="/company/contact"
                        className="text-[0.65rem] font-extrabold px-6 py-2 rounded-sm transition-all duration-200 no-underline uppercase tracking-widest border border-transparent hover:border-border"
                        style={{
                            background: "var(--primary)",
                            color: "var(--background)",
                        }}
                    >
                        Request Demo
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden focus:outline-none z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    style={{ color: "var(--foreground)" }}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Desktop Mega Dropdown */}
            <DesktopDropdown
                isOpen={isDropdownOpen}
                activeIndex={activeMenuItemIndex}
                menuItems={menuItems}
                animationDirection={animationDirection}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={closeDropdown}
                onAnimationComplete={handleDropdownTransitionEnd}
            />

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                menuItems={menuItems}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </motion.nav>
    );
};
