/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF6EF',
        paper2: '#F6EDE4',
        ink: '#2B241E',
        inksoft: '#6E6357',
        burgundy: '#5A1820',
        burgundy2: '#7A2C36',
        wine: '#241016',
        winedeep: '#1C0A0F',
        winedark: '#120608',
        brand: '#C63A3A',
        gold: '#B9862F',
        goldbright: '#D9AC55',
        goldlight: '#F0D08A',
        rose: '#E4B2B2',
        cream: '#F3E4D2',
        creamdim: '#D8BCAE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        caps: ['Cinzel', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        shine: { to: { backgroundPosition: '200% center' } },
        drift: {
          '0%': { transform: 'translateY(20vh) translateX(0)', opacity: 0 },
          '12%': { opacity: 0.5 },
          '88%': { opacity: 0.4 },
          '100%': { transform: 'translateY(-110vh) translateX(38px)', opacity: 0 },
        },
        twinkle: {
          '0%,100%': { opacity: 0.15, transform: 'scale(.7)' },
          '50%': { opacity: 0.85, transform: 'scale(1)' },
        },
        marquee: { to: { transform: 'translateX(-50%)' } },
        pulsedot: { '50%': { opacity: 0.4 } },
        heart: { '0%,100%': { opacity: 0.85 }, '50%': { opacity: 0.3 } },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        drift: 'drift linear infinite',
        twinkle: 'twinkle ease-in-out infinite',
        marquee: 'marquee 36s linear infinite',
        spinslow: 'spin 20s linear infinite',
        pulsedot: 'pulsedot 2.4s infinite',
        heart: 'heart 3s infinite',
      },
    },
  },
  plugins: [],
}
