import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic tokens — theme-aware. Consumed by every component.
           Never hardcode bg-black / text-white — use these. */
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'surface-hover': 'var(--surface-hover)',
        fg: 'var(--fg)',
        'fg-strong': 'var(--fg-strong)',
        'fg-mid': 'var(--fg-mid)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        'fg-faint': 'var(--fg-faint)',
        'fg-invert': 'var(--fg-invert)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        'border-active': 'var(--border-active)',
        brand: {
          DEFAULT: 'var(--brand)',
          hover: 'var(--brand-hover)',
          fg: 'var(--brand-fg)',
          soft: 'var(--brand-soft)',
          2: 'var(--brand-2)',
          '2-soft': 'var(--brand-2-soft)',
        },
        danger: 'var(--danger)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        info: 'var(--info)',

        /* Legacy — kept for backwards compat during migration */
        primary: {
          DEFAULT: 'var(--brand)',
          light: 'var(--brand-hover)',
          dark: 'var(--brand)',
        },
        secondary: {
          DEFAULT: 'var(--brand-2)',
          light: 'var(--brand-2)',
          dark: 'var(--brand-2)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
      },
      borderColor: {
        DEFAULT: 'var(--border)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm2': 'var(--radius-sm)',
        'md2': 'var(--radius-md)',
        'lg2': 'var(--radius-lg)',
        'xl2': 'var(--radius-xl)',
        '2xl2': 'var(--radius-2xl)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        'out-quart': 'var(--ease-out-quart)',
        'out-expo': 'var(--ease-out-expo)',
        'in-out-quart': 'var(--ease-in-out-quart)',
        spring: 'var(--ease-spring)',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
        450: '450ms',
        600: '600ms',
      },
      letterSpacing: {
        'tightest2': '-0.035em',
        'tighter2': '-0.028em',
        'tight2': '-0.02em',
        'widest2': '0.16em',
      },
      fontSize: {
        display: ['var(--text-display)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        h1: ['var(--text-h1)', { lineHeight: '1.03', letterSpacing: '-0.028em' }],
        h2: ['var(--text-h2)', { lineHeight: '1.08', letterSpacing: '-0.022em' }],
        h3: ['var(--text-h3)', { lineHeight: '1.2', letterSpacing: '-0.014em' }],
        h4: ['var(--text-h4)', { lineHeight: '1.3', letterSpacing: '-0.008em' }],
        eyebrow: ['var(--text-label)', { lineHeight: '1', letterSpacing: '0.16em' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: '1.55' }],
        'body-md': ['var(--text-body)', { lineHeight: '1.6' }],
        'body-sm': ['var(--text-body-sm)', { lineHeight: '1.55' }],
      },
      maxWidth: {
        'container-narrow': '960px',
        'container': '1200px',
        'container-wide': '1400px',
        'container-full': '1600px',
        'prose-narrow': '52ch',
        'prose': '68ch',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'reveal-in': 'revealIn 0.7s var(--ease-out-quart) both',
      },
      keyframes: {
        revealIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
