/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Para soporte de modo oscuro
  theme: {
    extend: {
      colors: {
        // Paleta de colores ISDIN personalizada
        primary: {
          50: '#f0f5ff',
          100: '#e0ebfe',
          200: '#c0d7fc',
          300: '#92bafd',
          400: '#5991fb',
          500: '#3f69f7', // Color principal ISDIN
          600: '#2c4eee',
          700: '#2641dc',
          800: '#2436b2',
          900: '#23318d',
          950: '#1a1f54',
        },
        secondary: {
          50: '#f1f8fe',
          100: '#e2f1fb',
          200: '#bfe4f6',
          300: '#88d0ef',
          400: '#4abbe5',
          500: '#23a3d3', // Color secundario ISDIN
          600: '#1683b3',
          700: '#166891',
          800: '#175676',
          900: '#184863',
          950: '#0f2e45',
        },
        accent: {
          50: '#fef3f2',
          100: '#fde9e5',
          200: '#fbd7d0',
          300: '#f9bab0',
          400: '#f58e7d',
          500: '#ea5e4c', // Color de acento ISDIN
          600: '#da3e2c',
          700: '#b52e20',
          800: '#95281d',
          900: '#7b271e',
          950: '#42100b',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['ISDIN Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['ISDIN Display', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.04)',
        'medium': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        'hard': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        'scroll-y': 'scroll-y 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.500'),
              },
            },
            h1: {
              color: theme('colors.gray.900'),
              fontFamily: theme('fontFamily.display'),
            },
            h2: {
              color: theme('colors.gray.900'),
              fontFamily: theme('fontFamily.display'),
            },
            h3: {
              color: theme('colors.gray.900'),
              fontFamily: theme('fontFamily.display'),
            },
            h4: {
              color: theme('colors.gray.900'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
