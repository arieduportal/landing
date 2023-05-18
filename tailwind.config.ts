import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'helvetica': ['Helvetica', 'sans-serif'],
      'open': ['Open Sans', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'mono': ["Roboto Mono", 'Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', 'monospace']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  important: true
}
