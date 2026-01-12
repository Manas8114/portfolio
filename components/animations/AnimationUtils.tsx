"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

// ================================
// ANIMATION VARIANTS LIBRARY
// Cinematic, chapter-like transitions
// ================================

// Fade up with blur - ink-like reveal
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Slide from left with ink trail effect
export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Slide from right
export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Scale fade - for cards and interactive elements
export const scaleFade: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.92,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Stagger children container
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

// Stagger item
export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Chapter transition - for section entrances
export const chapterReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// ================================
// ANIMATION WRAPPER COMPONENTS
// ================================

interface FadeInViewProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "left" | "right" | "none";
    className?: string;
    threshold?: number;
}

export function FadeInView({
    children,
    delay = 0,
    duration = 0.8,
    direction = "up",
    className = "",
    threshold = 0.2,
}: FadeInViewProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    const directions = {
        up: { y: 40, x: 0 },
        left: { y: 0, x: -60 },
        right: { y: 0, x: 60 },
        none: { y: 0, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction],
                filter: "blur(6px)",
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        filter: "blur(0px)",
                    }
                    : {}
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    threshold?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    threshold = 0.1,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.1,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    return (
        <motion.div className={className} variants={staggerItem}>
            {children}
        </motion.div>
    );
}

// ================================
// HOVER EFFECTS
// ================================

interface HoverGlowProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export function HoverGlow({
    children,
    className = "",
    glowColor = "rgba(139, 38, 53, 0.3)",
}: HoverGlowProps) {
    return (
        <motion.div
            className={className}
            whileHover={{
                scale: 1.02,
                boxShadow: `0 0 30px ${glowColor}, 0 10px 40px rgba(0, 0, 0, 0.3)`,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}

// Ink ripple effect on hover
export function InkRipple({ className = "" }: { className?: string }) {
    return (
        <motion.div
            className={`absolute inset-0 pointer-events-none ${className}`}
            initial={{ scale: 0, opacity: 0.5 }}
            whileHover={{
                scale: 2,
                opacity: 0,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            style={{
                background: "radial-gradient(circle, var(--crimson) 0%, transparent 70%)",
                borderRadius: "50%",
            }}
        />
    );
}

// ================================
// PAGE TRANSITION WRAPPER
// ================================

interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

// ================================
// SECTION TRANSITION HOOK
// ================================

export function useSectionAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return { ref, isInView };
}
