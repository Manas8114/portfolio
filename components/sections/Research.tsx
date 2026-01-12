"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { achievements } from "@/lib/data";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations/AnimationUtils";

export default function Research() {
    return (
        <section
            id="research"
            className="section min-h-screen relative overflow-hidden"
            style={{ background: "var(--charcoal)" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-15">
                <Image
                    src="/images/scrolls-ancient.png"
                    alt="Ancient scrolls background"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent" />
            </div>

            <div className="container relative z-10 max-w-4xl">
                {/* Section Label */}
                <FadeInView direction="left">
                    <p className="section-subtitle">Scrolls of Honor</p>
                </FadeInView>

                {/* Section Title */}
                <FadeInView delay={0.1}>
                    <h2 className="section-title mb-4">Research & Achievements</h2>
                </FadeInView>

                <FadeInView delay={0.2}>
                    <p
                        className="body-lg max-w-2xl mb-12"
                        style={{ color: "var(--parchment-muted)" }}
                    >
                        Competitions entered. Papers written. Knowledge gained. Each
                        achievement marks a milestone on the path.
                    </p>
                </FadeInView>

                {/* Achievements Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <motion.div
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px"
                        style={{ background: "var(--fog)" }}
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    <StaggerContainer staggerDelay={0.2}>
                        {achievements.map((achievement, index) => (
                            <StaggerItem key={achievement.id}>
                                <motion.div
                                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        } mb-12`}
                                >
                                    {/* Timeline Dot */}
                                    <motion.div
                                        className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 border-2"
                                        style={{
                                            background: achievement.highlight
                                                ? "var(--crimson)"
                                                : "var(--charcoal)",
                                            borderColor: achievement.highlight
                                                ? "var(--crimson)"
                                                : "var(--stone-gray)",
                                        }}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        whileHover={{ scale: 1.3 }}
                                    />

                                    {/* Content */}
                                    <motion.div
                                        className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                            }`}
                                        whileHover={{ x: index % 2 === 0 ? -8 : 8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="card"
                                            whileHover={{
                                                boxShadow: achievement.highlight
                                                    ? "0 0 30px rgba(139, 38, 53, 0.2)"
                                                    : "0 10px 30px rgba(0, 0, 0, 0.3)",
                                            }}
                                        >
                                            {/* Type Badge */}
                                            <motion.span
                                                className="caption inline-block mb-2"
                                                style={{
                                                    color:
                                                        achievement.type === "research"
                                                            ? "var(--crimson)"
                                                            : achievement.type === "competition"
                                                                ? "var(--gold-muted)"
                                                                : "var(--stone-light)",
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {achievement.type.toUpperCase()}
                                            </motion.span>

                                            {/* Title */}
                                            <h3
                                                className="heading-sm mb-2"
                                                style={{ color: "var(--parchment)" }}
                                            >
                                                {achievement.title}
                                            </h3>

                                            {/* Year */}
                                            <p className="body-sm mb-3" style={{ color: "var(--stone-gray)" }}>
                                                {achievement.year}
                                            </p>

                                            {/* Description */}
                                            <p
                                                className="body-base"
                                                style={{ color: "var(--parchment-muted)" }}
                                            >
                                                {achievement.description}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
