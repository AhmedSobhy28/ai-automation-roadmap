import { ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10 bg-surface/30">
      <div className="max-w-6xl mx-auto px-5 py-12 text-center">
        <p className="font-mono text-sm text-primary mb-1">AI Automation Roadmap</p>
        <p className="text-xs text-muted mb-6">A 24-week path from foundations to real workflows</p>
        <div className="mb-6 flex flex-col items-center gap-3">
          <p className="text-xs text-muted">
            Developed by <span className="font-mono text-gray-200">Ahmed Sobhy</span>
          </p>
          <a
            href="https://ahmedsobhy28.github.io/portfolio/contact.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-4 py-2 text-xs font-mono text-gray-200 transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Contact Ahmed
            <ExternalLink className="h-3.5 w-3.5 text-muted" />
          </a>
        </div>
        <div className="flex justify-center gap-6 text-xs text-muted">
          <a href="#hero" className="hover:text-primary transition-colors">Back to Top</a>
          <a href="#toc" className="hover:text-primary transition-colors">Contents</a>
        </div>
      </div>
    </footer>
  );
}
