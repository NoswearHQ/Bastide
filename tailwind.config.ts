import type { Config } from 'tailwindcss'
export default {
  content: [
    './assets/react/**/*.{ts,tsx,js,jsx}',
    './templates/**/*.html.twig',
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config
