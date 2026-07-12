'use client';
import { useProgress } from '@/context/ProgressContext';
import { Bot, Search } from 'lucide-react';

export default function Header() {
  const { percent } = useProgress();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-gray-100">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-primary/25 bg-primary/10">
            <Bot className="h-4 w-4 text-primary" />
          </span>
          <span className="hidden sm:inline">AI Automation</span>
          <span className="text-muted">Roadmap</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
            className="hidden items-center gap-2 rounded-lg border border-border bg-surface/70 px-3 py-2 text-xs text-muted transition-colors hover:border-primary/50 hover:text-primary sm:flex"
          >
            <Search className="h-3.5 w-3.5" />
            Search
          </button>
          <div className="hidden h-2 w-28 overflow-hidden rounded-full bg-surface2 sm:block">
            <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500" style={{ width: `${percent}%` }} />
          </div>
          <span className="font-mono text-xs text-primary">{percent}%</span>
        </div>
      </div>
    </header>
  );
}
