import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '51': '12.75rem', //204px
      },
      height: {
        '7.75': '1.9rem', //31px 左辺は÷4 右辺は÷16
      },
      fontSize: {
        '4.5xl': '2.5rem', // 40px
      },
      spacing: {
        '4.5': '1.125rem', // 18px
      },
      colors: {
        green: {
          main: '#14b8a6',
        },
        orange: {
          main: '#F97316',
        },
      },
    },
  },
  plugins: [],
};
export default config;
