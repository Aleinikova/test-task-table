import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        '0.75': '3px',
        '1.25': '5px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
        table: '#ECEEF1',
        head: '#D9DEE3',
        primary: '#CBCFD6',
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        primary: '#363A43',
        secondary: '#5A6170',
        successDark: '#478524',
        pendingDark: '#FF9900',
        idleDark: '#6E7686',
        success: '#B8EF81',
        pending: '#FFE663',
        idle: '#C1C8D1',
        successLight: '#b8ef814d',
        pendingLight: '#ffe6634d',
        idleLight: '#c1c8d14d',
      },
    },
  },
  plugins: [],
};
export default config;
