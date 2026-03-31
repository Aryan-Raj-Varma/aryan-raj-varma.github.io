import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "aryansunny2002@gmail.com",
    href: "mailto:aryansunny2002@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aryan Raj Varma",
    href: "https://linkedin.com/in/aryan-raj-varma-koricherla-255078265",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Aryan-Raj-Varma",
    href: "https://github.com/Aryan-Raj-Varma",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: undefined,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xs tracking-[0.3em] text-primary mb-2">
            // CONTACT
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-10 text-foreground">
            Get In Touch
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            const Wrapper = c.href ? "a" : "div";
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Wrapper
                  {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer", onClick: (e: React.MouseEvent) => { e.preventDefault(); window.open(c.href, "_blank"); } } : {})}
                  className="glass-card-hover p-5 flex items-center gap-4 block cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-heading tracking-wider">
                      {c.label}
                    </p>
                    <p className="text-sm text-foreground font-medium">{c.value}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-8 border-t border-border"
        >
          <p className="text-xs text-muted-foreground font-heading tracking-wider">
            © 2026 KORICHERLA ARYAN RAJ VARMA — BUILT WITH PASSION & FIRMWARE
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
