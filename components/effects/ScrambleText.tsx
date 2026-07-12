'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

export default function ScrambleText({ text, className = '' }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 18;
    const interval = setInterval(() => {
      frame++;
      const revealCount = Math.floor((frame / total) * text.length);
      setDisplay(text.split('').map((ch, i) => ch === ' ' ? ' ' : i < revealCount ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));
      if (frame >= total) { setDisplay(text); clearInterval(interval); }
    }, 35);
    return () => clearInterval(interval);
  }, [inView, text]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}