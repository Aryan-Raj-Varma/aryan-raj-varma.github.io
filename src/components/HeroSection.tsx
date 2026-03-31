import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity, y, scale }} className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            {/* Circuit board traces behind profile */}
            <svg className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)]" viewBox="0 0 300 300" fill="none">
              <path d="M0 150 H100 L110 140 H130" stroke="hsla(200,80%,55%,0.25)" strokeWidth="1.5" />
              <path d="M170 150 H190 L200 160 H300" stroke="hsla(200,80%,55%,0.25)" strokeWidth="1.5" />
              <path d="M0 120 H80 L90 110 H110" stroke="hsla(200,80%,55%,0.15)" strokeWidth="1" />
              <path d="M190 120 H210 L220 130 H300" stroke="hsla(200,80%,55%,0.15)" strokeWidth="1" />
              <path d="M0 180 H70 L85 170 H115" stroke="hsla(200,80%,55%,0.15)" strokeWidth="1" />
              <path d="M185 180 H220 L230 190 H300" stroke="hsla(200,80%,55%,0.15)" strokeWidth="1" />
              <path d="M150 0 V100 L140 110 V125" stroke="hsla(200,80%,55%,0.25)" strokeWidth="1.5" />
              <path d="M150 175 V190 L160 200 V300" stroke="hsla(200,80%,55%,0.25)" strokeWidth="1.5" />
              <path d="M120 0 V80 L130 95 V115" stroke="hsla(200,80%,55%,0.15)" strokeWidth="1" />
              <path d="M180 185 V210 L170 220 V300" stroke="hsla(200,80%,55%,0.15)" strokeWidth="1" />
              <path d="M100 100 L115 115" stroke="hsla(200,80%,55%,0.2)" strokeWidth="1" />
              <path d="M185 185 L200 200" stroke="hsla(200,80%,55%,0.2)" strokeWidth="1" />
              <path d="M100 200 L115 185" stroke="hsla(200,80%,55%,0.2)" strokeWidth="1" />
              <path d="M185 115 L200 100" stroke="hsla(200,80%,55%,0.2)" strokeWidth="1" />
              <circle cx="100" cy="150" r="2.5" fill="hsla(200,80%,55%,0.4)" />
              <circle cx="200" cy="150" r="2.5" fill="hsla(200,80%,55%,0.4)" />
              <circle cx="150" cy="100" r="2.5" fill="hsla(200,80%,55%,0.4)" />
              <circle cx="150" cy="200" r="2.5" fill="hsla(200,80%,55%,0.4)" />
              <circle cx="80" cy="120" r="2" fill="hsla(200,80%,55%,0.3)" />
              <circle cx="220" cy="120" r="2" fill="hsla(200,80%,55%,0.3)" />
              <circle cx="70" cy="180" r="2" fill="hsla(200,80%,55%,0.3)" />
              <circle cx="230" cy="180" r="2" fill="hsla(200,80%,55%,0.3)" />
              <circle cx="120" cy="80" r="2" fill="hsla(200,80%,55%,0.3)" />
              <circle cx="180" cy="210" r="2" fill="hsla(200,80%,55%,0.3)" />
            </svg>
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden glass-card p-1 glow-border relative z-10">
              <img
                src={profileImg}
                alt="Koricherla Aryan Raj Varma"
                className="w-full h-full object-cover rounded-full"
                width={512}
                height={512}
              />
            </div>
            <motion.div
              className="absolute -inset-2 rounded-full border border-primary/20 z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-wider mb-4"
        >
          <span className="gradient-text">ARYAN RAJ VARMA</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm md:text-base font-heading tracking-[0.2em] text-primary mb-6"
        >
          EMBEDDED ENGINEER • FIRMWARE DEVELOPER
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed"
        >
          Engineering reliable embedded systems where hardware meets intelligent firmware.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="glass-card-hover px-8 py-3 font-heading text-xs tracking-[0.2em] text-primary border-primary/30 hover:border-primary/60 transition-all"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="glass-card-hover px-8 py-3 font-heading text-xs tracking-[0.2em] text-foreground"
          >
            CONTACT ME
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
