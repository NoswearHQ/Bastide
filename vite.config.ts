import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/build/' : '/',        // DEV: '/', PROD: '/build/'
  build: {
    outDir: 'public/build',
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      // <<< DIT A VITE QUE L’ENTRÉE EST main.tsx (pas index.html)
      input: fileURLToPath(new URL('./assets/react/main.tsx', import.meta.url)),
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./assets/react', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    cors: true,
  },
})
