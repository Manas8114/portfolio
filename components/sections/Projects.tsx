"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { FadeInView, StaggerContainer, StaggerItem, HoverGlow } from "@/components/animations/AnimationUtils";

interface ProjectCardProps {
    project: (typeof projects)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
    const categoryColors: Record<string, string> = {
        research: "var(--crimson)",
        "ai-ml": "var(--gold-muted)",
        systems: "var(--stone-light)",
        web: "var(--parchment-muted)",
    };

    return (
        <StaggerItem>
            <HoverGlow glowColor="rgba(139, 38, 53, 0.2)">
                <motion.article
                    className="card group cursor-pointer h-full relative overflow-hidden"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Ink ripple effect on hover */}
                    <motion.div
                        className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full pointer-events-none"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 3, opacity: 0.05 }}
                        transition={{ duration: 0.6 }}
                        style={{ background: "var(--crimson)" }}
                    />

                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <motion.span
                            className="caption px-2 py-1 rounded"
                            style={{
                                background: "var(--fog)",
                                color: categoryColors[project.category],
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {project.category.replace("-", " / ").toUpperCase()}
                        </motion.span>
                        {project.featured && (
                            <motion.span
                                className="text-xs flex items-center gap-1"
                                style={{ color: "var(--gold-muted)" }}
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                ★ Featured
                            </motion.span>
                        )}
                    </div>

                    {/* Title */}
                    <h3
                        className="heading-sm mb-3 relative z-10 transition-colors duration-300 group-hover:text-crimson"
                        style={{ color: "var(--parchment)" }}
                    >
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="body-sm mb-4 relative z-10" style={{ color: "var(--parchment-muted)" }}>
                        {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-4 space-y-2 relative z-10">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                            <motion.li
                                key={i}
                                className="body-sm flex items-start gap-2"
                                style={{ color: "var(--stone-gray)" }}
                                initial={{ opacity: 0.7 }}
                                whileHover={{ opacity: 1, x: 4 }}
                            >
                                <motion.span
                                    style={{ color: "var(--crimson)" }}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    →
                                </motion.span>
                                {highlight}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <motion.span
                                key={tech}
                                className="text-xs px-2 py-1 rounded"
                                style={{
                                    background: "var(--fog)",
                                    color: "var(--parchment-muted)",
                                }}
                                whileHover={{
                                    background: "var(--mist)",
                                    scale: 1.05,
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {/* Link */}
                    <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm relative z-10"
                        style={{ color: "var(--stone-gray)" }}
                        whileHover={{ color: "var(--crimson)", x: 4 }}
                    >
                        View on GitHub
                        <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.article>
            </HoverGlow>
        </StaggerItem>
    );
}

export default function Projects() {
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <section
            id="projects"
            className="section min-h-screen relative overflow-hidden"
            style={{ background: "var(--ink-black)" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="/images/battles-storm.png"
                    alt="Battlefield storm background"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/90 to-transparent" />
            </div>

            <div className="container relative z-10">
                {/* Section Label */}
                <FadeInView direction="left">
                    <p className="section-subtitle">Battles Fought</p>
                </FadeInView>

                {/* Section Title */}
                <FadeInView delay={0.1}>
                    <h2 className="section-title mb-4">Projects</h2>
                </FadeInView>

                <FadeInView delay={0.2}>
                    <p
                        className="body-lg max-w-2xl mb-12"
                        style={{ color: "var(--parchment-muted)" }}
                    >
                        Each project represents a challenge faced and a system built. These
                        are not just code — they are solutions forged through research,
                        iteration, and discipline.
                    </p>
                </FadeInView>

                {/* Featured Projects */}
                <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.15}>
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </StaggerContainer>

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <>
                        <FadeInView>
                            <div className="ink-divider" />
                            <h3
                                className="heading-sm mb-8"
                                style={{ color: "var(--parchment)" }}
                            >
                                More Projects
                            </h3>
                        </FadeInView>
                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                            {otherProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </StaggerContainer>
                    </>
                )}
            </div>
        </section>
    );
}
