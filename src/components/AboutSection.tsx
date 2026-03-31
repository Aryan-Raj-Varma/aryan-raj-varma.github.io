import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xs tracking-[0.3em] text-primary mb-2">
            // ABOUT
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-foreground">
            Who I Am
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-10"
        >
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
            I'm an <span className="text-foreground font-medium">Embedded Systems Engineer</span> with
            strong proficiency in <span className="text-primary">C programming</span> and hands-on
            experience working with microcontrollers, communication protocols, and firmware debugging.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
            My work spans peripheral interfacing (UART, I2C, SPI), real-time system development, and
            hardware-software integration. I thrive at the intersection of low-level programming and
            hardware design, building systems that are reliable and efficient.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Based in <span className="text-foreground">Hyderabad, India</span>, I'm passionate about
            creating embedded solutions that bridge the gap between physical hardware and intelligent
            software.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
