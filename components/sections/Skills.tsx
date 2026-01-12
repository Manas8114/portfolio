"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/lib/data";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations/AnimationUtils";

interface SkillBarProps {
    name: string;
    level: number;
}

function SkillBar({ name, level }: SkillBarProps) {
    return (
        <StaggerItem className="mb-4">
            <div className="flex justify-between mb-2">
                <span className="body-sm" style={{ color: "var(--parchment)" }}>
                    {name}
                </span>
                <span className="caption">{level}%</span>
            </div>
            <div className="skill-bar relative overflow-hidden">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: `${level}%`, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                />
                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: "200%", opacity: [0, 0.3, 0] }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        width: "50%",
                    }}
                />
            </div>
        </StaggerItem>
    );
}

interface SkillCategoryProps {
    title: string;
    icon: string;
    skills: { name: string; level: number }[];
}

function SkillCategory({ title, icon, skills: categorySkills }: SkillCategoryProps) {
    return (
        <motion.div
            className="card"
            whileHover={{
                y: -4,
                boxShadow: "0 10px 40px rgba(139, 38, 53, 0.15)",
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center gap-3 mb-6">
                <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                >
                    {icon}
                </motion.span>
                <h3 className="heading-sm" style={{ color: "var(--parchment)" }}>
                    {title}
                </h3>
            </div>

            <StaggerContainer staggerDelay={0.08}>
                {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </StaggerContainer>
        </motion.div>
    );
}

export default function Skills() {
    const categories = [
        { title: "Languages", icon: "⌨️", skills: skills.languages },
        { title: "AI / ML", icon: "🧠", skills: skills.aiml },
        { title: "Backend", icon: "⚙️", skills: skills.backend },
        { title: "Frontend", icon: "🎨", skills: skills.frontend },
        { title: "Tools & DevOps", icon: "🔧", skills: skills.tools },
    ];

    return (
        <section
            id="skills"
            className="section min-h-screen relative overflow-hidden"
            style={{ background: "var(--charcoal)" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-15">
                <Image
                    src="/images/skills-arsenal.png"
                    alt="Japanese weapons arsenal"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent" />
            </div>

            <div className="container relative z-10">
                {/* Section Label */}
                <FadeInView direction="left">
                    <p className="section-subtitle">The Arsenal</p>
                </FadeInView>

                {/* Section Title */}
                <FadeInView delay={0.1}>
                    <h2 className="section-title mb-4">Skills</h2>
                </FadeInView>

                <FadeInView delay={0.2}>
                    <p
                        className="body-lg max-w-2xl mb-12"
                        style={{ color: "var(--parchment-muted)" }}
                    >
                        Tools forged through practice. Mastery earned through discipline.
                    </p>
                </FadeInView>

                {/* Skills Grid */}
                <StaggerContainer
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    staggerDelay={0.1}
                >
                    {categories.map((category) => (
                        <StaggerItem key={category.title}>
                            <SkillCategory
                                title={category.title}
                                icon={category.icon}
                                skills={category.skills}
                            />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
