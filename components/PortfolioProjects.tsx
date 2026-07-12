import { FileCheck2, FolderGit2 } from 'lucide-react';
import { portfolioProjects } from '@/lib/data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function PortfolioProjects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20">
      <SectionTitle number="09" label="Proof of skill" title="Portfolio Projects" />
      <Reveal delay={0.1}>
        <p className="text-gray-300 max-w-2xl mb-10 leading-relaxed">
          Use these projects as public evidence of your ability. The strongest portfolio shows process, decisions, screenshots, and measurable workflow outcomes.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-4">
        {portfolioProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="h-full rounded-lg border border-border bg-surface p-5">
              <div className="mb-3 flex items-center gap-3">
                <FolderGit2 className="h-5 w-5 text-secondary" />
                <h3 className="text-lg font-semibold text-gray-100">{project.title}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.outcome}</p>
              <div className="rounded-md border border-border bg-background/40 p-3">
                <p className="mb-1 flex items-center gap-2 font-mono text-xs text-primary">
                  <FileCheck2 className="h-3.5 w-3.5" />
                  Evidence to publish
                </p>
                <p className="text-sm text-gray-300">{project.proof}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
