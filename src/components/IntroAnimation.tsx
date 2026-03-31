import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"boot" | "connect" | "power" | "done">("boot");
  const [bootLines, setBootLines] = useState<string[]>([]);

  const lines = [
    "> Initializing firmware...",
    "> Loading peripherals: UART, I2C, SPI...",
    "> Configuring GPIO pins...",
    "> Establishing serial connection...",
    "> Flashing firmware to MCU...",
    "> System boot complete.",
    "> Powering on portfolio...",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setBootLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase("connect"), 300);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === "connect") {
      setTimeout(() => setPhase("power"), 800);
    }
    if (phase === "power") {
      setTimeout(() => setPhase("done"), 1200);
    }
    if (phase === "done") {
      setTimeout(onComplete, 400);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl w-full px-6">
            {/* Terminal window */}
            <div className="glass-card p-1">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                <span className="ml-2 text-xs text-muted-foreground font-heading tracking-wider">
                  FIRMWARE_BOOT.exe
                </span>
              </div>
              <div className="p-4 font-mono text-sm min-h-[220px]">
                {bootLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`${
                      i === bootLines.length - 1 && phase === "boot"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
                {phase === "boot" && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                  />
                )}
              </div>
            </div>

            {/* Power indicator */}
            {(phase === "connect" || phase === "power") && (
              <motion.div
                className="flex flex-col items-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full"
                  animate={{
                    backgroundColor:
                      phase === "power"
                        ? "hsl(185, 90%, 50%)"
                        : "hsl(220, 15%, 30%)",
                    boxShadow:
                      phase === "power"
                        ? "0 0 30px hsl(185, 90%, 50%), 0 0 60px hsl(200, 80%, 55%)"
                        : "none",
                  }}
                  transition={{ duration: 0.6 }}
                />
                <motion.p
                  className="text-xs font-heading tracking-[0.3em] mt-3 text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {phase === "power" ? "SYSTEM ONLINE" : "CONNECTING..."}
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
