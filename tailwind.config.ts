import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#F0F3F8',
          100: '#D9DFE9',
          200: '#A8B5CB',
          300: '#778BAE',
          400: '#4A6188',
          500: '#293D62',
          600: '#1A2D4F',
          700: '#11223D',
          800: '#0B1929',
          900: '#070F1B',
        },
        champagne: {
          50: '#FBF7F0',
          100: '#F4ECDB',
          200: '#E8D6B0',
          300: '#DBBE83',
          400: '#C9A961',
          500: '#B58F44',
          600: '#977433',
          700: '#735628',
          800: '#503C1C',
          900: '#332510',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F5F1EA',
          300: '#EDE5D2',
          400: '#E0D3B5',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.3em',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
