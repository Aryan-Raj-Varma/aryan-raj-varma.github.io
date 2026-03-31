import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import gestoTalkImg from "@/assets/gesto-talk.png";

const projects = [
  {
    title: "ATM System with Database Integration",
    tech: ["C", "LPC2148", "RFID", "UART", "Linked Lists"],
    summary:
      "Full ATM simulation with RFID-based authentication, PIN verification, and PC backend banking system.",
    details: [
      "RFID + PIN based dual authentication",
      "PC backend banking system via UART",
      "Transaction history with linked list storage",
      "Real-time balance updates and withdrawal logic",
    ],
    image: undefined as string | undefined,
  },
  {
    title: "Banking System in C",
    tech: ["C", "File I/O", "Data Structures"],
    summary:
      "Console-based banking application with persistent data storage and full account management.",
    details: [
      "Account creation, deposit, withdrawal operations",
      "File I/O for persistent database storage",
      "Linked list-based transaction tracking",
      "Menu-driven interface with error handling",
    ],
    image: undefined as string | undefined,
  },
  {
    title: "Gesto Talk — Gesture Vocalizer",
    tech: ["Arduino", "Flex Sensors", "Accelerometer", "Bluetooth"],
    summary:
      "Wearable device that converts hand gestures into speech output for communication assistance.",
    details: [
      "Flex sensor + accelerometer gesture detection",
      "Real-time gesture-to-speech conversion",
      "LCD display + mobile app output via Bluetooth",
      "Assistive technology for speech-impaired users",
    ],
    image: gestoTalkImg,
  },
];
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xs tracking-[0.3em] text-primary mb-2">
            // PROJECTS
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-10 text-foreground">
            Featured Work
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              onClick={() => setSelectedProject(project)}
              className="glass-card-hover p-6 cursor-pointer group flex flex-col"
            >
              {/* Project image */}
              {project.image && (
                <div className="rounded-lg overflow-hidden mb-3 -mx-2 -mt-2">
                  <img src={project.image} alt={project.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              {/* Project number */}
              <span className="font-heading text-3xl font-bold text-primary/20 mb-3">
                0{i + 1}
              </span>
              <h4 className="font-heading text-sm font-semibold text-foreground tracking-wide mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-secondary text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-card border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-lg tracking-wide text-foreground">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">{selectedProject?.summary}</p>
            <div>
              <h5 className="text-xs font-heading tracking-[0.15em] text-primary mb-2">
                KEY FEATURES
              </h5>
              <ul className="space-y-1.5">
                {selectedProject?.details.map((d, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 text-[8px]">▸</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedProject?.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-secondary text-primary font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
