'use client';
import { useProgress } from '@/context/ProgressContext';
import { Check } from 'lucide-react';

export default function ChecklistBox({ idPrefix, heading, icon, items }: { idPrefix: string; heading: string; icon: string; items: string[] }) {
  const { checked, toggle } = useProgress();
  return (
    <div className="p-5 rounded-lg bg-background/35 border border-border h-full">
      <h4 className="flex items-center gap-2 font-semibold text-gray-100 mb-3">
        <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">{icon}</span>{heading}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => {
          const id = `${idPrefix}-${i}`;
          const isChecked = !!checked[id];
          return (
            <li key={id}>
              <button onClick={() => toggle(id)} className="w-full flex items-start gap-2.5 text-left group">
                <span className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${isChecked ? 'bg-primary border-primary' : 'border-border group-hover:border-primary/60'}`}>
                  {isChecked && <Check className="w-3 h-3 text-background" />}
                </span>
                <span className={`text-sm transition-colors ${isChecked ? 'text-muted line-through' : 'text-gray-300'}`}>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
