import type { Metadata } from 'next';
import './globals.css';
import { ProgressProvider } from '@/context/ProgressContext';
import { ToastProvider } from '@/context/ToastContext';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import CommandPalette from '@/components/effects/CommandPalette';
import MilestoneWatcher from '@/components/effects/MilestoneWatcher';
import TabTitleSwitcher from '@/components/effects/TabTitleSwitcher';
import SmoothScroll from '@/components/effects/SmoothScroll';

export const metadata: Metadata = {
  title: 'AI Automation Roadmap',
  description: 'A practical 24-week roadmap for learning AI automation, workflows, agents, APIs, and portfolio projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-gray-200 font-sans antialiased">
        <ToastProvider>
          <ProgressProvider>
            <SmoothScroll>
              <ScrollProgress />
              <Header />
              <CommandPalette />
              <MilestoneWatcher />
              <TabTitleSwitcher />
              {children}
            </SmoothScroll>
          </ProgressProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
