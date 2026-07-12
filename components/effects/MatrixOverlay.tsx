'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MatrixOverlay({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const chars = 'AI0123456789FLOWAPI';

    let raf: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(6,7,11,0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#21d07a';
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    const timer = setTimeout(onDone, 5000);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [onDone]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[95] flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} className="relative font-mono text-primary text-xl sm:text-3xl bg-background/70 px-6 py-3 rounded-lg border border-primary/40 text-center">
        WORKFLOW ONLINE
      </motion.div>
    </motion.div>
  );
}
