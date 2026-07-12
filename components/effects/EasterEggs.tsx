'use client';
import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useKonami } from '@/lib/useKonami';
import { useToast } from '@/context/ToastContext';
import MatrixOverlay from './MatrixOverlay';

export default function EasterEggs() {
  const [matrix, setMatrix] = useState(false);
  const { push } = useToast();
  const unlock = useCallback(() => { setMatrix(true); push('Hidden workflow unlocked.', 'OK'); }, [push]);
  useKonami(unlock);
  return <AnimatePresence>{matrix && <MatrixOverlay onDone={() => setMatrix(false)} />}</AnimatePresence>;
}
