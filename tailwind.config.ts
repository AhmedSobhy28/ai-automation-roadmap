import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#080b10',
        surface: '#111822',
        surface2: '#172131',
        border: '#2a3441',
        primary: '#2dd4bf',
        secondary: '#60a5fa',
        accent: '#f59e0b',
        muted: '#9ca8b8',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
