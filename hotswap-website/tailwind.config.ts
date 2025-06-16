import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // <-- ensure it scans your components/pages
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"rotunda-variable"', 'Poppins', 'Helvetica', 'sans-serif'],
        rotunda: ['"rotunda-variable"', 'Poppins', 'Helvetica', 'sans-serif'],
        redondo: ['"redondo-ave"', 'sans-serif'],
        },
    },
  },
  plugins: [],
};

export default config;
