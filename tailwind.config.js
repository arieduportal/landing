/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'rasin-black': '#2f2e41'
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
  important: true
}
