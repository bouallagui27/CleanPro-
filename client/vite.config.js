import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: false, // هكا الكود يولي عبارة على طلاسم في الـ Inspect
  },
  plugins: [react()],
})
