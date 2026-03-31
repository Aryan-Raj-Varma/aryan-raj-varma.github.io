import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Embedded & Firmware",
    skills: ["C", "C++", "Embedded C", "Python"],
  },
  {
    title: "Protocols",
    skills: ["UART", "I2C", "SPI", "CAN", "TCP/IP"],
  },
  {
    title: "Microcontrollers",
    skills: ["LPC2148", "STM32", "ESP32", "ATmega328"],
  },
  {
    title: "Tools",
    skills: ["STM32CubeIDE", "Keil", "Arduino IDE", "GCC"],
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "RTOS"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xs tracking-[0.3em] text-primary mb-2">
            // SKILLS
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-10 text-foreground">
            Tech Stack
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card-hover p-6"
            >
              <h4 className="font-heading text-xs tracking-[0.15em] text-primary mb-4">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
