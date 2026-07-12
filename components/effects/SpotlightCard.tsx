'use client';
import { useRef, ReactNode } from 'react';

export default function SpotlightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`relative overflow-hidden group ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(240px circle at var(--mx) var(--my), rgba(45,212,191,0.14), rgba(96,165,250,0.06), transparent 72%)' }}
      />
      {children}
    </div>
  );
}
