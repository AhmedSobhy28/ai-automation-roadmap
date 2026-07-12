import { Compass, Target } from 'lucide-react';
import { specializationTracks } from '@/lib/data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function SpecializationTracks() {
  return (
    <section id="tracks" className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20">
      <SectionTitle number="08" label="After the fundamentals" title="Specialization Tracks" />
      <Reveal delay={0.1}>
        <p className="text-gray-300 max-w-2xl mb-10 leading-relaxed">
          Choose one track after you understand the fundamentals. Each path is tied to a practical project so your learning becomes visible proof.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {specializationTracks.map((track, index) => (
          <Reveal key={track.title} delay={index * 0.05}>
            <article className="h-full rounded-lg border border-border bg-surface p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-secondary mb-2">Track</p>
                  <h3 className="text-lg font-semibold text-gray-100">{track.title}</h3>
                </div>
                <Compass className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{track.focus}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {track.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-border bg-background/40 px-2 py-1 text-xs text-muted">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="rounded-md border border-primary/20 bg-primary/5 p-3">
                <p className="mb-1 flex items-center gap-2 font-mono text-xs text-primary">
                  <Target className="h-3.5 w-3.5" />
                  Starter project
                </p>
                <p className="text-sm text-gray-300">{track.starterProject}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
