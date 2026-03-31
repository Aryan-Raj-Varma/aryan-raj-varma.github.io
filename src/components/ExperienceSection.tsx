import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Embedded Systems Engineer Intern",
    company: "VIR Innovations",
    period: "Internship",
    points: [
      "Developed efficient and scalable firmware in C for ARM-based microcontrollers, ensuring reliable system performance in real-time environments",
      "Designed and implemented robust peripheral interfaces, including UART, I2C, LCD, RTC, and EEPROM, enabling seamless hardware communication",
      "Diagnosed and resolved complex hardware–software integration issues through structured debugging and low-level analysis",
      "Executed comprehensive testing and validation of embedded systems to ensure stability, accuracy, and fault tolerance",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xs tracking-[0.3em] text-primary mb-2">
            // EXPERIENCE
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-10 text-foreground">
            Work History
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="relative pl-12 md:pl-16 mb-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-primary glow-border" />

              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-foreground tracking-wide">
                      {exp.role}
                    </h4>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-heading tracking-wider mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + j * 0.1 }}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 text-[8px]">▸</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
