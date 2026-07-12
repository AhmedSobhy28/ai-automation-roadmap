import Reveal from './Reveal';
import SpotlightCard from './effects/SpotlightCard';
import { tocItems } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function TableOfContents() {
  return (
    <section id="toc" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">Contents</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">Your Full Roadmap</h2>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted">
          Move through the same layers a real automation project uses: inputs, AI decisions, APIs, data, approvals, deployment, and client handoff.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tocItems.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <a href={`#${item.id}`} className="block">
              <SpotlightCard className="p-5 rounded-lg bg-surface border border-border hover:border-primary/50 transition-colors duration-300 hover:bg-surface2">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary">{item.number}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                </div>
                <h3 className="mt-3 font-semibold text-gray-100">{item.title}</h3>
                <p className="text-xs text-muted mt-1">{item.subtitle}</p>
              </SpotlightCard>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
