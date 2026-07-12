import Reveal from './Reveal';

export default function SectionTitle({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <Reveal className="relative mb-10">
      <div className="mb-3 inline-flex items-center gap-3 rounded-lg border border-border bg-surface/80 px-3 py-2">
        <span className="font-mono text-xs text-primary">{number}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</span>
      </div>
      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-50 sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
