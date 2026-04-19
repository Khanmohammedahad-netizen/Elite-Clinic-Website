import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'off-white': '#FAF9F7',
        surface: '#F5F3EF',
        border: '#E8E4DC',
        'text-primary': '#1A1A1A',
        'text-secondary': '#5C5C5C',
        'text-muted': '#9A9A9A',
        'primary': '#D40000',
        'secondary': '#008B8B',
        'accent-dark': '#1C1C1C',
        'accent-green': '#2D6A4F',
        'whatsapp': '#25D366',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(52px, 6vw, 80px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'section': ['clamp(32px, 4vw, 48px)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'card-title': ['20px', { lineHeight: '1.3' }],
        'label': ['11px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
        'nav': ['13px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        'stat-number': ['clamp(40px, 5vw, 64px)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
      },
      borderRadius: {
        'btn': '2px',
        'card': '8px',
        'pill': '100px',
        'avatar': '100%',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
        'doctor': '0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
