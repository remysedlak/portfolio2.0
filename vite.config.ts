import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext',
  },
  base: '/', // Change if you're deploying under a subdirectory
})
