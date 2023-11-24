import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-lilac': '#DEC0F1',
        'soft-lilac': '#B79CED',
        'rich-lilac': '#957FEF',
        'deep-lilac': '#7161EF'
      }
    }
   
  },
  plugins: [],
}
export default config
