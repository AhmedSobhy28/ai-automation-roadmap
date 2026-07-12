'use client';
import { useEffect, useRef } from 'react';
import { useProgress } from '@/context/ProgressContext';
import { useToast } from '@/context/ToastContext';

export default function MilestoneWatcher() {
  const { percent } = useProgress();
  const { push } = useToast();
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    [25, 50, 75, 100].forEach((m) => {
      if (percent >= m && !fired.current.has(m)) {
        fired.current.add(m);
        push(m === 100 ? 'Roadmap complete. Ship it.' : `${m}% complete. Keep going.`, m === 100 ? '100' : 'OK');
      }
    });
  }, [percent, push]);

  return null;
}
