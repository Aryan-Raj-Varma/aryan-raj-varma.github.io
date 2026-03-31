import { motion } from "framer-motion";
import profileImg from "@/assets/profile-placeholder.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden glass-card p-1 glow-border">
              <img
                src={profileImg}
                alt="Koricherla Aryan Raj Varma"
                className="w-full h-full object-cover rounded-full"
                width={512}
                height={512}
              />
            </div>
            <motion.div
              className="absolute -inset-2 rounded-full border border-primary/20"
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
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
