import { useState, useCallback } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollFadeSection from "@/components/ScrollFadeSection";
import { motion } from "framer-motion";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ParticleBackground />
          <Navbar />
          <main className="relative">
            <HeroSection />
            <ScrollFadeSection><AboutSection /></ScrollFadeSection>
            <ScrollFadeSection><SkillsSection /></ScrollFadeSection>
            <ScrollFadeSection><ExperienceSection /></ScrollFadeSection>
            <ScrollFadeSection><ProjectsSection /></ScrollFadeSection>
            <ScrollFadeSection><ContactSection /></ScrollFadeSection>
          </main>
        </motion.div>
      )}
    </>
  );
};

export default Index;
