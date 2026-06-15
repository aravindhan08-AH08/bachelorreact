import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const isVercel = process.env.VERCEL === '1';

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: (command === 'build' && !isVercel) ? '/Bachelor_static_react/' : '/',
  }
})

