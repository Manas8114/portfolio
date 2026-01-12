"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/lib/data";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations/AnimationUtils";

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="section min-h-screen relative overflow-hidden"
            style={{ background: "var(--charcoal)" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-15">
                <Image
                    src="/images/seals-wax.png"
                    alt="Wax seals background"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent" />
            </div>

            <div className="container relative z-10 max-w-4xl">
                {/* Section Label */}
                <FadeInView direction="left">
                    <p className="section-subtitle">Seals of Mastery</p>
                </FadeInView>

                {/* Section Title */}
                <FadeInView delay={0.1}>
                    <h2 className="section-title mb-4">Certificates</h2>
                </FadeInView>

                <FadeInView delay={0.2}>
                    <p
                        className="body-lg max-w-2xl mb-12"
                        style={{ color: "var(--parchment-muted)" }}
                    >
                        Formal recognition of knowledge acquired. Each seal represents a
                        deliberate step toward mastery.
                    </p>
                </FadeInView>

                {/* Certificates Grid */}
                <StaggerContainer
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    staggerDelay={0.1}
                >
                    {certificates.map((cert) => (
                        <StaggerItem key={cert.id}>
                            <motion.div
                                className="card text-center h-full"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 15px 40px rgba(139, 38, 53, 0.15)",
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Seal Icon */}
                                <motion.div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center relative"
                                    style={{ background: "var(--fog)" }}
                                    whileHover={{
                                        scale: 1.1,
                                        background: "var(--crimson)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.span
                                        className="text-2xl"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        📜
                                    </motion.span>
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className="heading-sm mb-2"
                                    style={{ color: "var(--parchment)" }}
                                >
                                    {cert.title}
                                </h3>

                                {/* Issuer */}
                                <p className="body-sm mb-3" style={{ color: "var(--crimson)" }}>
                                    {cert.issuer}
                                </p>

                                {/* Context */}
                                <p className="body-sm" style={{ color: "var(--stone-gray)" }}>
                                    {cert.context}
                                </p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
