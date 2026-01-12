"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Research", href: "#research" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: isScrolled
                    ? "rgba(13, 13, 13, 0.95)"
                    : "transparent",
                backdropFilter: isScrolled ? "blur(10px)" : "none",
                borderBottom: isScrolled ? "1px solid var(--fog)" : "none",
            }}
        >
            <motion.div style={{ opacity: headerOpacity }}>
                <nav className="container flex items-center justify-between py-4">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="text-xl font-bold"
                        style={{
                            fontFamily: "var(--font-noto-serif)",
                            color: "var(--parchment)",
                        }}
                    >
                        道
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="body-sm transition-colors hover:text-crimson"
                                    style={{ color: "var(--parchment-muted)" }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        style={{ color: "var(--parchment)" }}
                        aria-label="Menu"
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
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </nav>
            </motion.div>
        </motion.header>
    );
}
