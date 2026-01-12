"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SoundContextType {
    soundEnabled: boolean;
    toggleSound: () => void;
    playSound: (soundType: SoundType) => void;
}

type SoundType = "transition" | "hover" | "click" | "ambient";

const SoundContext = createContext<SoundContextType | null>(null);

// Sound URLs (using royalty-free sounds)
const sounds: Record<SoundType, string> = {
    transition: "/sounds/wind-soft.mp3",
    hover: "/sounds/bamboo-tap.mp3",
    click: "/sounds/wood-tap.mp3",
    ambient: "/sounds/wind-ambient.mp3",
};

export function SoundProvider({ children }: { children: ReactNode }) {
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [audioCache, setAudioCache] = useState<Record<string, HTMLAudioElement>>({});
    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for mobile
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        // Preload sounds when enabled
        if (soundEnabled && !prefersReducedMotion) {
            const cache: Record<string, HTMLAudioElement> = {};
            Object.entries(sounds).forEach(([key, url]) => {
                const audio = new Audio(url);
                audio.preload = "auto";
                audio.volume = key === "ambient" ? 0.1 : 0.3;
                cache[key] = audio;
            });
            setAudioCache(cache);
        }
    }, [soundEnabled, prefersReducedMotion]);

    const toggleSound = () => {
        // Don't enable sound on mobile by default
        if (isMobile && !soundEnabled) {
            // Still allow toggle, but warn
            console.log("Sound enabled on mobile device");
        }
        setSoundEnabled((prev) => !prev);
    };

    const playSound = (soundType: SoundType) => {
        if (!soundEnabled || prefersReducedMotion) return;

        const audio = audioCache[soundType];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {
                // Autoplay blocked, silent fail
            });
        }
    };

    return (
        <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    const context = useContext(SoundContext);
    if (!context) {
        // Return a safe default when used outside provider
        return {
            soundEnabled: false,
            toggleSound: () => { },
            playSound: () => { },
        };
    }
    return context;
}

// Sound toggle component
export function SoundToggle() {
    const { soundEnabled, toggleSound } = useSound();

    return (
        <button
            onClick={toggleSound}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{
                background: soundEnabled ? "var(--crimson)" : "var(--charcoal)",
                border: "1px solid var(--fog)",
                color: "var(--parchment)",
            }}
            aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
            title={soundEnabled ? "Sound On" : "Sound Off (Click to enable)"}
        >
            {soundEnabled ? (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                </svg>
            ) : (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                </svg>
            )}
        </button>
    );
}
