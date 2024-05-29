/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        51: '12.75rem', // 204px
        369: '23.063rem',
        440: '27.5rem',
        1000: '62.5rem',
      },
      height: {
        7.75: '1.9rem', // 31px 左辺は÷4 右辺は÷16
        440: '27.5rem',
        500: '31.25rem',
        550: '34.375rem',
        600: '37.5rem',
        700: '43.75rem',
      },
      colors: {
        green: {
          main: '#14b8a6',
        },
        orange: {
          main: '#f97316',
        },
        backGreen: '#EDFEFC',
      },
    },
  },
  plugins: [],
};

module.exports = config;
