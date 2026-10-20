/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        panel: 'var(--panel)',
        raised: 'var(--raised)',
        line: 'var(--line)',
        fg: 'var(--fg)',
        mute: 'var(--mute)',
        accent: 'var(--accent)',
        rec: 'var(--rec)',
      },
      fontFamily: {
        display: ['Unbounded', 'Arial Black', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { page: '1240px' },
    },
  },
  plugins: [],
}
