import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    interface CircuitNode {
      x: number;
      y: number;
      connections: number[];
    }

    const particles: Particle[] = [];
    const circuitNodes: CircuitNode[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateCircuit();
    };

    const generateCircuit = () => {
      circuitNodes.length = 0;
      const cols = Math.floor(canvas.width / 200);
      const rows = Math.floor(canvas.height / 200);

      for (let r = 0; r < rows + 1; r++) {
        for (let c = 0; c < cols + 1; c++) {
          circuitNodes.push({
            x: c * 200 + (Math.random() - 0.5) * 80,
            y: r * 200 + (Math.random() - 0.5) * 80,
            connections: [],
          });
        }
      }

      // Create circuit-like connections (horizontal & vertical neighbors + some random)
      for (let i = 0; i < circuitNodes.length; i++) {
        for (let j = i + 1; j < circuitNodes.length; j++) {
          const dx = Math.abs(circuitNodes[i].x - circuitNodes[j].x);
          const dy = Math.abs(circuitNodes[i].y - circuitNodes[j].y);
          if ((dx < 250 && dy < 30) || (dy < 250 && dx < 30)) {
            if (Math.random() > 0.4) {
              circuitNodes[i].connections.push(j);
            }
          }
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Floating particles (more visible)
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let pulseOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pulseOffset += 0.005;

      // Draw circuit traces (blue wires)
      circuitNodes.forEach((node) => {
        node.connections.forEach((targetIdx) => {
          const target = circuitNodes[targetIdx];
          const midX = (node.x + target.x) / 2;
          const midY = (node.y + target.y) / 2;

          ctx.beginPath();

          // Draw L-shaped circuit paths
          if (Math.abs(node.x - target.x) > Math.abs(node.y - target.y)) {
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(midX, node.y);
            ctx.lineTo(midX, target.y);
            ctx.lineTo(target.x, target.y);
          } else {
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.x, midY);
            ctx.lineTo(target.x, midY);
            ctx.lineTo(target.x, target.y);
          }

          ctx.strokeStyle = `hsla(200, 80%, 55%, 0.08)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw circuit nodes (small dots at junctions)
      circuitNodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(200, 80%, 55%, 0.15)`;
        ctx.fill();
      });

      // Draw pulsing energy along some circuit paths
      circuitNodes.forEach((node, i) => {
        node.connections.forEach((targetIdx) => {
          const target = circuitNodes[targetIdx];
          const t = (Math.sin(pulseOffset * 3 + i * 0.7) + 1) / 2;
          const px = node.x + (target.x - node.x) * t;
          const py = node.y + (target.y - node.y) * t;

          if (Math.random() > 0.97) {
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(200, 80%, 65%, 0.6)`;
            ctx.fill();
          }
        });
      });

      // Draw floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(200, 80%, 55%, ${p.opacity})`;
        ctx.fill();

        // Glow effect on larger particles
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          gradient.addColorStop(0, `hsla(200, 80%, 55%, ${p.opacity * 0.4})`);
          gradient.addColorStop(1, `hsla(200, 80%, 55%, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(200, 80%, 55%, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleBackground;
