import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Movie-tracking/',
  resolve: {
    alias: {
      "@": "/src" // Это пример, убедитесь, что путь соответствует вашей структуре проекта
    }
  }
})
