"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, strengths } from "@/lib/data";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations/AnimationUtils";

export default function About() {
    return (
        <section
            id="about"
            className="section min-h-screen relative overflow-hidden"
            style={{ background: "var(--ink-black)" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="/images/warrior-abstract.png"
                    alt="Abstract warrior background"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/80 to-transparent" />
            </div>

            <div className="container relative z-10 max-w-5xl">
                {/* Section Label */}
                <FadeInView direction="left" delay={0}>
                    <p className="section-subtitle">The Warrior</p>
                </FadeInView>

                {/* Section Title */}
                <FadeInView delay={0.1}>
                    <h2 className="section-title mb-12">About</h2>
                </FadeInView>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Philosophy */}
                    <FadeInView delay={0.2}>
                        <p
                            className="text-2xl md:text-3xl mb-6 leading-relaxed"
                            style={{
                                fontFamily: "var(--font-noto-serif)",
                                color: "var(--parchment)",
                            }}
                        >
                            I don&apos;t build to ship —{" "}
                            <span style={{ color: "var(--crimson)" }}>
                                I build to understand.
                            </span>
                        </p>

                        <p
                            className="body-lg mb-6"
                            style={{ color: "var(--parchment-muted)" }}
                        >
                            Currently pursuing B.Tech at{" "}
                            <span style={{ color: "var(--parchment)" }}>
                                {personalInfo.education.institution}
                            </span>
                            . Every project is a question. Every system is an answer waiting to
                            be refined.
                        </p>

                        <p className="body-base mb-6" style={{ color: "var(--stone-gray)" }}>
                            My path: from competitive hackathons to production systems to
                            research-grade solutions. The work is never finished. The discipline
                            continues.
                        </p>

                        {/* Languages spoken */}
                        <div className="flex flex-wrap gap-3">
                            {personalInfo.languages.map((lang) => (
                                <span
                                    key={lang.name}
                                    className="text-xs px-3 py-1 rounded"
                                    style={{
                                        background: "var(--fog)",
                                        color: "var(--parchment-muted)",
                                    }}
                                >
                                    {lang.name} ({lang.level})
                                </span>
                            ))}
                        </div>
                    </FadeInView>

                    {/* Right Column - Strengths */}
                    <FadeInView delay={0.4} direction="right">
                        <h3
                            className="heading-sm mb-6"
                            style={{ color: "var(--parchment)" }}
                        >
                            Core Strengths
                        </h3>

                        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                            {strengths.map((strength) => (
                                <StaggerItem key={strength.title}>
                                    <motion.div
                                        className="flex items-start gap-4 p-4 rounded"
                                        style={{ background: "var(--fog)" }}
                                        whileHover={{
                                            x: 8,
                                            background: "var(--mist)",
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className="text-2xl">{strength.icon}</span>
                                        <div>
                                            <h4
                                                className="font-semibold mb-1"
                                                style={{ color: "var(--parchment)" }}
                                            >
                                                {strength.title}
                                            </h4>
                                            <p className="body-sm" style={{ color: "var(--stone-gray)" }}>
                                                {strength.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </FadeInView>
                </div>

                {/* Interests Section */}
                <FadeInView delay={0.3}>
                    <div className="ink-divider" />
                    <div className="flex flex-wrap items-center gap-6 mt-8">
                        <span className="caption">Beyond Code:</span>
                        {personalInfo.interests.map((interest) => (
                            <motion.span
                                key={interest}
                                className="text-sm px-4 py-2 rounded-full"
                                style={{
                                    background: "var(--ink-black)",
                                    color: "var(--parchment-muted)",
                                    border: "1px solid var(--fog)",
                                }}
                                whileHover={{
                                    borderColor: "var(--crimson)",
                                    color: "var(--parchment)",
                                }}
                            >
                                {interest}
                            </motion.span>
                        ))}
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
