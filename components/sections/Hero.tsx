"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { personalInfo } from "@/lib/data";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    drift: number;
}

interface RainDrop {
    id: number;
    x: number;
    delay: number;
    duration: number;
    opacity: number;
}

export default function Hero() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);
    const [textRevealed, setTextRevealed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

    // Smooth spring physics for parallax
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    useEffect(() => {
        // Wind-driven particles (leaves/petals)
        const newParticles: Particle[] = [];
        for (let i = 0; i < 25; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 6 + 3,
                duration: Math.random() * 15 + 20,
                delay: Math.random() * 8,
                opacity: Math.random() * 0.4 + 0.2,
                drift: Math.random() * 200 - 100,
            });
        }
        setParticles(newParticles);

        // Rain drops (subtle, atmospheric)
        const drops: RainDrop[] = [];
        for (let i = 0; i < 40; i++) {
            drops.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 3,
                duration: Math.random() * 0.8 + 0.5,
                opacity: Math.random() * 0.15 + 0.05,
            });
        }
        setRainDrops(drops);

        // Trigger text reveal after mount
        const timer = setTimeout(() => setTextRevealed(true), 500);
        return () => clearTimeout(timer);
    }, []);

    // Ink reveal animation variants
    const inkReveal = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
        },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                delay,
                ease: "easeOut" as const,
            },
        }),
    };

    const letterReveal = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                delay: 0.8 + i * 0.05,
                ease: "easeOut" as const,
            },
        }),
    };

    const title = "Building Systems";
    const subtitle = "That Matter";

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: "var(--ink-black)" }}
        >
            {/* Parallax Background Layer */}
            {/* Parallax Background Layer */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: smoothY }}
            >
                <Image
                    src="/images/hero-path.png"
                    alt="Lonely samurai silhouette on a hill"
                    fill
                    priority
                    className="object-cover opacity-60"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink-black/30 via-transparent to-ink-black/90" />
            </motion.div>

            {/* Rain Effect (atmospheric, inspired by artwork) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {rainDrops.map((drop) => (
                    <motion.div
                        key={drop.id}
                        className="absolute w-px"
                        style={{
                            left: `${drop.x}%`,
                            top: "-20px",
                            height: "15px",
                            background: `linear-gradient(to bottom, transparent, rgba(245, 240, 232, ${drop.opacity}))`,
                        }}
                        animate={{
                            y: ["0vh", "110vh"],
                        }}
                        transition={{
                            duration: drop.duration,
                            delay: drop.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Wind-driven Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            bottom: "-5%",
                            width: particle.size,
                            height: particle.size,
                            background: `radial-gradient(circle, var(--parchment-muted), transparent)`,
                        }}
                        animate={{
                            y: [0, -window.innerHeight * 1.3],
                            x: [0, particle.drift],
                            opacity: [0, particle.opacity, particle.opacity, 0],
                            rotate: [0, 360],
                            scale: [0.5, 1, 0.8],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>

            {/* Mist/Fog layers */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 100%, rgba(42, 42, 42, 0.6) 0%, transparent 50%)",
                }}
            />

            {/* Content */}
            <motion.div
                className="container relative z-10 text-center"
                style={{ opacity, scale }}
            >
                {/* Japanese Characters - Ink Reveal */}
                <motion.p
                    className="kanji text-2xl md:text-4xl mb-6"
                    style={{ color: "#4a4a4a" }}
                    variants={inkReveal}
                    initial="hidden"
                    animate={textRevealed ? "visible" : "hidden"}
                    custom={0}
                >
                    大道無門
                </motion.p>

                {/* Tagline */}
                <motion.p
                    className="text-sm md:text-base tracking-[0.3em] uppercase mb-8"
                    style={{ color: "#4a4a4a" }}
                    variants={inkReveal}
                    initial="hidden"
                    animate={textRevealed ? "visible" : "hidden"}
                    custom={0.3}
                >
                    The Path Has No Gate
                </motion.p>

                {/* Main Title - Letter by letter reveal */}
                <div className="overflow-hidden mb-2">
                    <motion.h1
                        className="heading-xl inline-flex flex-wrap justify-center"
                        style={{
                            fontFamily: "var(--font-noto-serif)",
                            color: "var(--parchment)",
                        }}
                    >
                        {title.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterReveal}
                                initial="hidden"
                                animate={textRevealed ? "visible" : "hidden"}
                                custom={i}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Subtitle with crimson */}
                <div className="overflow-hidden mb-6">
                    <motion.h1
                        className="heading-xl inline-flex flex-wrap justify-center"
                        style={{
                            fontFamily: "var(--font-noto-serif)",
                            color: "var(--crimson)",
                        }}
                    >
                        {subtitle.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterReveal}
                                initial="hidden"
                                animate={textRevealed ? "visible" : "hidden"}
                                custom={i + title.length}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Role Description */}
                <motion.p
                    className="body-lg max-w-2xl mx-auto mb-4"
                    style={{ color: "#6b6b6b" }}
                    variants={inkReveal}
                    initial="hidden"
                    animate={textRevealed ? "visible" : "hidden"}
                    custom={1.5}
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.p
                    className="body-base max-w-xl mx-auto mb-12"
                    style={{ color: "#4a4a4a" }}
                    variants={inkReveal}
                    initial="hidden"
                    animate={textRevealed ? "visible" : "hidden"}
                    custom={1.8}
                >
                    Data Science • Machine Learning • Full-Stack Development
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={inkReveal}
                    initial="hidden"
                    animate={textRevealed ? "visible" : "hidden"}
                    custom={2.2}
                >
                    <motion.a
                        href="#about"
                        className="btn btn-outline group flex items-center gap-2"
                        whileHover={{ scale: 1.05, borderColor: "var(--crimson)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Explore My Journey</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to top, var(--ink-black) 0%, transparent 100%)",
                }}
            />

            {/* Side Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            linear-gradient(90deg, var(--ink-black) 0%, transparent 15%, transparent 85%, var(--ink-black) 100%)
          `,
                }}
            />
        </section >
    );
}
