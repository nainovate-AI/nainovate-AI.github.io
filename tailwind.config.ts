import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;