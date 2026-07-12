import Hero from '@/components/Hero';
import TableOfContents from '@/components/TableOfContents';
import FoundationSection from '@/components/FoundationSection';
import PhaseSection from '@/components/PhaseSection';
import PortfolioProjects from '@/components/PortfolioProjects';
import SpecializationTracks from '@/components/SpecializationTracks';
import Footer from '@/components/Footer';
import { phases } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <Hero />
      <TableOfContents />
      <FoundationSection />
      {phases.map((phase, i) => (
        <PhaseSection key={phase.id} phase={phase} defaultOpenFirst={i === 0} />
      ))}
      <SpecializationTracks />
      <PortfolioProjects />
      <Footer />
    </main>
  );
}
