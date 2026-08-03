/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        paper2: 'rgb(var(--color-paper2) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        inksoft: 'rgb(var(--color-ink-soft) / <alpha-value>)',
        burgundy: 'rgb(var(--color-burgundy) / <alpha-value>)',
        burgundy2: 'rgb(var(--color-burgundy2) / <alpha-value>)',
        wine: 'rgb(var(--color-wine) / <alpha-value>)',
        winedeep: 'rgb(var(--color-wine-deep) / <alpha-value>)',
        winedark: 'rgb(var(--color-wine-dark) / <alpha-value>)',
        brand: 'rgb(var(--color-brand) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        goldbright: 'rgb(var(--color-gold-bright) / <alpha-value>)',
        goldlight: 'rgb(var(--color-gold-light) / <alpha-value>)',
        rose: 'rgb(var(--color-rose) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        creamdim: 'rgb(var(--color-cream-dim) / <alpha-value>)',
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
