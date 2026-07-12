'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400 });
  const springY = useSpring(y, { damping: 30, stiffness: 400 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setVisible(true);
    function move(e: MouseEvent) {
      x.set(e.clientX); y.set(e.clientY);
      setHovering(!!(e.target as HTMLElement).closest('a,button,[data-cursor-hover]'));
    }
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div className="fixed top-0 left-0 z-[90] pointer-events-none mix-blend-difference" style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}>
      <motion.div animate={{ width: hovering ? 36 : 16, height: hovering ? 36 : 16 }} transition={{ duration: 0.2 }} className="rounded-full bg-white" />
    </motion.div>
  );
}