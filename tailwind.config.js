/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        kpurple: '#635FC7',
        kpurpleli: '#A8A4FF',
        kblack: '#000112',
        kblackli: '#20212C',
        kblackli2: '#2B2C37',
        kgray: '#3E3F4E',
        kgrayli: '#828FA3',
        kcian: '#E4EBFA',
        kcianli: '#F4F7FD',
        kwhite: '#FFFFFF',
        kred: '#EA5555',
        kredli: '#FF9898'
      },
      fontSize: {
        xs: '12px',
        sm: '13px',
        md: '14px',
        lg: '18px',
        xl: '20px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }

    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms')
  ]
}
