import SpotlightCard from './effects/SpotlightCard';
import { foundationData } from '@/lib/data';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function FoundationSection() {
  const { intro, protects, matters, coreComponents, challenges, opportunity } = foundationData;
  return (
    <section
      id="foundation"
      className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20"
    >
      <SectionTitle
        number="00"
        label="Foundation"
        title="What is AI Automation?"
      />
      <Reveal delay={0.1}>
        <p className="text-gray-300 max-w-2xl mb-10 leading-relaxed">{intro}</p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-4 mb-14">
        {[protects, matters].map((block, index) => (
          <Reveal key={block.heading} delay={index * 0.05}>
            <div className="h-full rounded-lg border border-border bg-surface p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-100">{block.heading}</h3>
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="text-xl font-semibold text-gray-100 mb-6">
          Core Components of AI Automation
        </h3>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
        {coreComponents.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <SpotlightCard className="p-4 rounded-lg bg-surface border border-border h-full">
              <div className="mb-3 inline-flex rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">{c.icon}</div>
              <h4 className="font-semibold text-gray-100 text-sm mb-1">
                {c.title}
              </h4>
              <p className="text-xs text-muted mb-2 leading-relaxed">
                {c.desc}
              </p>
              <p className="text-xs font-mono text-secondary">{c.example}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="text-xl font-semibold text-gray-100 mb-6">
          Known Challenges
        </h3>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {challenges.map((c, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="p-4 rounded-lg bg-surface border border-border text-sm text-gray-300">
              <p className="mb-2 inline-flex rounded-md border border-secondary/20 bg-secondary/10 px-2 py-1 font-mono text-xs text-secondary">{c.icon}</p>
              <p>{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="automation-surface p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold text-gray-100 mb-3">
            The Opportunity
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
            {opportunity.text}
          </p>
          <div className="flex flex-wrap gap-3">
            {opportunity.paths.map((p) => (
              <div
                key={p.title}
                className="px-4 py-2 rounded-lg bg-background/50 border border-border text-sm flex items-center gap-2 text-gray-200"
              >
                <span className="font-mono text-xs text-secondary">{p.icon}</span>
                {p.title}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
