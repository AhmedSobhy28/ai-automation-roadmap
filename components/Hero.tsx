'use client';
import { motion } from 'framer-motion';
import { Bot, Braces, CheckCircle2, ChevronDown, Database, Sparkles, Workflow, Zap } from 'lucide-react';
import ParticleNetwork from './effects/ParticleNetwork';

const pipeline = [
  { label: 'Trigger', icon: Zap, tone: 'text-accent' },
  { label: 'AI Step', icon: Bot, tone: 'text-primary' },
  { label: 'API', icon: Braces, tone: 'text-secondary' },
  { label: 'Data', icon: Database, tone: 'text-primary' },
  { label: 'Approval', icon: CheckCircle2, tone: 'text-accent' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden bg-grid px-5">
      <div className="absolute inset-0 -z-10">
        <ParticleNetwork />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,16,0.28),rgba(8,11,16,0.86))]" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary">
          <Workflow className="h-4 w-4" /> AI AUTOMATION ROADMAP
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="max-w-4xl text-4xl font-bold leading-tight text-gray-50 sm:text-6xl md:text-7xl">
          Build AI workflows that move real work forward
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          A practical path from foundations to no-code automations, prompt systems, AI APIs, agents, RAG, monitoring, and client-ready portfolio projects.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-9 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['24', 'Weeks'],
            ['7', 'Phases'],
            ['40+', 'Labs and checks'],
            ['6', 'Portfolio builds'],
          ].map(([n, l]) => (
            <div key={l} className="rounded-lg border border-white/10 bg-surface/80 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur">
              <div className="font-mono text-2xl text-gray-50">{n}</div>
              <div className="mt-1 text-xs text-muted">{l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }} className="mt-8 w-full max-w-5xl rounded-lg border border-white/10 bg-background/55 p-3 backdrop-blur">
          <div className="grid gap-2 sm:grid-cols-5">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative rounded-md border border-border bg-surface/80 px-3 py-3 text-left">
                  {index < pipeline.length - 1 && <span className="absolute right-[-10px] top-1/2 z-10 hidden h-px w-5 bg-secondary/50 sm:block" />}
                  <Icon className={`mb-2 h-4 w-4 ${step.tone}`} />
                  <p className="text-sm font-semibold text-gray-100">{step.label}</p>
                  <p className="mt-1 text-xs text-muted">Workflow layer</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-6 inline-flex items-center gap-2 text-xs text-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Developed by <span className="font-mono text-gray-200">Ahmed Sobhy</span>
        </motion.p>
      </div>

      <motion.a href="#toc" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted">
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
