'use client';
import { useEffect, useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, CornerDownLeft } from 'lucide-react';
import { tocItems } from '@/lib/data';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const results = useMemo(
    () => tocItems.filter((t) => `${t.number} ${t.title} ${t.subtitle}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((o) => !o); }
      if (e.key === 'Escape') setOpen(false);
    }
    function onCustom() { setOpen(true); }
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', onCustom);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', onCustom);
    };
  }, []);

  useEffect(() => { setActive(0); }, [query]);

  function go(id: string) {
    setOpen(false); setQuery('');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') setActive((a) => Math.min(a + 1, results.length - 1));
    if (e.key === 'ArrowUp') setActive((a) => Math.max(a - 1, 0));
    if (e.key === 'Enter' && results[active]) go(results[active].id);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4" onClick={() => setOpen(false)}>
          <motion.div initial={{ opacity: 0, y: -10, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.97 }} transition={{ duration: 0.18 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-xl border border-border bg-surface overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Search className="w-4 h-4 text-muted" />
              <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onKeyDown} placeholder="Jump to a phase..." className="w-full bg-transparent outline-none text-sm text-gray-100 placeholder:text-muted font-mono" />
              <span className="text-[10px] text-muted border border-border rounded px-1.5 py-0.5">ESC</span>
            </div>
            <div className="max-h-72 overflow-y-auto py-1">
              {results.length === 0 && <p className="px-4 py-6 text-sm text-muted text-center">No matches.</p>}
              {results.map((r, i) => (
                <button key={r.id} onClick={() => go(r.id)} onMouseEnter={() => setActive(i)} className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${i === active ? 'bg-primary/10 text-primary' : 'text-gray-300'}`}>
                  <span className="flex items-center gap-3"><span className="font-mono text-xs text-secondary">{r.number}</span>{r.title}</span>
                  {i === active && <CornerDownLeft className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}