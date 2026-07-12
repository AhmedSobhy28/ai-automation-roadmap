'use client';
import { useEffect } from 'react';

export default function TabTitleSwitcher() {
  useEffect(() => {
    const original = document.title;
    function onVisibility() { document.title = document.hidden ? 'Workflow paused...' : original; }
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);
  return null;
}
