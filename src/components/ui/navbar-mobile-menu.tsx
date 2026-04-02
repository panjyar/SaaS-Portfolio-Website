"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type MenuItem } from "./navbar-data";

interface MobileMenuProps {
    isOpen: boolean;
    menuItems: MenuItem[];
    onClose: () => void;
}

const mobileMenuVariants: Variants = {
    closed: { x: "100vw" },
    open: { x: 0 },
};

const mobileDropdownVariants: Variants = {
    closed: { height: 0, opacity: 0, overflow: "hidden" },
    open: { height: "auto", opacity: 1, overflow: "visible" },
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    menuItems,
    onClose,
}) => {
    const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setActiveDropdownIndex(null);
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleDropdown = (index: number) => {
        setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
    };

    const handleLinkClick = () => {
        onClose();
        setActiveDropdownIndex(null);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobile-menu-overlay"
                    className="fixed top-0 left-0 w-screen h-screen z-50 lg:hidden"
                    style={{ background: "rgba(0,0,0,0.95)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        key="mobile-menu-content"
                        className="fixed top-0 right-0 h-screen w-screen shadow-lg flex flex-col p-6 overflow-y-auto"
                        style={{
                            background: "#010206",
                            color: "var(--foreground)",
                        }}
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 focus:outline-none"
                            onClick={onClose}
                            aria-label="Close mobile menu"
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Logo in mobile menu */}
                        <div className="mb-6">
                            <Image
                                src="/images/lnslogo.png"
                                alt="LivNSense Logo"
                                width={110}
                                height={30}
                                className="object-contain"
                                draggable={false}
                            />
                        </div>

                        <ul className="list-none p-0 m-0 mt-2 flex flex-col gap-2">
                            {menuItems.map((item, index) => (
                                <li key={`mobile-menu-${index}`}>
                                    {item.dropdownData ? (
                                        <>
                                            <button
                                                className="flex justify-between items-center w-full text-left py-4 focus:outline-none text-[0.65rem] font-extrabold uppercase tracking-widest"
                                                onClick={() => toggleDropdown(index)}
                                                aria-expanded={activeDropdownIndex === index}
                                                style={{
                                                    color:
                                                        activeDropdownIndex === index
                                                            ? "var(--primary)"
                                                            : "var(--foreground)",
                                                    background: "transparent",
                                                    border: "none",
                                                    borderBottom: "1px solid var(--border)",
                                                }}
                                            >
                                                {item.label}
                                                <svg
                                                    className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdownIndex === index
                                                        ? "rotate-90"
                                                        : "rotate-0"
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdownIndex === index &&
                                                    item.dropdownData && (
                                                        <motion.div
                                                            key={`mobile-dropdown-content-${index}`}
                                                            initial="closed"
                                                            animate="open"
                                                            exit="closed"
                                                            variants={mobileDropdownVariants}
                                                            transition={{
                                                                duration: 0.3,
                                                                ease: "easeInOut",
                                                            }}
                                                            className="mt-1 pl-4"
                                                            style={{
                                                                borderLeft: "2px solid var(--accent)",
                                                            }}
                                                        >
                                                            {item.dropdownData.map((column, colIndex) => (
                                                                <div
                                                                    key={`mobile-col-${colIndex}`}
                                                                    className="mb-4"
                                                                >
                                                                    <h4
                                                                        className="text-[0.6rem] font-extrabold mb-3 uppercase tracking-widest mt-4"
                                                                        style={{
                                                                            color: "var(--muted-foreground)",
                                                                        }}
                                                                    >
                                                                        {column.heading}
                                                                    </h4>
                                                                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                                                                        {column.links.map((link, linkIndex) => (
                                                                            <li
                                                                                key={`mobile-link-${colIndex}-${linkIndex}`}
                                                                            >
                                                                                <Link
                                                                                    href={link.href}
                                                                                    className="block py-1.5 text-xs font-medium no-underline"
                                                                                    style={{
                                                                                        color: "var(--foreground)",
                                                                                        opacity: 0.8,
                                                                                    }}
                                                                                    onClick={handleLinkClick}
                                                                                >
                                                                                    {link.text}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href ?? "#"}
                                            className="block py-4 no-underline text-[0.65rem] font-extrabold uppercase tracking-widest"
                                            style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
                                            onClick={handleLinkClick}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li
                                className="mt-6 flex flex-col gap-3"
                            >
                                <Link
                                    href="/company/contact"
                                    className="text-center text-[0.65rem] tracking-widest font-extrabold px-6 py-3 rounded-sm no-underline uppercase"
                                    style={{
                                        background: "var(--primary)",
                                        color: "var(--background)",
                                    }}
                                    onClick={handleLinkClick}
                                >
                                    Request Demo
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
