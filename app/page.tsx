"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabNav, TabId, tabs, pageTransitionVariants, getTabDirection } from "@/components/TabNav";
import { SoundProvider, SoundToggle } from "@/components/SoundSystem";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

// Map tabs to components
const tabComponents: Record<TabId, React.ComponentType> = {
  path: Hero,
  warrior: About,
  arsenal: Skills,
  battles: Projects,
  scrolls: Research,
  seals: Certificates,
  call: Contact,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("path");
  const [direction, setDirection] = useState(0);
  const [previousTab, setPreviousTab] = useState<TabId>("path");

  const handleTabChange = useCallback(
    (newTab: TabId) => {
      const newDirection = getTabDirection(activeTab, newTab);
      setDirection(newDirection);
      setPreviousTab(activeTab);
      setActiveTab(newTab);

      // Update URL hash without full navigation
      window.history.pushState(null, "", `#${newTab}`);
    },
    [activeTab]
  );

  // Handle browser back/forward
  useMemo(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash.slice(1) as TabId;
        if (tabs.some((t) => t.id === hash)) {
          setActiveTab(hash);
        }
      };

      window.addEventListener("hashchange", handleHashChange);

      // Check initial hash
      const initialHash = window.location.hash.slice(1) as TabId;
      if (tabs.some((t) => t.id === initialHash)) {
        setActiveTab(initialHash);
      }

      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const ActiveComponent = tabComponents[activeTab];

  return (
    <SoundProvider>
      <TabNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main content with page transitions */}
      <main className="pt-14">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Only show footer on contact tab */}
      {activeTab === "call" && <Footer />}

      {/* Sound toggle */}
      <SoundToggle />
    </SoundProvider>
  );
}
