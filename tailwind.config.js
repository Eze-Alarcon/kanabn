/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kpurple': '#635FC7',
        'kpurpleli': '#A8A4FF',
        'kblack': '#000112',
        'kblackli': '#20212C',
        'kblackli2': '#2B2C37',
        'kgray': '#3E3F4E',
        'kcian': '#E4EBFA',
        'kcianli': '#F4F7FD',
        'kwhite': '#FFFFFF',
        'kred': '#EA5555',
        'kred': '#EA5555',
        'kredli': '#FF9898',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
