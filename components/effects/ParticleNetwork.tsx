'use client';
import { useEffect, useRef } from 'react';

const labels = ['Form', 'CRM', 'AI', 'API', 'DB', 'Review', 'Email', 'Logs'];

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let time = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    function nodePosition(index: number, total: number) {
      const column = index % 4;
      const row = Math.floor(index / 4);
      const x = width * (0.14 + column * 0.24) + Math.sin(time * 0.018 + index) * 10;
      const y = height * (0.18 + row * 0.36) + Math.cos(time * 0.015 + index) * 12;
      return { x, y };
    }

    let raf: number;
    function draw() {
      if (!ctx) return;
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const nodes = labels.map((_, index) => nodePosition(index, labels.length));
      ctx.lineWidth = 1.4;
      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i];
        const b = nodes[i + 1];
        const pulse = (Math.sin(time * 0.04 + i) + 1) / 2;
        ctx.strokeStyle = `rgba(96,165,250,${0.16 + pulse * 0.18})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.bezierCurveTo(a.x + 70, a.y, b.x - 70, b.y, b.x, b.y);
        ctx.stroke();
      }

      nodes.forEach((node, index) => {
        const pulse = (Math.sin(time * 0.035 + index) + 1) / 2;
        ctx.fillStyle = 'rgba(17,24,34,0.88)';
        ctx.strokeStyle = index === 2 ? 'rgba(45,212,191,0.88)' : 'rgba(148,163,184,0.32)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(node.x - 36, node.y - 18, 72, 36, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = index === 2 ? '#2dd4bf' : index === 5 ? '#f59e0b' : '#dbeafe';
        ctx.font = '12px Segoe UI, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[index], node.x, node.y);

        ctx.fillStyle = `rgba(45,212,191,${0.18 + pulse * 0.12})`;
        ctx.beginPath();
        ctx.arc(node.x + 28, node.y - 12, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-80" />;
}
