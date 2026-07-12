'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { TOTAL_ITEMS } from '@/lib/data';

interface Ctx {
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
  percent: number;
}

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('cs-roadmap-progress') : null;
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cs-roadmap-progress', JSON.stringify(checked));
  }, [checked]);

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const count = Object.values(checked).filter(Boolean).length;
  const percent = TOTAL_ITEMS ? Math.round((count / TOTAL_ITEMS) * 100) : 0;

  return <ProgressContext.Provider value={{ checked, toggle, percent }}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}