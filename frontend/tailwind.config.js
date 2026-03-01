import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                neon: {
                    green: '#39ff14',
                    'green-dim': '#2acc10',
                    'green-dark': '#1a8a0a',
                },
                djblack: {
                    DEFAULT: '#080808',
                    light: '#111111',
                    mid: '#1a1a1a',
                    card: '#141414',
                }
            },
            fontFamily: {
                display: ['Bebas Neue', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'neon-sm': '0 0 10px rgba(57,255,20,0.4), 0 0 20px rgba(57,255,20,0.15)',
                'neon': '0 0 20px rgba(57,255,20,0.5), 0 0 40px rgba(57,255,20,0.2)',
                'neon-lg': '0 0 30px rgba(57,255,20,0.6), 0 0 60px rgba(57,255,20,0.3)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(57,255,20,0.4)' },
                    '50%': { boxShadow: '0 0 25px rgba(57,255,20,0.8), 0 0 50px rgba(57,255,20,0.3)' },
                },
                'beam-sway': {
                    '0%, 100%': { transform: 'rotate(-15deg)', opacity: '0.6' },
                    '50%': { transform: 'rotate(15deg)', opacity: '1' },
                },
                'beam-sway-reverse': {
                    '0%, 100%': { transform: 'rotate(15deg)', opacity: '0.6' },
                    '50%': { transform: 'rotate(-15deg)', opacity: '1' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'beam-sway': 'beam-sway 4s ease-in-out infinite',
                'beam-sway-reverse': 'beam-sway-reverse 4s ease-in-out infinite',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
