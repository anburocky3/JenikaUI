/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './docs/**/*.{html,js,vue,ts,md}',
    './docs/.vitepress/**/*.{html,js,vue,ts,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: 'jui-',
};
