/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: {
          50: '#e6f9fa',
          100: '#ccf3f5',
          200: '#99e8eb',
          300: '#66dce0',
          400: '#33d1d6',
          500: '#00c5cb',
          600: '#009ea3',
          700: '#00767a',
          800: '#004f52',
          900: '#002729',
        },
        secondary: {
          50: '#f5e6fa',
          100: '#ebccf5',
          200: '#d699eb',
          300: '#c266e0',
          400: '#ad33d6',
          500: '#9900cb',
          600: '#7a00a3',
          700: '#5c007a',
          800: '#3d0052',
          900: '#1f0029',
        },
        accent: {
          50: '#fff2e6',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff8000',
          600: '#cc6600',
          700: '#994d00',
          800: '#663300',
          900: '#331a00',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};