'use client';
import { useEffect, useState } from 'react';

export default function Typewriter({ lines, speed = 35 }: { lines: string[]; speed?: number }) {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    let lineIndex = 0, charIndex = 0, current = '';
    const result: string[] = [];
    const interval = setInterval(() => {
      if (lineIndex >= lines.length) { clearInterval(interval); return; }
      current += lines[lineIndex][charIndex];
      charIndex++;
      setOutput([...result, current]);
      if (charIndex >= lines[lineIndex].length) {
        result.push(current); current = ''; charIndex = 0; lineIndex++;
      }
    }, speed);
    return () => clearInterval(interval);
  }, [lines, speed]);

  return (
    <div className="font-mono text-xs sm:text-sm text-left space-y-1">
      {output.map((line, i) => (
        <p key={i} className="text-primary">
          <span className="text-secondary">$ </span>{line}
          {i === output.length - 1 && <span className="inline-block w-2 h-3.5 bg-primary ml-1 animate-pulse" />}
        </p>
      ))}
    </div>
  );
}