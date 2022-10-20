/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 12px 2px 0px #67E8F9',
        custom2: '0px 2px 8px 2px #ffffff',
        custom3: '0px 2px 8px 2px #67E8F9',
        custom4: '0px 0px 12px 8px #67E8F9',
      },
    },
  },
  plugins: [],
};
