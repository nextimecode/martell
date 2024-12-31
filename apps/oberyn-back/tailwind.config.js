import { nextui } from '@nextui-org/theme'

/**
 * @type {import('tailwindcss').Config}
 */

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui()]
}
