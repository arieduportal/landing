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
        'rasin-black': '#2f2e41',
        'transparent-white': '#1F171700',
        'royal-lilac': '#6c63ff',
      },
      boxShadow: {
        "app": "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        "custom": "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'merri': ['Merriweather', 'serif'],
      'satoshi': ['Satoshi', 'serif']
    }
  },
  plugins: [],
  important: true,
  safelist: ['prose', 'line-clamp-2', 'line-clamp-3', 'animate-pulse']
}
