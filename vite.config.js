import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SPA202503-MAIN/',  // 👈 ESTO ES LO IMPORTANTE
})
