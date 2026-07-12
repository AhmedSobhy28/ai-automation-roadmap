'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, ExternalLink, FlaskConical, Gauge, ListChecks } from 'lucide-react';
import { Week } from '@/lib/types';
import ChecklistBox from './ChecklistBox';
import NoteBox from './NoteBox';

export default function WeekAccordion({ week, defaultOpen = false }: { week: Week; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-border bg-surface overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-surface2/55">
        <div className="flex flex-col gap-2 pr-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs text-secondary px-2 py-1 rounded-md bg-secondary/10 border border-secondary/20">{week.label}</span>
            <span className="font-semibold text-gray-100">{week.title}</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono text-muted">
            {week.difficulty && (
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background/40 px-2 py-1">
                <Gauge className="h-3 w-3 text-primary" />
                {week.difficulty}
              </span>
            )}
            {week.estimatedTime && (
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background/40 px-2 py-1">
                <Clock className="h-3 w-3 text-secondary" />
                {week.estimatedTime}
              </span>
            )}
          </div>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-4 h-4 text-muted" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <div className="px-5 pb-5 grid sm:grid-cols-2 gap-4">
              {week.groups.map((g, i) =>
                g.type === 'list' ? (
                  <ChecklistBox key={i} idPrefix={`${week.id}-g${i}`} heading={g.heading} icon={g.icon} items={g.items ?? []} />
                ) : (
                  <NoteBox key={i} heading={g.heading} icon={g.icon} text={g.text ?? ''} />
                )
              )}
              {week.lab && (
                <div className="p-5 rounded-lg bg-secondary/5 border border-secondary/20 h-full">
                  <h4 className="flex items-center gap-2 font-semibold text-secondary mb-3 text-sm">
                    <FlaskConical className="h-4 w-4" />
                    Practical Lab
                  </h4>
                  <p className="text-sm font-semibold text-gray-100 mb-2">{week.lab.title}</p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><span className="text-muted">Tool:</span> {week.lab.tool}</p>
                    <p><span className="text-muted">Output:</span> {week.lab.expectedOutput}</p>
                  </div>
                </div>
              )}
              {week.resources && week.resources.length > 0 && (
                <div className="p-5 rounded-lg bg-surface2/70 border border-border h-full">
                  <h4 className="flex items-center gap-2 font-semibold text-gray-100 mb-3 text-sm">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Trusted Resources
                  </h4>
                  <ul className="space-y-3">
                    {week.resources.map((item) => (
                      <li key={item.url}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-3 text-sm text-gray-300 transition-colors hover:text-primary"
                        >
                          <span>
                            <span className="block">{item.title}</span>
                            <span className="block text-xs text-muted">{item.source}</span>
                          </span>
                          <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-primary" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {week.checkpoints && week.checkpoints.length > 0 && (
                <div className="p-5 rounded-lg bg-primary/5 border border-primary/20 h-full sm:col-span-2">
                  <h4 className="flex items-center gap-2 font-semibold text-primary mb-3 text-sm">
                    <ListChecks className="h-4 w-4" />
                    Ready to Move On If
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {week.checkpoints.map((checkpoint) => (
                      <p key={checkpoint} className="rounded-md border border-border bg-background/40 p-3 text-sm text-gray-300">
                        {checkpoint}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
