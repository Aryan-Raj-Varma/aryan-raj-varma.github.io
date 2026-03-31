import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

const ScrollFadeSection = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade in as section enters, fade out as it leaves
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ opacity, y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollFadeSection;
