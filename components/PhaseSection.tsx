import { Phase } from '@/lib/types';
import SectionTitle from './SectionTitle';
import WeekAccordion from './WeekAccordion';
import Reveal from './Reveal';

export default function PhaseSection({ phase, defaultOpenFirst = false }: { phase: Phase; defaultOpenFirst?: boolean }) {
  return (
    <section id={phase.id} className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20">
      <SectionTitle number={phase.number} label={phase.weeksRange} title={phase.title} />
      <Reveal delay={0.1}>
        <div className="mb-10 max-w-2xl">
          <p className="text-gray-300 leading-relaxed">{phase.intro}</p>
          {phase.lastUpdated && (
            <p className="mt-4 inline-flex rounded border border-border bg-surface2 px-3 py-1.5 font-mono text-xs text-muted">
              Last reviewed: {phase.lastUpdated}
            </p>
          )}
        </div>
      </Reveal>
      <div className="space-y-4">
        {phase.weeks.map((week, i) => (
          <Reveal key={week.id} delay={i * 0.05}>
            <WeekAccordion week={week} defaultOpen={defaultOpenFirst && i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
