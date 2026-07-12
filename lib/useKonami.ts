'use client';
import { useEffect, useRef } from 'react';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export function useKonami(onUnlock: () => void) {
  const progress = useRef(0);
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const expected = KONAMI[progress.current];
      if (e.key === expected) {
        progress.current += 1;
        if (progress.current === KONAMI.length) {
          progress.current = 0;
          onUnlock();
        }
      } else {
        progress.current = e.key === KONAMI[0] ? 1 : 0;
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onUnlock]);
}